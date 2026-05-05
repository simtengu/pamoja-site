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
          {/* Centre line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-safari-gold/10 via-safari-gold/40 to-safari-gold/10 hidden md:block -translate-x-1/2" />

          <div className="space-y-20 md:space-y-0">
            {milestones.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={m.year} className="relative md:grid md:grid-cols-2 md:gap-16 md:items-center md:mb-20">

                  {/* Gold dot on centre line */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-safari-gold border-4 border-white shadow-md z-10 hidden md:block" />

                  {/* Content — alternates sides */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-80px" }}
                    className={`${isLeft ? "md:col-start-1 md:text-right" : "md:col-start-2 md:text-left"} mb-8 md:mb-0`}
                  >
                    <span className="inline-block text-5xl font-serif text-safari-gold/30 mb-2 leading-none">{m.year}</span>
                    <h3 className="text-2xl font-serif text-safari-dark mb-3">{m.title}</h3>
                    <p className="text-gray-500 font-light leading-relaxed text-base">{m.body}</p>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true, margin: "-80px" }}
                    className={`${isLeft ? "md:col-start-2" : "md:col-start-1 md:row-start-1"} overflow-hidden rounded-sm shadow-xl`}
                  >
                    <img
                      src={m.image}
                      alt={m.title}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
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
