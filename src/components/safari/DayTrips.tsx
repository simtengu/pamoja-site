"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin } from "lucide-react";

const dayTrips = [
  {
    id: 1,
    title: "Tarangire Full-Day Safari",
    location: "Tarangire National Park",
    duration: "10-12 Hours",
    image: "/images/day-trip-1.webp",
    highlights: ["Elephant Concentrations", "Baobab Trees", "Lunch Picnic"],
    description: "A full day exploring the 'home of elephants' with a picnic lunch in the heart of the park."
  },
  {
    id: 2,
    title: "Lake Manyara Experience",
    location: "Lake Manyara National Park",
    duration: "8-10 Hours",
    image: "/images/day-trip-2.jpg",
    highlights: ["Tree-Climbing Lions", "Pink Flamingos", "Groundwater Forest"],
    description: "Discover the diverse ecosystems of Manyara, from its alkaline lake to its dense jungles."
  },
  {
    id: 3,
    title: "Ngorongoro Crater Explorer",
    location: "Ngorongoro Conservation Area",
    duration: "Full Day",
    image: "/images/day-trip-3.jpg",
    highlights: ["Black Rhino Chance", "Crater Floor Drive", "Dense Wildlife"],
    description: "Descend into the world's largest inactive volcanic caldera for unmatched wildlife viewing."
  }
];

export default function DayTrips() {
  return (
    <section id="day-trips" className="py-24 bg-safari-light px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-safari-dark mb-6"
          >
            Day Trip Experiences
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Short on time but big on adventure? Our day trips provide a full-immerson safari experience for those based in Karatu or Arusha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dayTrips.map((trip, idx) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trip.image} 
                  alt={trip.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase font-bold text-safari-dark tracking-widest flex items-center gap-1">
                  <Clock className="w-3 h-3 text-safari-accent" /> {trip.duration}
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center text-safari-accent text-[10px] font-bold uppercase tracking-widest mb-2">
                  <MapPin className="w-3 h-3 mr-1" /> {trip.location}
                </div>
                <h3 className="text-xl font-serif text-safari-dark mb-4 lg:min-h-[56px] flex items-center">
                  {trip.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                  {trip.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-8">
                  {trip.highlights.map((h, i) => (
                    <span key={i} className="text-[9px] uppercase font-bold text-gray-400 bg-gray-50 px-2 py-1">
                      {h}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-safari-dark uppercase text-xs font-bold tracking-widest hover:text-safari-accent transition-colors group">
                  View Details <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
