"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "The Great Migration",
    image: "/images/migration-2.jpeg",
    description: "Witness millions of wildebeest and zebras as they traverse the Serengeti plains in search of fresh grass."
  },
  {
    title: "The Big Five",
    image: "/images/serengeti-2.jpeg",
    description: "Encounter Lion, Leopard, Elephant, Buffalo, and Rhino in their natural habitats across Tanzania's parks."
  },
  {
    title: "Cultural Tours",
    image: "/images/baobab-3.jpeg",
    description: "Engage with the Maasai and Hadzabe people to learn about their ancient traditions and way of life."
  },
  {
    title: "Elephant Encounters",
    image: "/images/tarangire-5.jpeg",
    description: "Observe some of Africa's largest elephant herds in the baobab-studded landscape of Tarangire."
  }
];

export default function ExperienceHighlights() {
  return (
    <section id="experience-highlights" className="py-24 bg-safari-light px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-safari-accent font-bold uppercase text-xs tracking-widest mb-4 inline-block"
          >
            Unforgettable Moments
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-safari-dark mb-6"
          >
            Experience Highlights
          </motion.h2>
          <div className="w-24 h-1 bg-safari-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col lg:flex-row gap-8 items-center group"
            >
              <div className="relative w-full lg:w-1/2 aspect-video overflow-hidden rounded-sm shadow-xl">
                <img 
                  src={exp.image} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-serif text-safari-dark mb-4 leading-tight group-hover:text-safari-accent transition-colors">
                  {exp.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {exp.description}
                </p>
                <div className="h-[2px] w-12 bg-safari-gold transition-all duration-500 group-hover:w-20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
