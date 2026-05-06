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
            src="/images/about/founder.jpg"
            alt="Asheri Kiisay — Founder"
            className="w-full h-full object-cover object-center"
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
              A Dream Born at the Foot of Ngorongoro Forest
            </h2>

            {/* Pull Quote */}
            <div className="relative border-l-4 border-safari-gold pl-6 mb-10 py-2">
              <Quote className="w-8 h-8 text-safari-gold/30 absolute -top-2 -left-1" />
              <p className="text-lg md:text-xl font-serif text-safari-dark italic leading-snug">
                "Pamoja Africa was born from a desire to turn meaningful journeys into lasting connections with nature, culture, and people."
              </p>
              <span className="mt-4 block text-sm font-bold text-safari-accent uppercase tracking-widest">
                — Asheri Kiisay
              </span>
            </div>

            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
             At the heart of Pamoja Africa’s journey is the vision of Asheri Kiisay, whose deep connection to Tanzania’s landscapes inspired something far greater than a place to stay. Growing up surrounded by the raw beauty of the country—from the misty highlands near Ngorongoro to the vast, open plains of the north—he developed a profound respect for nature, culture, and the stories carried within the land. What began as a quiet idea was never about building accommodation alone, but about creating meaningful experiences rooted in authenticity and belonging.
            </p>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
             Driven by this vision, Asheri set out to create spaces where travelers could truly connect with the wild—not as distant observers, but as part of it. Pamoja Africa was founded on the belief that hospitality should go beyond comfort, blending simplicity with thoughtful luxury while honoring the environment and local communities. Each camp and lodge reflects this philosophy, offering guests an experience shaped by the rhythms of nature, the richness of Tanzanian culture, and a genuine sense of place.
            </p>
    

          </motion.div>
        </div>
      </div>
    </section>
  );
}
