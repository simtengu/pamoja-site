"use client";

import { motion } from "framer-motion";
import { Star, Compass, Heart, Leaf, Globe, Users } from "lucide-react";

const cards = [
  {
    icon: Leaf,
    label: "Conservation-Driven",
    stat: "100%",
    statLabel: "Eco-Friendly Practices",
    body: "We operate with a deep respect for nature — using eco-friendly practices that conserve water, energy, and protect the land.",
    image: "/images/about/luxury-nature.jpg",
    color: "from-emerald-900/90",
  },
  {
    icon: Compass,
    label: "Professional Staff",
    stat: "120+",
    statLabel: "Trained & Certified Staff",
    body: "Our team is the backbone of every Pamoja experience. From certified wildlife guides with years of field expertise to warm, attentive camp staff — every person is rigorously trained, locally rooted, and deeply passionate about delivering an exceptional safari. You're never just in good hands; you're with the best.",
    image: "/images/team/professional-staffs.jpg",
    color: "from-teal-900/90",
  },
  {
    icon: Heart,
    label: "Happy Guests",
    stat: "10,000+",
    statLabel: "Satisfied Travellers",
    body: "Guest satisfaction is at the heart of everything we do. The overwhelming majority of our travellers leave with memories they carry for life — and come back to share them. Our properties consistently earn glowing reviews on Google, TripAdvisor, and leading travel platforms, reflecting the standard of care we put into every single stay.",
    image: "/images/happy-clients.jpg",
    color: "from-amber-900/90",
  },
  {
    icon: Globe,
    label: "Minimal Environmental Impact",
    stat: "Wildlife-Respectful",
    statLabel: "",
    body: "All our accommodations are carefully designed to minimize their ecological footprint and blend harmoniously with nature. For instance, our mobile camps follow the Great Migration with minimal impact, offering close encounters with wildlife in their natural rhythm.",
    image: "/images/about/solar.jpg",
    color: "from-orange-900/90",
  },
  {
    icon: Users,
    label: "Community Focused",
    stat: "Rooted",
    statLabel: "In 'Pamoja'",
    body: "Rooted in 'Pamoja', we empower local communities through employment, education, and sustainable development initiatives.",
    image: "/images/about/local-community.jpg",
    color: "from-blue-900/90",
  },
  {
    icon: Star,
    label: "Authentic Luxury",
    stat: "7 Properties",
    statLabel: "Across Northern Tanzania",
    body: "From intimate canvas camps in the Serengeti to highland farm villas near Ngorongoro — each Pamoja property is designed to immerse you in the wild without compromising on comfort, cuisine, or care.",
    image: "/images/about/pamoja-luxury.jpg",
    color: "from-safari-dark/90",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-24 bg-safari-light px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
            The Pamoja Difference
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">
            Why Choose Pamoja
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
