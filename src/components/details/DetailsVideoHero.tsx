"use client";

import { MapPin, ChevronDown } from "lucide-react";

import { Property } from "@/types/property";

export default function DetailsVideoHero({ property, categories }: { property?: Property, categories?: string[] }) {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth"
    });
  };

  const location = property?.region || property?.address || "Tanzania";
  const name = property?.name || "Pamoja Farm Villa";

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/pamoja-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-end items-center text-center pb-32 px-4 max-w-5xl mx-auto">
        <span className="flex items-center text-safari-gold tracking-[0.2em] font-bold uppercase text-sm mb-4 animate-[fadeIn_1s_ease-out]">
          <MapPin className="w-4 h-4 mr-2" /> {location}
        </span>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight animate-[slideUp_1s_ease-out_0.3s_both] text-shadow-lg">
          {name}
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 text-white text-xs uppercase tracking-widest font-bold animate-[slideUp_1s_ease-out_0.6s_both]">
          <span>★ 5-Star Luxury</span>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <span>Exclusive Hideaway</span>
          
          {categories && categories.length > 0 && categories.map((cat, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span>{cat}</span>
            </div>
          ))}
        </div>
      </div>

      <button 
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce focus:outline-none"
      >
        <ChevronDown className="w-10 h-10 opacity-70 hover:opacity-100 transition-opacity" />
      </button>
    </div>
  );
}
