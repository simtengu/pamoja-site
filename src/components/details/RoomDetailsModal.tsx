"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, Users, BedSingle, Wine, CheckCircle } from "lucide-react";
import { Room } from "@/types/room";

interface RoomDetailsModalProps {
  room: Room;
  isOpen: boolean;
  onClose: () => void;
  propertyName: string;
  typesMap?: Record<string, string>;
  standardsMap?: Record<string, string>;
}

export default function RoomDetailsModal({ room, isOpen, onClose, propertyName, typesMap, standardsMap }: RoomDetailsModalProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentImage]);

  if (!isOpen) return null;
  if (typeof document === "undefined") return null;

  const images = room.photos && room.photos.length > 0 ? room.photos : ["/images/placeholder.jpeg"];

  const handleNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl relative animate-[slideUp_0.3s_ease-out] flex flex-col">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/50 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-sm focus:outline-none"
        >
          <X className="w-6 h-6 text-safari-dark" />
        </button>

        {/* Image Slider */}
        <div className="relative w-full h-[300px] md:h-[450px] bg-safari-dark shrink-0">
          <img 
            src={images[currentImage]} 
            alt={`${room.name} view ${currentImage + 1}`} 
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 -ml-0.5" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-black/40 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 -mr-0.5" />
              </button>
              
              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`rounded-full transition-all duration-300 ${
                      idx === currentImage ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12 flex flex-col gap-10">
          
          {/* Header & Quick Info */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-gray-100 pb-8">
            <div>
              <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-2 block">
                {propertyName} — {typesMap?.[room.type] || room.type}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-safari-dark mb-4">
                {room.name} {room.number && <span className="text-safari-gold ml-2 italic font-sans font-bold opacity-80 text-2xl md:text-3xl">#{room.number}</span>}
              </h2>
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[11px] text-gray-500 font-medium uppercase tracking-[0.15em]">
                {room.numberOfPeople && (
                  <span className="flex items-center text-safari-dark/80"><Users className="w-4 h-4 mr-2 text-safari-gold" /> Up to {room.numberOfPeople} People</span>
                )}
                {room.beds && (
                  <span className="flex items-center text-safari-dark/80"><BedSingle className="w-4 h-4 mr-2 text-safari-gold" /> Up to {room.beds} Beds</span>
                )}
                {room.standard && (
                  <span className="flex items-center text-safari-dark/80"><Wine className="w-4 h-4 mr-2 text-safari-gold" /> {standardsMap?.[room.standard] || room.standard} Standard</span>
                )}
              </div>
            </div>
            
            <div className="text-left md:text-right flex-shrink-0">
              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Starting From</p>
              <p className="text-3xl font-serif text-safari-dark">
                ${room.price} <span className="text-sm font-sans font-light text-gray-500">/ night</span>
              </p>
              {room.kidPrice && (
                <p className="text-xs text-gray-500 mt-1">Kids: ${room.kidPrice} / night</p>
              )}
            </div>
          </div>

          {/* Description */}
          {room.description && (
            <div>
              <h3 className="text-xl font-serif text-safari-dark mb-4">Room Details</h3>
              <div 
                className="prose prose-sm md:prose-base max-w-none text-gray-600 font-light leading-relaxed"
                dangerouslySetInnerHTML={{ __html: room.description }}
              />
            </div>
          )}

          {/* Amenities */}
          {room.amenities && room.amenities.length > 0 && (
            <div>
              <h3 className="text-xl font-serif text-safari-dark mb-4">Amenities & Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
                {room.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center text-gray-600 font-light text-sm">
                    <CheckCircle className="w-4 h-4 text-safari-gold mr-3 flex-shrink-0" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>,
    document.body
  );
}
