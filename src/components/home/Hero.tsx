"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const headline = "Where nature meets luxury";
  const words = headline.split(" ");
  let charCounter = 0;

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative h-screen h-[100dvh] min-h-[600px] w-full overflow-hidden">
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
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 pt-20 pb-24 md:py-0 max-w-5xl mx-auto">
        <h2 className="text-safari-gold font-luxury text-2xl sm:text-4xl md:text-5xl mb-3 sm:mb-4 italic animate-[fadeIn_0.9s_ease-out_both]">
          Welcome to Pamoja Africa
        </h2>
        <h1
          aria-label={headline}
          className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif mb-5 sm:mb-6 leading-tight text-shadow-lg"
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block whitespace-nowrap" aria-hidden="true">
              {word.split("").map((char, index) => {
                const delay = 0.35 + charCounter * 0.045;
                charCounter += 1;
                return (
                  <span
                    key={index}
                    className="inline-block char-reveal"
                    style={{ animationDelay: `${delay.toFixed(3)}s` }}
                  >
                    {char}
                  </span>
                );
              })}
              {wordIndex < words.length - 1 && (() => {
                charCounter += 1;
                return <span className="inline-block">&nbsp;</span>;
              })()}
            </span>
          ))}
        </h1>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg font-light mb-8 sm:mb-10 max-w-2xl animate-[slideUp_1s_ease-out_1.35s_both] text-shadow-md px-2">
          Experience the authentic soul of Tanzania through our eco-conscious lodges and camps, nestled in the heart of Africa's most breathtaking wilderness.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0 animate-[slideUp_1s_ease-out_1.65s_both]">
          <Link 
            href="/accommodations" 
            className="px-8 py-3.5 sm:py-4 bg-white text-safari-dark uppercase tracking-wider text-xs sm:text-sm font-bold hover:bg-transparent hover:border hover:border-white hover:text-white transition-all duration-300 text-center"
          >
            Explore Lodges
          </Link>
          <Link 
            href="/booking" 
            className="px-8 py-3.5 sm:py-4 bg-safari-gold text-safari-dark uppercase tracking-wider text-xs sm:text-sm font-bold hover:bg-white transition-all duration-300 text-center"
          >
            Book Your Stay
          </Link>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-16 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 md:w-10 md:h-10 opacity-70 hover:opacity-100 transition-opacity" />
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
        @keyframes writeChar {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.96);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        .char-reveal {
          opacity: 0;
          animation: writeChar 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          will-change: transform, opacity, filter;
        }
        @media (prefers-reduced-motion: reduce) {
          .char-reveal {
            opacity: 1;
            animation: none;
            filter: none;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
