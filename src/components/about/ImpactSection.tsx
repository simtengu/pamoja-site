"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Globe } from "lucide-react";

const cards = [
  {
    icon: Globe,
    label: "Wildlife & Conservation",
    stat: "50,000+ Acres",
    statLabel: "Under Protection",
    body: "We co-fund anti-poaching patrols and work alongside the African Wildlife Foundation to expand protected corridors across the Serengeti ecosystem. Every booking directly finances wildlife preservation.",
    image: "/images/migration-1.jpeg",
    color: "from-emerald-900/90",
  },
  {
    icon: Users,
    label: "Community & People",
    stat: "120+ Families",
    statLabel: "Employed Year-Round",
    body: "95% of our workforce is Tanzanian. We fund community schools, provide skills training, and source food directly from local farms — ensuring tourism dollars stay within the communities who call this land home.",
    image: "/images/pamoja1.jpg",
    color: "from-amber-900/90",
  },
  {
    icon: Leaf,
    label: "Sustainability",
    stat: "100% Solar",
    statLabel: "Across All Properties",
    body: "All seven of our camps run entirely on solar power. We use gravity-fed water systems, zero-plastic kitchens, and composting programs. Our target: full carbon neutrality by 2030.",
    image: "/images/serengeti-2.jpeg",
    color: "from-safari-dark/90",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-24 bg-safari-light px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
            Why It Matters
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">
            Conservation at Our Core
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm shadow-xl cursor-pointer"
            >
              {/* Background image */}
              <div className="relative h-[480px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${card.color} to-transparent`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-safari-gold/20 border border-safari-gold/50 flex items-center justify-center">
                      <card.icon className="w-5 h-5 text-safari-gold" />
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-safari-gold">{card.label}</span>
                  </div>

                  {/* Stat */}
                  <div className="mb-4">
                    <p className="text-4xl font-serif text-white leading-none">{card.stat}</p>
                    <p className="text-sm text-gray-300 uppercase tracking-widest font-bold mt-1">{card.statLabel}</p>
                  </div>

                  {/* Divider line that expands */}
                  <div className="w-12 h-0.5 bg-safari-gold mb-4 group-hover:w-full transition-all duration-700" />

                  {/* Body — slides up on hover */}
                  <p className="text-gray-200 font-light text-sm leading-relaxed max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100">
                    {card.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
