"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PropertyGallery({ photos, name }: { photos?: string[], name?: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Fallback to placeholder if not enough images
  const images = photos && photos.length > 0 
    ? photos 
    : ["/images/placeholder.jpeg", "/images/placeholder.jpeg", "/images/placeholder.jpeg"];
    
  // Ensure we have at least 3 images for the layout by repeating the first image if necessary
  const displayImages = images.length >= 3 
    ? images 
    : [...images, ...Array(3 - images.length).fill(images[0])];

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
  };

  return (
    <div className="pt-0">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[500px]">
        
        {/* Main Large Image */}
        <div 
          onClick={() => setSelectedIndex(0)}
          className="col-span-3 row-span-2 relative group overflow-hidden rounded-sm cursor-pointer"
        >
          <img 
            src={displayImages[0]} 
            alt={`${name || 'Property'} main view`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Camera className="w-8 h-8 text-white scale-75 group-hover:scale-100 transition-transform" />
          </div>
        </div>

        {/* Top Right Small Image */}
        <div 
          onClick={() => setSelectedIndex(1)}
          className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm cursor-pointer"
        >
          <img 
            src={displayImages[1]} 
            alt={`${name || 'Property'} secondary view`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Camera className="w-6 h-6 text-white scale-75 group-hover:scale-100 transition-transform" />
          </div>
        </div>

        {/* Bottom Right Small Image with "View All" Overlay */}
        <div 
          onClick={() => setSelectedIndex(2)}
          className="col-span-1 row-span-1 relative group overflow-hidden rounded-sm cursor-pointer"
        >
          <img 
            src={displayImages[2]} 
            alt={`${name || 'Property'} gallery view`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
          />
          <div className="absolute inset-0 bg-safari-dark/60 group-hover:bg-safari-dark/80 transition-colors flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-widest uppercase flex flex-col items-center">
              <Camera className="w-6 h-6 mb-2 text-safari-gold" />
              View All ({images.length})
            </span>
          </div>
        </div>

      </div>

      {/* Lightbox Modal via Portal to escape stacking context */}
      {selectedIndex !== null && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-[1100] text-white/60 hover:text-white hover:bg-white/10 w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none border border-white/10"
            aria-label="Close Lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Prev Button */}
          {images.length > 1 && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 z-[1100] text-white/50 hover:text-white bg-black/50 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-8 h-8 -ml-1" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 z-[1100] text-white/50 hover:text-white bg-black/50 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-8 h-8 -mr-1" />
            </button>
          )}

          {/* Image Container */}
          <div 
            className="relative w-full max-w-5xl max-h-[85vh] px-4 md:px-20 flex flex-col items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              key={selectedIndex}
              src={images[selectedIndex]} 
              alt={`${name || 'Property'} full view ${selectedIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm animate-[slideUp_0.3s_ease-out]"
            />
            {/* Image Counter (No titles) */}
            <div className="mt-8 text-center text-white/70 text-sm tracking-widest uppercase flex items-center gap-4">
              <span className="text-safari-gold font-bold">{selectedIndex + 1} / {images.length}</span>
            </div>
          </div>
          
        </div>,
        document.body
      )}
    </div>
  );
}
