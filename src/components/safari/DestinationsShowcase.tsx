"use client";

import { motion } from "framer-motion";

const destinations = [
  {
    name: "Serengeti National Park",
    image: "/images/serengeti-1.jpeg",
    description: "The crown jewel of African safaris, home to the Great Migration and world-class wildlife sightings.",
    fact: "14,750 km² of endless plains"
  },
  {
    name: "Ngorongoro Conservation Area",
    image: "/images/serengeti-3.jpeg",
    description: "A UNESCO World Heritage site and home to the majestic Ngorongoro Crater, a natural amphitheater of wildlife.",
    fact: "Over 25,000 large animals"
  },
  {
    name: "Tarangire National Park",
    image: "/images/tarangire-1.jpeg",
    description: "Famous for its vast elephant herds and ancient baobab trees that dot the river landscape.",
    fact: "Largest concentration of elephants"
  },
  {
    name: "Lake Manyara",
    image: "/images/baobab-1.jpeg",
    description: "A scenic gem offering diverse habitats, from groundwater forests to pink flamingo-filled lakes.",
    fact: "Over 400 species of birds"
  }
];

export default function DestinationsShowcase() {
  return (
    <section id="destinations" className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-safari-accent font-bold uppercase text-xs tracking-widest mb-4 inline-block"
            >
              The Heart of Tanzania
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif text-safari-dark"
            >
              Legendary Safari Destinations
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-light max-w-sm lg:mb-2"
          >
            From the high-altitude crater floor to the endless grass plains, we take you to the very best of Tanzania's wild spaces.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, idx) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer shadow-xl hover:shadow-2xl transition-shadow"
            >
              <img 
                src={dest.image} 
                alt={dest.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlays */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-[1px] bg-safari-gold transition-all duration-500 group-hover:w-12"></div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-safari-gold">
                    {dest.fact}
                  </span>
                </div>
                <h3 className="text-2xl font-serif mb-4 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {dest.name}
                </h3>
                <div className="overflow-hidden">
                  <p className="text-sm font-light text-gray-300 leading-relaxed mb-4 opacity-0 transform translate-y-full transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {dest.description}
                  </p>
                </div>
                <button className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/70 hover:text-white transition-colors">
                  Explore Park
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
