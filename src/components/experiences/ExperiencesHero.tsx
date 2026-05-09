"use client";

import { motion } from "framer-motion";

export default function ExperiencesHero() {
  return (
    <section className="relative h-[60vh] lg:h-[70vh] w-full overflow-hidden bg-safari-dark">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <img 
          src="/images/tarangire-8.jpeg" 
          className="w-full h-full object-cover opacity-60" 
          alt="Pamoja Experiences" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-safari-dark/30"></div>
      </motion.div>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
        <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-safari-gold font-luxury text-4xl md:text-5xl mb-4 italic"
        >
          Curated For You
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight text-shadow-lg"
        >
          Experiences & Offers
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-200 text-base md:text-lg font-light max-w-2xl mx-auto text-shadow-md"
        >
          Discover unforgettable moments tailored to your stay and unlock exclusive value crafted just for you.
        </motion.p>
      </div>
    </section>
  );
}
