"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2015",
    title: "Our First Property",
    body: "Pamoja Africa opened its doors with Pamoja Serengeti Luxury Camp — our flagship property in the heart of the Serengeti. Born from Asheri Kiisay's dream of blending authentic wilderness with warm, thoughtful hospitality, this first camp set the standard for everything that followed.",
    image: "/images/about/pamoja-luxury.jpg",
  },
  {
    year: "2017–2018",
    title: "Following the Migration",
    body: "Pamoja launched two dedicated migration camps — Pamoja Migration Camp and Migration Undercanvas — positioned to follow the pulse of the Great Wildebeest Migration across the Serengeti ecosystem. For the first time, guests could experience the spectacle from an ever-changing front-row seat, moving with the herds season by season.",
    image: "/images/migration-3.jpeg",
  },
  {
    year: "2021–2023",
    title: "More Properties Added",
    body: "Pamoja continued to grow its footprint across Tanzania's most iconic landscapes. The Tarangire Luxury Hideaway was established among the iconic elephant herds of Tarangire, while Pamoja Farm Villas brought a highland retreat experience to the Ngorongoro region — each property carefully designed to reflect the character of its surroundings.",
    image: "/images/tarangire-2.jpeg",
  },
  {
    year: "2021",
    title: "Community Support",
    body: "As Pamoja grew, so did our commitment to the communities around us. We expanded our local workforce to over 120 employees — all Tanzanian — and launched 40+ training programs for guides, hospitality staff, and conservation workers. Five community projects were supported, including contributions to local schools and vocational training initiatives, ensuring that the benefits of tourism extended far beyond our camps.",
    image: "/images/team/team-two.jpg",
  },
  {
    year: "2023",
    title: "80% Solar for All In-Park Properties",
    body: "Pamoja made significant strides in sustainability, with all in-park properties transitioning to 80% solar-powered operations. Some of our bush camps and conservancy lodges now rely primarily on solar for lighting, hot water, and camp operations — reducing our environmental footprint and setting a new standard for responsible safari hospitality in East Africa.",
    image: "/images/about/serengeti-luxury.jpg",
  },
  {
    year: "2025",
    title: "10,000 Guests & Counting",
    body: "We celebrated a landmark milestone — welcoming our 10,000th guest. From first-time safari travellers to returning families, each guest has played a part in the Pamoja story. The dream that started with one tent now spans seven iconic properties across northern Tanzania, with more unforgettable journeys yet to come.",
    image: "/images/about/guests.jpg",
  },
];

export default function OurTimeline() {
  return (
    <section className="py-24 bg-white px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">
            A Decade in the Wild
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on the left (Desktop) */}
          <div className="absolute left-0 md:left-[45%] top-0 bottom-0 w-px bg-gradient-to-b from-safari-gold/5 via-safari-gold/20 to-safari-gold/5 hidden md:block" />

          <div className="space-y-24">
            {milestones.map((m, i) => {
              return (
                <div key={m.year} className="relative md:grid md:grid-cols-[1fr,1.2fr] md:gap-20 md:items-start">
                  
                  {/* Image Column */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-2xl mb-8 md:mb-0 group"
                  >
                    <img
                      src={m.image}
                      alt={m.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-safari-dark/5 group-hover:bg-transparent transition-colors duration-500" />
                  </motion.div>

                  {/* Content Column */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col justify-center pt-2 md:pt-4 relative"
                  >
                    {/* Timeline indicator dot (Desktop) */}
                    <div className="absolute -left-[calc(2.5rem+0.5px)] top-12 w-3 h-3 rounded-full bg-safari-gold shadow-[0_0_10px_rgba(193,155,110,0.5)] hidden md:block" />

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl md:text-5xl font-serif text-safari-gold/40 leading-none">
                          {m.year}
                        </span>
                        <div className="h-px flex-grow bg-gradient-to-r from-safari-gold/30 to-transparent" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-serif text-safari-dark tracking-tight">
                        {m.title}
                      </h3>
                      
                      <p className="text-gray-600 font-light leading-relaxed text-lg max-w-xl">
                        {m.body}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
