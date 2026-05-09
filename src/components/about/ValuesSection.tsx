"use client";

import { motion } from "framer-motion";
import { Map, Users, Leaf, Trees } from "lucide-react";

const values = [
  {
    title: "Authentic Heritage",
    front: "100% Tanzanian owned and deeply rooted in the land and its culture.",
    back: "Every stay is designed to offer a genuine connection to Tanzanian life. No curated illusions—only authentic hospitality that honors our local roots.",
    icon: Map,
    accent: "text-rose-400",
  },
  {
    title: "Exceptional Hospitality",
    front: "Hospitality is in our DNA. Our professional teams are dedicated to your comfort.",
    back: "From arrival to departure, our on-site staff ensures every detail is perfect. You are not just a guest—you are part of the Pamoja family, welcomed home.",
    icon: Users,
    accent: "text-sky-400",
  },
  {
    title: "Sustainable Luxury",
    front: "We blend premium comfort with a deep responsibility toward the environment.",
    back: "From 80% solar power to green initiatives, we believe that luxury and sustainability are inseparable. We protect the wilderness for future generations.",
    icon: Leaf,
    accent: "text-emerald-400",
  },
  {
    title: "Nature-Led Experiences",
    front: "Discover the soul of Tanzania through immersive encounters at our doorstep.",
    back: "Farm visits, serene landscapes, and authentic cultural moments. We innovate to enhance your stay while preserving the integrity of the natural world.",
    icon: Trees,
    accent: "text-yellow-400",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-white px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-safari-gold to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
            The Pamoja Way
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-4">Our Core Values</h2>
          <p className="text-gray-500 font-light max-w-md mx-auto text-sm">Hover each card to discover what these values mean in practice.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group h-64 perspective-1000"
              style={{ perspective: "1000px" }}
            >
              <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out"
                style={{
                  transformStyle: "preserve-3d",
                  transform: undefined,
                }}
              >
                {/* Card wrapper with CSS flip */}
                <div className="w-full h-full relative group-hover:[transform:rotateY(180deg)] transition-transform duration-700" style={{ transformStyle: "preserve-3d" }}>

                  {/* Front */}
                  <div
                    className="absolute inset-0 bg-safari-light border border-gray-100 p-8 flex flex-col items-center justify-center text-center backface-hidden rounded-sm shadow-md"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-safari-dark mb-6">
                      <v.icon className={`w-7 h-7 ${v.accent}`} />
                    </div>
                    <h3 className="text-xl font-serif text-safari-dark mb-3">{v.title}</h3>
                    <p className="text-gray-500 font-light text-sm leading-relaxed">{v.front}</p>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute inset-0 bg-safari-dark p-8 flex flex-col items-center justify-center text-center rounded-sm shadow-md"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                  >
                    <v.icon className={`w-8 h-8 ${v.accent} mb-4`} />
                    <p className="text-gray-200 font-light text-sm leading-relaxed italic">{v.back}</p>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
