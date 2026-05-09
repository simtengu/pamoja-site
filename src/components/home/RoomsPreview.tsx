"use client";

import { useEffect, useState, useMemo } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Property } from "@/types/property";
import Link from "next/link";
import { Coffee, Wifi, Bath, ShieldCheck, ChevronRight, BedDouble, SquareUserRound, Check } from "lucide-react";
import { detailedAmenities } from "@/data/amenities";
import { motion, AnimatePresence } from "framer-motion";

export default function RoomsPreview() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPropsData = async () => {
      try {
        const propsSnap = await getDocs(
          query(collection(db, "properties"), where("isPublished", "==", true), orderBy("priority", "asc"))
        );

        const propsData = propsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Property[];
        setProperties(propsData);

        if (propsData.length > 0) {
          setSelectedPropertyId(propsData[0].id);
        }
      } catch (err) {
        console.error("Error fetching properties for preview:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPropsData();
  }, []);

  const filteredRoomTypes = useMemo(() => {
    if (!selectedPropertyId) return [];
    const propertyData = detailedAmenities.find(p => p.propertyId === selectedPropertyId);
    return propertyData?.roomTypes || [];
  }, [selectedPropertyId]);

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

        {/* Rooms Slider/Grid */}
        <div className="relative w-full overflow-hidden">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="bg-gray-800 h-[400px] animate-pulse rounded-sm"></div>
              ))}
            </div>
          ) : (
            <div className="relative group">
              <AnimatePresence mode="wait">
                {filteredRoomTypes.length === 0 ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 text-gray-500 font-light italic w-full"
                  >
                    No rooms currently available for this property.
                  </motion.div>
                ) : (
                  <div className="flex flex-wrap justify-center gap-8">
                    {filteredRoomTypes.map((room, idx) => {
                      const img = room.images && room.images.length > 0 ? room.images[0] : "/images/placeholder.jpeg";
                      const currentProp = properties.find(p => p.id === selectedPropertyId);
                      
                      return (
                        <motion.div 
                          key={`${selectedPropertyId}-${room.id}`}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="bg-gray-900 border border-gray-800 rounded-sm overflow-hidden flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] hover:border-safari-gold/30 transition-colors duration-500"
                        >
                          <div className="relative h-64 overflow-hidden shrink-0">
                            <img 
                              src={img} 
                              alt={room.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                            />
                            <div className="absolute top-4 right-4 bg-safari-dark/90 text-safari-gold px-3 py-1 text-[10px] uppercase font-bold tracking-widest rounded-sm border border-safari-gold/30">
                              {room.standard}
                            </div>
                          </div>
                          
                          <div className="p-8 flex flex-col flex-grow">
                            <h3 className="text-2xl font-serif mb-4 hover:text-safari-gold transition-colors cursor-default">
                              {room.title}
                            </h3>
                            
                            <div className="flex items-center gap-2 mb-6 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                              <span>${room.price} / Night</span>
                              <span className="text-gray-700">|</span>
                              <span>{room.occupancy}</span>
                            </div>

                            <div className="grid grid-cols-1 gap-y-2 mb-8 border-t border-gray-800/50 pt-4">
                              {room.amenities.slice(0, 4).map((amenity, idx) => (
                                <div key={idx} className="flex items-center text-xs text-gray-400 font-light">
                                  <Check className="w-3 h-3 text-safari-gold mr-2 shrink-0" />
                                  <span className="truncate">{amenity}</span>
                                </div>
                              ))}
                            </div>

                            <Link 
                              href={`/accommodations/${currentProp?.slug || currentProp?.id}`} 
                              className="mt-auto flex items-center justify-between w-full uppercase text-[10px] font-bold tracking-widest text-safari-dark bg-white hover:bg-safari-gold hover:text-safari-dark px-6 py-4 rounded-sm transition-all group/btn"
                            >
                              <span>View Property</span>
                              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
