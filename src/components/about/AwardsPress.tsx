"use client";

import { motion } from "framer-motion";
import { Map, Users, Leaf, Trees, Newspaper } from "lucide-react";

const standards = [
  {
    icon: Map,
    title: "Local Roots",
    body: "100% Tanzanian Owned",
    desc: "Our properties are deeply rooted in the local community, offering a genuine connection to Tanzanian hospitality.",
    tag: "Founded 2015",
    gold: true,
  },
  {
    icon: Users,
    title: "Exceptional Service",
    body: "Dedicated On-Site Teams",
    desc: "Our professional staff is committed to ensuring every detail of your stay is perfect, from arrival to departure.",
    tag: "Professional Hospitality",
    gold: false,
  },
  {
    icon: Leaf,
    title: "Sustainable Living",
    body: "Eco-Conscious Comfort",
    desc: "We blend premium comfort with environmental responsibility, using 80% solar energy across our properties.",
    tag: "Green Initiatives",
    gold: false,
  },
  {
    icon: Trees,
    title: "Immersive Experiences",
    body: "Beyond the Room",
    desc: "Discover the soul of Tanzania through farm visits, canoeing, and authentic cultural encounters at our doorstep.",
    tag: "Nature & Culture",
    gold: true,
  },
];

const platforms = [
  { name: "booking.com", logo: "/images/press/booking.png" },
  { name: "google", logo: "/images/press/google.png" },
  { name: "trip advisor", logo: "/images/press/tripadvisor.png" },
  { name: "tra", logo: "/images/press/tra.png" },
];

export default function AwardsPress() {
  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
            Our Commitment
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-4">
            The Pamoja Standards
          </h2>
          <p className="text-gray-500 font-light max-w-xl mx-auto text-lg">
            Our excellence is defined by our unwavering dedication to quality, sustainability, and authentic hospitality.
          </p>
        </div>

        {/* Standards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {standards.map((standard, i) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 border-2 ${standard.gold ? "border-safari-gold bg-safari-light" : "border-gray-100 bg-white"} group hover:border-safari-gold hover:shadow-xl transition-all duration-500 text-center flex flex-col items-center`}
            >
              {/* Gold accent top bar */}
              {standard.gold && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-safari-gold via-yellow-300 to-safari-gold" />
              )}
              <div className="inline-flex w-14 h-14 items-center justify-center rounded-full bg-safari-dark group-hover:bg-safari-gold transition-colors duration-500 mb-6">
                <standard.icon className="w-6 h-6 text-safari-gold group-hover:text-safari-dark transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-serif text-safari-dark mb-2 leading-tight">{standard.title}</h3>
              <p className="text-xs text-safari-accent font-bold uppercase tracking-widest mb-3">{standard.body}</p>
              <p className="text-gray-500 font-light text-sm mb-4">{standard.desc}</p>
              <div className="mt-auto">
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">{standard.tag}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trusted Platforms */}
        <div className="border-t border-gray-100 pt-16">
          <div className="flex items-center gap-4 mb-10 justify-center">
            <Newspaper className="w-5 h-5 text-safari-gold" />
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400">Trusted Platforms</span>
            <Newspaper className="w-5 h-5 text-safari-gold" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {platforms.map((p) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
              >
                <img 
                  src={p.logo} 
                  alt={p.name} 
                  className="h-10 md:h-12 w-auto object-contain" 
                />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hidden sm:inline-block">
                  {p.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
