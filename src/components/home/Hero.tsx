"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/pamoja-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10">
        <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-safari-gold font-sans tracking-[0.2em] uppercase text-sm md:text-base font-bold mb-4 animate-[fadeIn_1s_ease-out]">
          Welcome to Pamoja Africa
        </h2>
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight animate-[slideUp_1s_ease-out_0.3s_both] text-shadow-lg">
          Where nature meets luxury
        </h1>
        <p className="text-gray-200 text-base md:text-lg font-light mb-10 max-w-2xl animate-[slideUp_1s_ease-out_0.6s_both] text-shadow-md">
          Experience the authentic soul of Tanzania through our eco-conscious lodges and camps, nestled in the heart of Africa's most breathtaking wilderness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-[slideUp_1s_ease-out_0.9s_both]">
          <Link 
            href="/accommodations" 
            className="px-8 py-4 bg-transparent border border-white text-white uppercase tracking-wider text-sm font-bold hover:bg-white hover:text-safari-dark transition-all duration-300"
          >
            Explore Lodges
          </Link>
          <Link 
            href="/booking" 
            className="px-8 py-4 bg-safari-gold text-safari-dark uppercase tracking-wider text-sm font-bold hover:bg-white transition-all duration-300"
          >
            Book Your Stay
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-32 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10 opacity-70 hover:opacity-100 transition-opacity" />
      </button>

      {/* Custom Keyframes embedded to keep component self-contained */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
