"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2004",
    title: "The First Canvas",
    body: "Beneath the canopy of an ancient Baobab in the Serengeti, Asheri Kiisay pitched the first tent of what would become Pamoja Africa — a single camp driven by passion and a deep love for the wild.",
    image: "/images/baobab-2.jpeg",
  },
  {
    year: "2008",
    title: "Tarangire & Conservation",
    body: "The Tarangire Luxury Hideaway opened among colossal elephant herds, and Pamoja signed its first formal anti-poaching partnership — cementing conservation as a founding pillar of the business.",
    image: "/images/tarangire-2.jpeg",
  },
  {
    year: "2012",
    title: "Community Roots",
    body: "Pamoja Farm Villas launched in the Ngorongoro highlands, and the first community school funded by Pamoja opened its doors. The 'Together' in our name became a lived reality.",
    image: "/images/pamoja-villa-3.jpeg",
  },
  {
    year: "2016",
    title: "Following the Migration",
    body: "Our mobile camp, Migration Undercanvas, began following the pulse of the Great Wildebeest Migration — offering guests an ever-changing front-row seat to one of Earth's greatest spectacles.",
    image: "/images/migration-3.jpeg",
  },
  {
    year: "2020",
    title: "Going Fully Solar",
    body: "Every Pamoja property completed its transition to 100% solar power — a milestone that reduced our carbon footprint by over 2,400 tonnes annually and set the standard for eco-lodges across East Africa.",
    image: "/images/serengeti-1.jpeg",
  },
  {
    year: "2024",
    title: "10,000 Guests & Beyond",
    body: "We celebrated our 10,000th guest and 50,000 acres brought under conservation stewardship. The dream that started with one tent now spans seven iconic properties across northern Tanzania.",
    image: "/images/pamoja1.jpg",
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
            Two Decades in the Wild
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
