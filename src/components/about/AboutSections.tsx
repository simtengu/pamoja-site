"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Compass, CheckCircle2, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

// ─── Vision & Mission ─────────────────────────────────────────────────────────

export function VisionMission() {
  return (
    <section className="py-24 bg-safari-light px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-safari-dark text-white p-12 md:p-16 rounded-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-safari-gold opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
          <Compass className="w-12 h-12 text-safari-gold mb-8" />
          <h3 className="text-3xl font-serif mb-6">Our Vision</h3>
          <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
            To set the absolute benchmark for ethical luxury across the African continent — where high-end tourism is the primary funding mechanism for wildlife preservation and long-term community elevation.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start text-sm text-gray-400 font-light"><CheckCircle2 className="w-4 h-4 text-safari-accent mr-3 mt-0.5 flex-shrink-0" />Expanding responsible tourism across Tanzania's northern circuit</li>
            <li className="flex items-start text-sm text-gray-400 font-light"><CheckCircle2 className="w-4 h-4 text-safari-accent mr-3 mt-0.5 flex-shrink-0" />Building lasting partnerships with local communities and conservation bodies</li>
          </ul>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white p-12 md:p-16 rounded-sm relative overflow-hidden border border-gray-100 group hover:-translate-y-2 transition-transform duration-500 shadow-xl"
        >
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-safari-accent opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
          <Leaf className="w-12 h-12 text-safari-accent mb-8" />
          <h3 className="text-3xl font-serif text-safari-dark mb-6">Our Mission</h3>
          <p className="text-gray-600 font-light leading-relaxed text-lg mb-8">
            To immerse our guests in the most breathtaking, unfiltered aspects of wild Africa while wrapping them in absolute comfort and safety — turning each guest into a lifelong ambassador for conservation.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start text-sm text-gray-500 font-light"><CheckCircle2 className="w-4 h-4 text-safari-gold mr-3 mt-0.5 flex-shrink-0" />Empowering local Tanzanian workforces</li>
            <li className="flex items-start text-sm text-gray-500 font-light"><CheckCircle2 className="w-4 h-4 text-safari-gold mr-3 mt-0.5 flex-shrink-0" />Preserving indigenous cultural heritage</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
