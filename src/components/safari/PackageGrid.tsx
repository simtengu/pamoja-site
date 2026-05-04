"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Star } from "lucide-react";

const categories = ["All", "Honeymoon", "Couple", "Family", "Private", "Luxury", "Photography"];

const safariPackages = [
  {
    id: 1,
    title: "7-Day Serengeti & Ngorongoro Migration",
    duration: "7 Days / 6 Nights",
    category: ["Luxury", "Private", "Photography"],
    image: "/images/safari-1.jpg",
    description: "Witness the spectacular Great Migration and explore the world-famous Ngorongoro Crater.",
    highlights: ["The Big Five", "Migration Crossing", "Luxury Tented Camps"],
    price: "From $4,200",
    isBestSeller: true
  },
  {
    id: 2,
    title: "10-Day Ultimate Tanzanian Honeymoon",
    duration: "10 Days / 9 Nights",
    category: ["Honeymoon", "Couple", "Luxury"],
    image: "/images/safari-2.webp",
    description: "A romantic blend of bush and beach, featuring private sundowners and intimate camp stays.",
    highlights: ["Private Candlelit Dinners", "Hot Air Balloon Safari", "Zanzibar Sunset Cruise"],
    price: "From $6,500",
    isBestSeller: false
  },
  {
    id: 3,
    title: "5-Day Northern Circuit Family Adventure",
    duration: "5 Days / 4 Nights",
    category: ["Family", "Private"],
    image: "/images/safari-3.webp",
    description: "Kid-friendly activities and spacious lodge accommodations for a stress-free family experience.",
    highlights: ["Elephant Encounters", "Maasai Village Visit", "Interactive Wildlife Jeep"],
    price: "From $2,800",
    isBestSeller: false
  },
  {
    id: 4,
    title: "12-Day Photographer's Dream Expedition",
    duration: "12 Days / 11 Nights",
    category: ["Photography", "Private"],
    image: "/images/safari-4.webp",
    description: "Specially designed for photographers with private vehicles and expert spotters.",
    highlights: ["Golden Hour Tracking", "In-Vehicle Charging", "Extra Luggage Capacity"],
    price: "From $7,900",
    isBestSeller: true
  }
];

export default function PackageGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPackages = activeCategory === "All" 
    ? safariPackages 
    : safariPackages.filter(pkg => pkg.category.includes(activeCategory));

  return (
    <section id="safari-packages" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-safari-accent font-bold uppercase text-xs tracking-widest mb-4 inline-block"
          >
            Curated Experiences
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-safari-dark mb-10"
          >
            Safari Packages
          </motion.h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === cat 
                  ? "bg-safari-dark text-white border-safari-dark shadow-md" 
                  : "bg-transparent text-safari-dark border-gray-200 hover:border-safari-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-safari-light rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Image Container */}
                  <div className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {pkg.isBestSeller && (
                      <div className="absolute top-4 left-4 bg-safari-gold text-white text-[10px] uppercase font-bold px-3 py-1 tracking-widest flex items-center gap-1 shadow-md">
                        <Star className="w-3 h-3 fill-current" /> Best Seller
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-8 lg:w-3/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center text-safari-accent text-xs font-bold uppercase tracking-widest mb-3">
                        <Clock className="w-3 h-3 mr-2" /> {pkg.duration}
                      </div>
                      <h3 className="text-2xl font-serif text-safari-dark mb-4 leading-tight group-hover:text-safari-accent transition-colors">
                        {pkg.title}
                      </h3>
                      <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
                        {pkg.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-8">
                        {pkg.highlights.map((h, i) => (
                          <span key={i} className="text-[10px] uppercase font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-sm">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                      <div className="text-safari-dark font-bold text-lg">
                        <span className="text-xs font-light text-gray-500 block mb-1">Pricing</span>
                        {pkg.price}
                      </div>
                      <button className="px-6 py-3 bg-white border border-safari-dark text-safari-dark uppercase font-bold text-xs tracking-widest hover:bg-safari-dark hover:text-white transition-all duration-300 rounded-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
