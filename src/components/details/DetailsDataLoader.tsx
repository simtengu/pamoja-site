"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Property } from "@/types/property";
import { Loader2, AlertCircle } from "lucide-react";
import DetailsVideoHero from "./DetailsVideoHero";
import DetailsContentLayout from "./DetailsContentLayout";
import StickyBookingWidget from "./StickyBookingWidget";
import { 
  PropertyOverview, 
  PropertyAmenities, 
  PropertyRules, 
  PropertyLocationMap,
  PropertyVideoTour
} from "./Sections";
import PropertyGallery from "./PropertyGallery";
import PropertyRooms from "./PropertyRooms";
import PropertyDining from "./PropertyDining";

export default function DetailsDataLoader({ id }: { id: string }) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [propertyCategories, setPropertyCategories] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        
        if (!id || id === "undefined") {
          setError("No property identifier provided.");
          setLoading(false);
          return;
        }

        let propData: Property | null = null;
        
        // 1. Try fetching by slug
        const propQuerySlug = query(collection(db, "properties"), where("slug", "==", id));
        const propSnapshotSlug = await getDocs(propQuerySlug);
        
        if (!propSnapshotSlug.empty) {
          propData = { id: propSnapshotSlug.docs[0].id, ...propSnapshotSlug.docs[0].data() } as Property;
        } else {
          // 2. Try fetching by document ID directly
          const { doc, getDoc } = await import("firebase/firestore");
          const propDocRef = doc(db, "properties", id);
          const propDocSnap = await getDoc(propDocRef);
          
          if (propDocSnap.exists()) {
             propData = { id: propDocSnap.id, ...propDocSnap.data() } as Property;
          }
        }

        if (!propData) {
          setError(`Property with identifier "${id}" not found.`);
          setLoading(false);
          return;
        }
        
        setProperty(propData);

        // Fetch reference data in parallel
        const [propTypesSnap] = await Promise.all([
          getDocs(collection(db, "property-types"))
        ]);

        const pMap: Record<string, string> = {};
        propTypesSnap.docs.forEach(d => {
          pMap[d.id] = d.data().title || d.id;
        });

        if (propData.categories && propData.categories.length > 0) {
          const resolvedCats = propData.categories.map(catId => pMap[catId] || catId);
          setPropertyCategories(resolvedCats);
        }

      } catch (err) {
        console.error("Failed to fetch property details:", err);
        setError("An error occurred while loading property details.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-safari-light gap-4">
        <Loader2 className="w-12 h-12 text-safari-gold animate-spin" />
        <p className="text-safari-dark/60 font-light tracking-wide uppercase text-xs">
          Loading Property Details&hellip;
        </p>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-safari-light gap-4 text-center px-4">
        <AlertCircle className="w-12 h-12 text-red-400" />
        <h2 className="text-3xl font-serif text-safari-dark mb-2">Oops!</h2>
        <p className="text-gray-600 font-light">{error || "Property not found."}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-safari-light">
      <DetailsVideoHero property={property} categories={propertyCategories} />
      
      <DetailsContentLayout 
        rightContent={<StickyBookingWidget propertyName={property.name} />}
        leftContent={
          <div className="space-y-16">
            <PropertyGallery photos={property.photos} name={property.name} />
            <PropertyOverview property={property} />
            <PropertyAmenities property={property} />
            <PropertyRooms 
              propertyId={property.id}
              propertyName={property.name} 
            />
            <PropertyDining propertyId={property.id} />
            <PropertyRules />
            <PropertyVideoTour property={property} />
            <PropertyLocationMap property={property} />
          </div>
        }
      />
    </div>
  );
}
