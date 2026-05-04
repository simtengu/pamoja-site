"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function AccommodationsHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-safari-dark">
      {/* Background Image with Parallax effect simulation */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/tarangire-3.jpeg"
          alt="Pamoja Africa Accommodations"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-safari-dark"></div>
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-safari-gold tracking-[0.3em] font-bold uppercase text-xs md:text-sm mb-6"
        >
          Experience True Africa
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
        >
          Our Luxury Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 font-light text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          From intimate canvas tents following the Great Migration to permanent luxury lodges nestled among ancient baobab trees. Discover where you truly belong.
        </motion.p>
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce focus:outline-none"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity text-safari-gold" />
      </motion.button>
    </div>
  );
}
