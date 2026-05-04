"use client";

import { useEffect, useState, useMemo } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Property } from "@/types/property";
import { Room } from "@/types/room";
import Link from "next/link";
import { Coffee, Wifi, Bath, ShieldCheck, ChevronRight, BedDouble, SquareUserRound } from "lucide-react";

export default function RoomsPreview() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [allRooms, setAllRooms] = useState<Room[]>([]);
  const [roomTypes, setRoomTypes] = useState<Record<string, string>>({});
  
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const [propsSnap, roomsSnap, typesSnap] = await Promise.all([
          getDocs(
            query(collection(db, "properties"), where("isPublished", "==", true), orderBy("priority", "asc"))
          ),
          getDocs(
            query(collection(db, "rooms"), where("isPublished", "==", true), where("isActive", "==", true))
          ),
          getDocs(collection(db, "room-types"))
        ]);

        const propsData = propsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Property[];
        const roomsData = roomsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Room[];
        
        const typesMap: Record<string, string> = {};
        typesSnap.docs.forEach(doc => { typesMap[doc.id] = doc.data().title || doc.id; });

        setProperties(propsData);
        setAllRooms(roomsData);
        setRoomTypes(typesMap);

        if (propsData.length > 0) {
          setSelectedPropertyId(propsData[0].id);
        }
      } catch (err) {
        console.error("Error fetching rooms preview data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRoomsData();
  }, []);

  const filteredRooms = useMemo(() => {
    if (!selectedPropertyId) return [];
    return allRooms.filter(r => r.propertyId === selectedPropertyId).slice(0, 3);
  }, [allRooms, selectedPropertyId]);

  const iconMap = {
    "En-suite Bathroom": <Bath className="w-4 h-4 text-safari-accent" />,
    "Free Wi-Fi": <Wifi className="w-4 h-4 text-safari-accent" />,
    "Daily Housekeeping": <Coffee className="w-4 h-4 text-safari-accent" />,
    "24/7 Security": <ShieldCheck className="w-4 h-4 text-safari-accent" />,
    "2 Bedrooms": <BedDouble className="w-4 h-4 text-safari-accent" />,
    "King Bed": <BedDouble className="w-4 h-4 text-safari-accent" />,
    default: <SquareUserRound className="w-4 h-4 text-safari-accent" />
  } as Record<string, JSX.Element>;

  return (
    <section className="py-24 bg-safari-dark text-white relative flex flex-col items-center">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-safari-gold to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
            Discover Comfort
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Rooms & Suites</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Beautifully appointed rooms and suites, each designed to provide unparalleled comfort and luxury during your stay, blending seamless elegance with wild Africa.
          </p>
        </div>

        {/* Property Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {loading ? (
            <div className="h-10 w-64 bg-gray-800 animate-pulse rounded-sm"></div>
          ) : properties.map(prop => (
            <button
              key={prop.id}
              onClick={() => setSelectedPropertyId(prop.id)}
              className={`px-6 py-3 font-bold uppercase tracking-widest text-xs transition-colors rounded-sm ${
                selectedPropertyId === prop.id 
                  ? "bg-safari-gold text-safari-dark" 
                  : "bg-transparent border border-gray-700 text-gray-300 hover:border-safari-gold hover:text-safari-gold"
              }`}
            >
              {prop.name}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-gray-800 h-[400px] animate-pulse rounded-sm"></div>
            ))
          ) : filteredRooms.length === 0 ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12 text-gray-500 font-light italic">
              No rooms currently available for this property.
            </div>
          ) : filteredRooms.map((room) => {
            const img = room.photos && room.photos.length > 0 ? room.photos[0] : "/images/placeholder.jpeg";
            const roomType = roomTypes[room.type] || room.type || "Standard";
            const currentProp = properties.find(p => p.id === selectedPropertyId);
            
            // Map string amenities to icons if they match our map, otherwise use default
            const rawAmenities = room.amenities && room.amenities.length > 0 
              ? room.amenities 
              : ["En-suite Bathroom", "Free Wi-Fi"];
            const facilities = Array.from(new Set(rawAmenities)).slice(0, 4);

            return (
              <div key={room.id} className="bg-gray-900 border border-gray-800 rounded-sm overflow-hidden group flex flex-col h-full">
                <div className="relative h-64 overflow-hidden shrink-0">
                  <img 
                    src={img} 
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  <div className="absolute top-4 right-4 bg-safari-dark/90 text-safari-gold px-3 py-1 text-xs uppercase font-bold tracking-widest rounded-sm border border-safari-gold/30">
                    {roomType}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-serif group-hover:text-safari-gold transition-colors">
                      {room.name}
                    </h3>
                  </div>
                  
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-800 pb-4">
                    Capacity: Up to {room.numberOfPeople || "2"} Persons
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {facilities.map((fac, idx) => (
                      <div key={`${fac}-${idx}`} className="flex items-center text-sm text-gray-300 font-light truncate" title={fac}>
                        {iconMap[fac] || iconMap.default}
                        <span className="ml-2 truncate">{fac}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/accommodations/${currentProp?.slug || currentProp?.id}`} 
                    className="mt-auto flex items-center justify-between w-full uppercase text-xs font-bold tracking-widest text-safari-dark bg-white hover:bg-safari-gold hover:text-safari-dark px-6 py-4 rounded-sm transition-all group/btn"
                  >
                    <span>Explore Property</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
