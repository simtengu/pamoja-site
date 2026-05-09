"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

const defaultMarqueeItems = [
  "Est. 2015", "7 Luxury Properties", "Serengeti", "Ngorongoro", 
  "Tarangire", "Lake Manyara", "Northern Tanzania", "Ethical Luxury",
];

export default function AboutHero() {
  const [marqueeItems, setMarqueeItems] = useState<string[]>(defaultMarqueeItems);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const q = query(
          collection(db, "properties"),
          where("isPublished", "==", true),
          orderBy("priority", "asc")
        );
        const querySnapshot = await getDocs(q);
        const propertiesData = querySnapshot.docs.map(doc => doc.data());
        
        if (propertiesData.length > 0) {
          const propertyStrings = propertiesData.map(
            (prop: any) => `${prop.name} - ${prop.region || "Tanzania"}`
          );
          setMarqueeItems(propertyStrings);
        }
      } catch (error) {
        console.error("Error fetching properties for marquee:", error);
      }
    };

    fetchProperties();
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative h-[90vh] w-full overflow-hidden bg-safari-dark">
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/about/solar.jpg"
          alt="Pamoja Africa Heritage"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-safari-dark" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-safari-gold font-luxury text-4xl md:text-5xl mb-4 italic"
        >
          Pamoja Africa 
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-white text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight text-shadow-lg"
        >
          Rooted in Africa. <br />
          <span className="text-safari-gold text-3xl md:text-5xl lg:text-6xl">United By Nature.</span>
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 text-base md:text-lg font-light max-w-2xl text-shadow-md"
        >
          For a decade, Pamoja Africa has woven ethical luxury into the fabric of Tanzania's most untamed landscapes — honouring the land, the wildlife, and the people who call it home.
        </motion.p> */}
      </div>

      {/* Marquee ticker at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden border-t border-b border-white/10 py-3 bg-black/30 backdrop-blur-sm"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.25em] font-bold text-white/70 mx-8">
              <span className="w-1.5 h-1.5 rounded-full bg-safari-gold inline-block" />
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 text-white focus:outline-none"
      >
        <ChevronDown className="w-7 h-7 opacity-60 hover:opacity-100 transition-opacity text-safari-gold animate-bounce" />
      </motion.button>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
