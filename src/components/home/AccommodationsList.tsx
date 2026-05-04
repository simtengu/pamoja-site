"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Property } from "@/types/property";
import Link from "next/link";
import { ArrowRight, MapPin, Tent, Home as HomeIcon } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AccommodationsList() {
  const [accommodations, setAccommodations] = useState<Property[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 80 });

    const fetchProperties = async () => {
      try {
        const [propsSnap, typesSnap] = await Promise.all([
          getDocs(
            query(
              collection(db, "properties"),
              where("isPublished", "==", true),
              orderBy("priority", "asc")
            )
          ),
          getDocs(collection(db, "property-types"))
        ]);

        const typesMap: Record<string, string> = {};
        typesSnap.docs.forEach(doc => {
          typesMap[doc.id] = doc.data().title || doc.id;
        });
        setPropertyTypes(typesMap);

        const propsData = propsSnap.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Property[];
        
        setAccommodations(propsData);
      } catch (err) {
        console.error("Error fetching properties for AccommodationsList:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl" data-aos="fade-up">
            <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
              Our Properties
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">
              Featured Accommodations
            </h2>
          </div>
          <Link
            href="/accommodations"
            className="group flex flex-shrink-0 items-center gap-2 text-safari-accent font-bold uppercase text-xs tracking-widest hover:text-safari-gold mt-6 md:mt-0 pb-1 border-b-2 border-transparent hover:border-safari-gold transition-all"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Explore All Properties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-[400px] bg-gray-100 animate-pulse rounded-sm"></div>
            ))
          ) : accommodations.map((acc, index) => {
            const img = acc.photos && acc.photos.length > 0 ? acc.photos[0] : "/images/placeholder.jpeg";
            const firstCategory = acc.categories && acc.categories.length > 0 ? propertyTypes[acc.categories[0]] || "Property" : "Property";
            
            return (
              <div
                key={acc.id}
                className="group flex flex-col h-full rounded-sm overflow-hidden bg-safari-light border border-gray-100 hover:shadow-xl transition-shadow duration-500 cursor-pointer"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                {/* Image Container */}
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-safari-dark rounded-sm flex items-center">
                    <HomeIcon className="w-4 h-4 mr-2 text-safari-gold" /> {firstCategory}
                  </div>
                  <img
                    src={img}
                    alt={acc.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                </div>

                {/* Content Container */}
                <div className="p-8 flex-grow flex flex-col relative bg-white transform group-hover:-translate-y-2 transition-transform duration-300 shadow-lg -mt-6 mx-4 mb-4 rounded-sm">
                  <div className="flex justify-between items-start mb-2">
                    <p className="flex items-center text-xs tracking-wider text-gray-500 font-semibold uppercase">
                      <MapPin className="w-3 h-3 mr-1 text-safari-accent" /> {acc.region || "Tanzania"}
                    </p>
                  </div>

                  <h3 className="text-2xl font-serif text-safari-dark mb-4 group-hover:text-safari-accent transition-colors leading-tight">
                    {acc.name}
                  </h3>

                  <div className="h-[1px] w-full bg-gray-100 mb-6 mt-auto"></div>

                  <div className="flex justify-between items-center mt-auto">
                    <Link
                      href={`/accommodations/${acc.slug || acc.id}`}
                      className="text-xs font-bold tracking-widest text-safari-dark uppercase hover:text-safari-gold flex items-center gap-1 group/btn"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={`/booking?property=${encodeURIComponent(acc.name)}`}
                      className="text-white text-xs font-bold tracking-widest uppercase bg-safari-dark hover:bg-safari-gold px-4 py-2 rounded-sm transition-colors"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
