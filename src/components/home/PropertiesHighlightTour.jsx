"use client";

import { useEffect } from "react";
import { Play } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PropertiesHighlightTour() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  const videoId = "IxiHlbHiDyI"; // The latest YouTube video ID requested by the user

  return (
    <section className="py-24 bg-safari-dark text-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-safari-accent opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-safari-gold opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        
        {/* Header Block */}
        <div className="mb-16">
          <span 
            className="text-safari-gold font-sans tracking-[0.3em] font-bold uppercase text-[10px] md:text-xs mb-4 block"
            data-aos="fade-up"
          >
            Cinematic Experience
          </span>
          <h2 
            className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            A Journey Through Our Sanctuaries
          </h2>
          <div 
            className="w-24 h-[2px] bg-safari-gold mx-auto mb-8"
            data-aos="fade-up"
            data-aos-delay="150"
          />
          <p 
            className="text-gray-400 font-light text-base md:text-lg max-w-2xl mx-auto italic leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            "Embark on a virtual safari and preview the exceptional comfort, raw beauty, and authentic luxury that await at our properties across Tanzania."
          </p>
        </div>

        {/* Video Player Box */}
        <div 
          className="max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group border border-white/5 bg-black">
            <iframe
              className="w-full h-full relative z-10"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
              title="Pamoja Africa - Our Sanctuaries Highlights Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Elegant outer border overlay */}
            <div className="absolute inset-0 border border-white/10 pointer-events-none group-hover:border-safari-gold/30 transition-colors duration-500 z-20" />
            <div className="absolute inset-2 border border-white/5 pointer-events-none z-20" />
          </div>
          
          {/* Bottom Now Playing Bar */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="h-[1px] bg-white/10 flex-grow max-w-[150px]"></div>
            <div className="flex items-center gap-3 text-safari-gold">
              <Play className="w-4 h-4 fill-safari-gold animate-pulse" />
              <span className="text-[10px] uppercase font-bold tracking-[0.4em]">Properties Highlight Tour</span>
            </div>
            <div className="h-[1px] bg-white/10 flex-grow max-w-[150px]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
