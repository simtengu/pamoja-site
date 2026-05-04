"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function SafariHero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("value-proposition");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-safari-dark">
      {/* Background Image with Parallax effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/migration-3.jpeg"
          alt="African Safari Wildlife"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-safari-dark"></div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-safari-gold tracking-[0.4em] font-bold uppercase text-xs md:text-sm mb-6"
        >
          Unforgettable African Journeys
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1]"
        >
          Explore Tanzania with <br />
          <span className="text-safari-gold">Pamoja Africa Safaris</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 font-light text-lg md:text-2xl leading-relaxed max-w-3xl mb-12"
        >
          Personalized safari experiences paired with our luxury lodge stays. Discover the heart of the wild with those who call it home.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <button 
            onClick={() => document.getElementById("safari-packages")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-5 bg-safari-gold text-white uppercase font-bold text-sm tracking-widest hover:bg-white hover:text-safari-dark transition-all duration-300 rounded-sm shadow-xl"
          >
            View Safari Packages
          </button>
          <button 
            onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-5 bg-transparent border border-white text-white uppercase font-bold text-sm tracking-widest hover:bg-white hover:text-safari-dark transition-all duration-300 rounded-sm"
          >
            Plan My Trip
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10 opacity-70 hover:opacity-100 transition-opacity text-safari-gold" />
      </motion.button>
    </section>
  );
}
