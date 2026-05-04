"use client";

import { motion } from "framer-motion";
import { Award, Star, Newspaper } from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "Certificate of Excellence",
    body: "TripAdvisor Travelers' Choice",
    year: "2019 – 2024",
    gold: true,
  },
  {
    icon: Star,
    title: "Best Eco-Lodge Africa",
    body: "Responsible Tourism Awards",
    year: "2022",
    gold: false,
  },
  {
    icon: Award,
    title: "Top Luxury Safari Operator",
    body: "Conde Nast Traveler",
    year: "2023",
    gold: false,
  },
  {
    icon: Star,
    title: "Africa's Leading Safari Camp",
    body: "World Travel Awards",
    year: "2021 – 2023",
    gold: true,
  },
];

const press = [
  { name: "National Geographic", icon: "🌍" },
  { name: "CNN Travel", icon: "📡" },
  { name: "Condé Nast Traveler", icon: "✈️" },
  { name: "BBC Earth", icon: "🎬" },
  { name: "Forbes Travel", icon: "💼" },
  { name: "Lonely Planet", icon: "🗺️" },
];

export default function AwardsPress() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
            Recognition
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-4">
            Awards & Press
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto text-lg">
            Over two decades of excellence, recognised by the world's leading travel authorities.
          </p>
        </div>

        {/* Awards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 border-2 ${award.gold ? "border-safari-gold bg-safari-light" : "border-gray-100 bg-white"} group hover:border-safari-gold hover:shadow-xl transition-all duration-500 text-center`}
            >
              {/* Gold accent top bar */}
              {award.gold && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-safari-gold via-yellow-300 to-safari-gold" />
              )}
              <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-safari-dark group-hover:bg-safari-gold transition-colors duration-500 mb-6 mx-auto">
                <award.icon className="w-6 h-6 text-safari-gold group-hover:text-safari-dark transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-serif text-safari-dark mb-2 leading-tight">{award.title}</h3>
              <p className="text-sm text-safari-accent font-bold uppercase tracking-widest mb-2">{award.body}</p>
              <p className="text-xs text-gray-400 font-bold tracking-widest">{award.year}</p>
            </motion.div>
          ))}
        </div>

        {/* As Seen In */}
        <div className="border-t border-gray-100 pt-16">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <Newspaper className="w-5 h-5 text-safari-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">As Featured In</span>
            <Newspaper className="w-5 h-5 text-safari-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {press.map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-6 py-3 border border-gray-200 hover:border-safari-gold hover:bg-safari-light transition-all duration-300 group cursor-default"
              >
                <span className="text-xl">{p.icon}</span>
                <span className="text-sm font-bold text-gray-500 group-hover:text-safari-dark transition-colors tracking-wide">{p.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
