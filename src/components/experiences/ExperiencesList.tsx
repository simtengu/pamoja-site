"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const experiencesData = [
  {
    id: "canoeing-manyara",
    title: "Lake Manyara Canoeing",
    property: "Manyara Baobab Lodge",
    description: "Glide silently past sleeping hippos and along the shores of Lake Manyara. This serene canoe safari offers a unique perspective on the aquatic life and spectacular birdlife, including thousands of pink flamingos.",
    duration: "2-3 Hours",
    included: ["Expert Canoe Guide", "Safety Equipment", "Refreshments"],
    image: "/images/migration-3.jpeg", // Placeholder
  },
  {
    id: "fishing-manyara",
    title: "Local Fishing Experience",
    property: "Manyara Baobab Lodge",
    description: "Join local fishermen at the edge of the lake and learn traditional fishing techniques. A tranquil and authentic way to connect with the local culture and the peaceful waters of Manyara.",
    duration: "Half Day",
    included: ["Fishing Gear", "Local Guide", "Picnic Lunch"],
    image: "/images/pamoja-villa-1.jpeg", // Placeholder
  },
  {
    id: "walking-safari-verdant",
    title: "Guided Walking Safari",
    property: "Pamoja Verdant Farm Villa",
    description: "Step out of the vehicle and connect intimately with the African bush. Accompanied by an armed ranger, learn to track animals, identify flora, and understand the intricate ecosystems close to Arusha National Park.",
    duration: "2-4 Hours",
    included: ["Armed Ranger", "Tracking Guide", "Bottled Water"],
    image: "/images/serengeti-1.jpeg", // Placeholder
  },
  {
    id: "arusha-city-tour",
    title: "Arusha City Tour",
    property: "Pamoja Verdant Farm Villa",
    description: "Explore the vibrant heart of Tanzania's safari capital. Visit the local markets, the cultural heritage center, and experience the bustling daily life of Arusha town.",
    duration: "Half Day",
    included: ["Private Transport", "Local City Guide", "Market Visit"],
    image: "/images/about/local-community.jpg", // Placeholder
  },
  {
    id: "balloon-safari",
    title: "Serengeti Hot Air Balloon",
    property: "Pamoja Migration Camp",
    description: "Float above the endless plains of the Serengeti as the sun rises. Witness the Great Migration and predators on the prowl from a breathtaking vantage point, followed by a champagne breakfast in the bush.",
    duration: "Morning",
    included: ["Balloon Flight", "Champagne Breakfast", "Flight Certificate"],
    image: "/images/migration-1.jpeg", // Placeholder
  },
  {
    id: "maasai-boma",
    title: "Maasai Boma Visit",
    property: "Tarangire Luxury Hideaway",
    description: "Experience the rich culture of the Maasai people. Visit a traditional boma, learn about their nomadic lifestyle, witness traditional jumping dances, and see local beadwork artisans at work.",
    duration: "2-3 Hours",
    included: ["Village Entry Fee", "Cultural Guide", "Traditional Dance"],
    image: "/images/about/local-community.jpg", // Placeholder
  },
  {
    id: "coffee-banana-tour",
    title: "Coffee & Banana Farm Tour",
    property: "Pamoja Farm Villas",
    description: "Walk through the lush highlands of Karatu. Discover how organic coffee and bananas are grown, harvested, and processed by local farmers. Conclude with a freshly brewed cup of Tanzanian coffee.",
    duration: "2 Hours",
    included: ["Farm Guide", "Coffee Tasting", "Walking Tour"],
    image: "/images/about/luxury-nature.jpg", // Placeholder
  },
  {
    id: "karatu-town-tour",
    title: "Karatu Town & Market Tour",
    property: "Pamoja Farm Villas",
    description: "Immerse yourself in the local atmosphere of Karatu town. Visit the vibrant markets, interact with friendly locals, and get a true taste of everyday Tanzanian life outside the safari parks.",
    duration: "2-3 Hours",
    included: ["Local Guide", "Market Entrance", "Transport"],
    image: "/images/about/local-community.jpg", // Placeholder
  }
];

// Extract unique properties for the filter
const properties = ["All Properties", ...Array.from(new Set(experiencesData.map(exp => exp.property)))];

export default function ExperiencesList() {
  const [activeFilter, setActiveFilter] = useState("All Properties");

  const filteredExperiences = activeFilter === "All Properties" 
    ? experiencesData 
    : experiencesData.filter(exp => exp.property === activeFilter);

  return (
    <section className="bg-safari-light py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
            Tailor Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-10">
            Our Experiences
          </h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {properties.map((prop) => (
              <button
                key={prop}
                onClick={() => setActiveFilter(prop)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeFilter === prop
                    ? "bg-safari-dark text-white border-safari-dark shadow-lg"
                    : "bg-white text-gray-500 border-gray-200 hover:border-safari-gold hover:text-safari-dark"
                }`}
              >
                {prop}
              </button>
            ))}
          </div>
        </div>

        {/* Experiences Grid / List */}
        <div className="space-y-16 mt-16">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, index) => (
              <motion.div 
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white shadow-xl rounded-sm overflow-hidden group`}
              >
                {/* Image Block */}
                <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[450px] overflow-hidden">
                  <img 
                    src={exp.image} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" 
                    alt={exp.title} 
                  />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm text-safari-dark text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-sm shadow-md flex items-center">
                    <MapPin className="w-3 h-3 mr-2 text-safari-gold" />
                    {exp.property}
                  </div>
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-serif text-safari-dark mb-4">{exp.title}</h3>
                  <p className="text-gray-600 font-light text-base md:text-lg mb-8 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-3 mb-10">
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-4 border-b pb-2">Includes</p>
                    {exp.included.map((item) => (
                      <div key={item} className="flex items-center text-sm text-safari-dark font-medium">
                        <CheckCircle className="w-4 h-4 text-safari-gold mr-3" /> {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100 gap-6 mt-auto">
                    <div className="flex items-center text-xs text-gray-400 uppercase tracking-widest font-bold">
                      <Clock className="w-4 h-4 mr-2" /> {exp.duration}
                    </div>
                    <Link 
                      href={`/booking?experience=${encodeURIComponent(exp.title)}`} 
                      className="w-full sm:w-auto px-8 py-4 bg-transparent border border-safari-dark text-safari-dark hover:bg-safari-dark hover:text-white text-xs font-bold uppercase tracking-widest text-center transition-all rounded-sm"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredExperiences.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-500 font-light"
            >
              No experiences found for this property.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
