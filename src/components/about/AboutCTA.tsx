"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/serengeti-2.jpeg"
          alt="Serengeti at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-safari-dark/80" />
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-safari-gold opacity-5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-safari-accent opacity-5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-safari-gold tracking-[0.3em] font-bold uppercase text-xs mb-6 block"
        >
          Begin Your Journey
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight"
        >
          Ready to Write Your Own <br />
          <span className="text-safari-gold">Safari Story?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 font-light text-lg mb-14 max-w-2xl mx-auto"
        >
          Whether it's the thrill of witnessing a river crossing or the stillness of a sunrise over the plains, Pamoja Africa crafts your perfect Tanzanian journey — from first enquiry to final farewell.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-safari-gold hover:bg-safari-gold/90 text-safari-dark font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 shadow-xl shadow-safari-gold/20"
          >
            <Phone className="w-4 h-4" />
            Speak to an Expert
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/accommodations"
            className="group inline-flex items-center gap-3 px-10 py-5 border-2 border-white/40 hover:border-white text-white font-bold uppercase text-xs tracking-widest transition-all hover:bg-white/10"
          >
            Explore Properties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-xs mt-10 uppercase tracking-widest"
        >
          No obligation · Personalised itinerary · Expert local guidance
        </motion.p>
      </div>
    </section>
  );
}
