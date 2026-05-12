"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ExperiencesHero() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.6, behavior: "smooth" });
  };

  return (
    <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden bg-safari-dark">
      <motion.div 
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img 
          src="/images/experiences/lake-manyara-canoeing.jpg" 
          className="w-full h-full object-cover opacity-60" 
          alt="Pamoja Experiences" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-safari-dark/80"></div>
      </motion.div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20 max-w-5xl mx-auto">
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-safari-gold font-luxury text-4xl md:text-5xl mb-4 italic"
        >
          Curated For You
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight text-shadow-lg"
        >
          Experiences & Offers
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 text-base md:text-lg font-light max-w-2xl mx-auto text-shadow-md"
        >
          Discover unforgettable moments tailored to your stay and unlock exclusive value crafted just for you.
        </motion.p>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white focus:outline-none"
      >
        <ChevronDown className="w-7 h-7 opacity-60 hover:opacity-100 transition-opacity text-safari-gold animate-bounce" />
      </motion.button>
    </section>
  );
}
