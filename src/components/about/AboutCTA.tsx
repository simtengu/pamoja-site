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
          Ready to Discover Your <br />
          <span className="text-safari-gold">Perfect African Stay?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-300 font-light text-lg mb-14 max-w-2xl mx-auto"
        >
          From the golden plains of the Serengeti to the ancient baobabs of Tarangire, immerse yourself in our collection of boutique lodges and camps where refined luxury meets the untamed heart of the wild.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <Link
            href="/booking"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-safari-gold hover:bg-safari-gold/90 text-safari-dark font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 shadow-xl shadow-safari-gold/20"
          >
            Book Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="https://wa.me/255767465557"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold uppercase text-xs tracking-widest transition-all hover:scale-105 shadow-xl shadow-green-500/20"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Expert
          </a>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-xs mt-10 uppercase tracking-widest"
        >
          Direct Bookings · Luxury Portfolio · Local Experts
        </motion.p>
      </div>
    </section>
  );
}
