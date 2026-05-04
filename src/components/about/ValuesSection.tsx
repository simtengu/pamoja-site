"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Shield, Zap } from "lucide-react";

const values = [
  {
    title: "Authentic Connection",
    front: "We prioritize genuine interactions with nature and local cultures over superficial luxury.",
    back: "Every safari is designed to strip away the noise of modern life — leaving you face-to-face with something ancient, wild, and real. No curated illusions. Only Tanzania.",
    icon: Heart,
    accent: "text-rose-400",
  },
  {
    title: "Sustainable Heritage",
    front: "Every step we take is measured against its impact on the environment and future generations.",
    back: "100% solar power, zero-plastic kitchens, composting systems, and direct wildlife habitat funding. We believe luxury and responsibility are not trade-offs — they are inseparable.",
    icon: Leaf,
    accent: "text-emerald-400",
  },
  {
    title: "Tanzanian Warmth",
    front: "Hospitality is in our DNA. We welcome every guest as part of the Pamoja family.",
    back: "95% of our staff are local Tanzanians. Their warmth is not a product — it is a culture. When you arrive, you are not a guest. You are family, welcomed home.",
    icon: Shield,
    accent: "text-sky-400",
  },
  {
    title: "Pioneering Spirit",
    front: "We constantly innovate to improve our service while preserving the wild's integrity.",
    back: "From mobile camps that follow the migration to solar-powered luxury tents, we push the boundaries of what ethical luxury can be — without ever disturbing the wilderness we protect.",
    icon: Zap,
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
