"use client";

import { useState } from "react";
import { Users, Wine, Home, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { detailedAmenities } from "@/data/amenities";
import { motion, AnimatePresence } from "framer-motion";

interface RoomSliderProps {
  images: string[];
  title: string;
}

function RoomSlider({ images, title }: RoomSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 font-serif italic uppercase tracking-widest text-xs">No images available</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - View ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Slider Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div 
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-safari-gold w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function PropertyRooms({ 
  propertyId,
  propertyName 
}: { 
  propertyId: string;
  propertyName?: string;
}) {
  const propertyData = detailedAmenities.find(p => p.propertyId === propertyId);
  const roomTypes = propertyData?.roomTypes || [];

  if (roomTypes.length === 0) {
    return (
      <div className="border-t border-gray-100 pt-16">
        <h2 className="text-4xl font-serif text-safari-dark mb-10 text-center">Available Room Types</h2>
        <p className="text-gray-500 font-light italic text-center">No room information is currently available for this property.</p>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-100 pt-16">
      <div className="text-center mb-16">
        <span className="text-safari-gold font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">Accommodation</span>
        <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">Available Room Types</h2>
        <div className="w-24 h-1 bg-safari-gold mx-auto mt-6"></div>
      </div>
      
      <div className="space-y-24">
        {roomTypes.map((room) => (
          <motion.div 
            key={room.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* Image Slider Section */}
            <RoomSlider images={room.images} title={room.title} />
            
            {/* Details Section */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-safari-gold/10 text-safari-gold text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {room.standard}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Users className="w-3 h-3" /> {room.occupancy}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-serif text-safari-dark uppercase tracking-tight">
                    {room.title}
                  </h3>
                </div>
                
                <div className="text-right">
                  <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Starting from</div>
                  <div className="text-3xl md:text-4xl font-serif text-safari-dark">
                    ${room.price} <span className="text-xs font-sans font-light text-gray-400">/ night</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">

                {/* Amenities - Horizontal Layout */}
                <div className="bg-gray-50/50 p-8 rounded-sm border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-safari-gold mb-8">Room Amenities</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4">
                    {room.amenities.map((amenity, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                        <Check className="w-4 h-4 text-safari-gold shrink-0" />
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
