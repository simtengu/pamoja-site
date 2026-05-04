"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function HomeGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { src: "/images/pamoja-villa-2.jpeg", alt: "Pamoja Villa Dining", colSpan: "col-span-2 md:col-span-1", rowSpan: "row-span-2" },
    { src: "/images/tarangire-5.jpeg", alt: "Tarangire Elephant", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "/images/serengeti-3.jpeg", alt: "Serengeti View", colSpan: "col-span-1", rowSpan: "row-span-1" },
    { src: "/images/baobab-3.jpeg", alt: "Manyara Baobab Pool", colSpan: "col-span-2", rowSpan: "row-span-1" },
    { src: "/images/migration-3.jpeg", alt: "Migration Tents", colSpan: "col-span-1", rowSpan: "row-span-1" }
  ];

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
    <section className="py-24 bg-safari-light px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
            Our Stays In Pictures
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-6">
            Moments Captured
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Experience the thrill of nature with breathtaking wildlife encounters, combined with refined comfort.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] w-full">
          {images.map((img, index) => (
            <div 
              key={index} 
              onClick={() => setSelectedIndex(index)}
              className={`relative overflow-hidden group rounded-sm cursor-pointer ${img.colSpan} ${img.rowSpan}`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
              />
              <div className="absolute inset-0 bg-safari-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Camera className="w-8 h-8 text-white absolute transform scale-50 group-hover:scale-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/gallery" 
            className="inline-block px-8 py-4 bg-transparent border border-safari-dark text-safari-dark uppercase tracking-wider text-sm font-bold hover:bg-safari-dark hover:text-white transition-all duration-300"
          >
            Open Full Gallery
          </Link>
        </div>
        
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          
          {/* Close Button */}
          <button 
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white transition-colors focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-10 h-10" />
          </button>

          {/* Prev Button */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 md:left-8 z-[110] text-white/50 hover:text-white bg-black/50 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8 -ml-1" />
          </button>

          {/* Next Button */}
          <button 
            onClick={handleNext}
            className="absolute right-4 md:right-8 z-[110] text-white/50 hover:text-white bg-black/50 hover:bg-black/80 w-12 h-12 flex items-center justify-center rounded-full transition-all focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8 -mr-1" />
          </button>

          {/* Image Container */}
          <div className="relative w-full max-w-5xl max-h-[85vh] px-4 md:px-20 flex items-center justify-center select-none animate-[slideUp_0.3s_ease-out]">
            <img 
              key={selectedIndex} // Forces animation re-render on sliding
              src={images[selectedIndex].src} 
              alt={images[selectedIndex].alt}
              className="max-w-full max-h-[85vh] object-contain shadow-2xl rounded-sm"
            />
            {/* Image Caption/Counter */}
            <div className="absolute -bottom-10 left-0 w-full text-center text-white/70 text-sm tracking-widest uppercase">
              {images[selectedIndex].alt} &nbsp;|&nbsp; {selectedIndex + 1} of {images.length}
            </div>
          </div>
          
        </div>
      )}
    </section>
  );
}
