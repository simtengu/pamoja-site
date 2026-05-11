"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Users, Wine, Home, ChevronLeft, ChevronRight, Check, ZoomIn, X } from "lucide-react";
import { detailedAmenities } from "@/data/amenities";
import { motion, AnimatePresence } from "framer-motion";

interface RoomSliderProps {
  images: string[];
  title: string;
}

function RoomSlider({ images, title }: RoomSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  return (
    <div 
      className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden group cursor-pointer"
      onClick={openLightbox}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative"
        >
          <img
            src={images[currentIndex]}
            alt={`${title} - View ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Center Zoom Icon */}
      <div 
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <ZoomIn className="w-12 h-12 text-white drop-shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500" />
      </div>

      {/* Slider Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={(e) => { e.stopPropagation(); prevSlide(); }}
          className="p-2 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); nextSlide(); }}
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

      {/* Lightbox Modal */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
              onClick={closeLightbox}
            >
              <button 
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[10000]"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                <button 
                  onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                  className="absolute left-0 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[10000] hidden md:block"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>

                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`${title} - Full View`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-full max-h-full object-contain shadow-2xl"
                  />
                </AnimatePresence>

                <button 
                  onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                  className="absolute right-0 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[10000] hidden md:block"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>

                {/* Mobile controls */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:hidden z-[10000]">
                  <button 
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="p-3 rounded-full bg-white/10 text-white"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="p-3 rounded-full bg-white/10 text-white"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-light tracking-widest text-sm">
                {currentIndex + 1} / {images.length}
              </div>

              {/* Keyboard support */}
              <KeyboardHandler onPrev={prevSlide} onNext={nextSlide} onClose={closeLightbox} />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}

// Helper component for keyboard support to avoid complex ref/effect in main component
function KeyboardHandler({ onPrev, onNext, onClose }: { onPrev: () => void; onNext: () => void; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrev, onNext, onClose]);
  return null;
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
