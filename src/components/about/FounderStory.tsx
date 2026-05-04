"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function FounderStory() {
  return (
    <section className="py-0 bg-white relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[85vh]">

        {/* Left — Portrait */}
        <div className="relative w-full lg:w-[45%] h-[60vh] lg:h-auto overflow-hidden flex-shrink-0">
          <img
            src="/images/team-1.jpg"
            alt="Asheri Kiisay — Founder"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark gradient overlay on right edge for blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />

          {/* Floating badge */}
          <div className="absolute bottom-10 left-8 bg-safari-dark text-white px-6 py-4 hidden lg:block">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-safari-gold mb-1">Founder & Director</p>
            <p className="text-xl font-serif">Asheri Kiisay</p>
          </div>
        </div>

        {/* Right — Story */}
        <div className="relative w-full lg:w-[55%] bg-white flex items-center px-8 md:px-16 lg:px-20 py-20">
          {/* Subtle decorative line */}
          <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-safari-gold/30 to-transparent hidden lg:block" />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
              The Founder's Story
            </span>

            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-8 leading-tight">
              A Dream Born Beneath the Baobab
            </h2>

            {/* Pull Quote */}
            <div className="relative border-l-4 border-safari-gold pl-6 mb-10 py-2">
              <Quote className="w-8 h-8 text-safari-gold/30 absolute -top-2 -left-1" />
              <p className="text-2xl md:text-3xl font-serif text-safari-dark italic leading-snug">
                "I didn't build a business — I built a way for the world to fall in love with Tanzania."
              </p>
              <span className="mt-4 block text-sm font-bold text-safari-accent uppercase tracking-widest">
                — Asheri Kiisay
              </span>
            </div>

            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
              Asheri grew up in the shadow of Kilimanjaro, watching foreign travelers arrive with wide eyes and leave forever changed. As a young guide in the Serengeti, he realized that luxury and authenticity were not opposites — they were a calling.
            </p>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
              In 2004, beneath the ancient canopy of a giant Baobab on the Serengeti plains, he pitched the first canvas of what would become Pamoja Africa. The name — <em>Pamoja</em>, meaning "Together" in Swahili — captured everything he believed: that guests, communities, and wildlife could thrive as one.
            </p>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
              Two decades on, that single tent has grown into seven iconic properties across Tanzania's most dramatic landscapes. But the philosophy hasn't changed one degree: every guest who arrives leaves as a lifelong ambassador for the wild places we are sworn to protect.
            </p>

            {/* Signature */}
            <div className="flex items-center gap-6 pt-6 border-t border-gray-100">
              <div>
                <p className="font-serif text-3xl text-safari-dark italic">Asheri Kiisay</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Founder & Managing Director, Pamoja Africa</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
