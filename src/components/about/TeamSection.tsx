"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const team = [
  {
    name: "Jackson Mrema",
    role: "Head Safari Guide",
    speciality: "Great Migration & Wildlife Tracking",
    image: "/images/team/team-one.jpg",
    bio: "With 15+ years spent tracking the Serengeti, Jackson reads the land like a living map. His deep knowledge of animal behaviour has created thousands of unforgettable wildlife encounters.",
    fact: "Ask me about the best spot to watch a cheetah hunt at dawn.",
  },
  {
    name: "Sarah Jenkins",
    role: "Operations Director",
    speciality: "Luxury Guest Experience",
    image: "/images/team/team-two.jpg",
    bio: "Sarah orchestrates the seamless magic behind every Pamoja stay — from the perfectly chilled sundowner to the midnight campfire under a billion stars. No detail is too small.",
    fact: "Ask me about how we keep fine dining running miles from the nearest town.",
  },
  {
    name: "Chef Amadi",
    role: "Executive Bush Chef",
    speciality: "Farm-to-Table & Local Cuisine",
    image: "/images/team/team-three.jpg",
    bio: "Amadi transforms Tanzanian ingredients into five-star menus served under the stars. His dishes are a love letter to the land — local, seasonal, and extraordinary.",
    fact: "Ask me about our secret spice blend that guests try to smuggle home.",
  },
  {
    name: "Neema Tarimo",
    role: "Conservation Officer",
    speciality: "Wildlife Protection & Community Liaison",
    image: "/images/team/team-four.jpeg",
    bio: "Neema bridges the gap between conservation science and community prosperity. She oversees our anti-poaching partnerships and ensures every guest visit funds tangible conservation outcomes.",
    fact: "Ask me about the lion pride we've been tracking for a decade.",
  },
  {
    name: "Daniel Olekamai",
    role: "Senior Maasai Cultural Guide",
    speciality: "Cultural Heritage & Storytelling",
    image: "/images/team/team-five.jpg",
    bio: "A Maasai elder and master storyteller, Daniel opens doors to a world that few outsiders ever witness — ancient traditions, star navigation, and the philosophy of living with the wild.",
    fact: "Ask me about the night sky and how my ancestors used stars to find water.",
  },
];

export default function TeamSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? team.length - 1 : p - 1));
  const next = () => setActive((p) => (p === team.length - 1 ? 0 : p + 1));

  const member = team[active];

  return (
    <section className="py-24 bg-safari-light px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
              The Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">
              The Faces Behind Pamoja
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-safari-gold hover:border-safari-gold transition-all duration-300 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-safari-dark" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center hover:bg-safari-gold hover:border-safari-gold transition-all duration-300 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-safari-dark" />
            </button>
          </div>
        </div>

        {/* Main featured card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white shadow-2xl overflow-hidden"
        >
          {/* Image */}
          <div className="relative h-[400px] lg:h-[560px] overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/70 via-transparent to-transparent lg:hidden" />
            {/* Role badge */}
            <div className="absolute top-6 left-6 bg-safari-gold text-safari-dark px-4 py-2 text-xs font-bold uppercase tracking-widest">
              {member.speciality}
            </div>
          </div>

          {/* Content */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h3 className="text-4xl font-serif text-safari-dark mb-2">{member.name}</h3>
            <span className="text-sm uppercase tracking-widest font-bold text-safari-accent mb-6 block">{member.role}</span>
            <div className="w-12 h-0.5 bg-safari-gold mb-8" />
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">{member.bio}</p>

            {/* Fun fact */}
            <div className="border-l-4 border-safari-gold pl-6 bg-safari-light py-4 pr-4">
              <p className="text-sm font-bold text-safari-dark mb-1 uppercase tracking-widest">Fun Fact</p>
              <p className="text-gray-600 font-light italic text-sm">{member.fact}</p>
            </div>

            {/* Dot navigation */}
            <div className="flex gap-2 mt-10">
              {team.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "bg-safari-gold w-8" : "bg-gray-300 w-4"}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Thumbnail row */}
        <div className="grid grid-cols-5 gap-3 mt-6">
          {team.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden h-20 cursor-pointer transition-all duration-300 ${i === active ? "ring-2 ring-safari-gold ring-offset-2" : "opacity-60 hover:opacity-90"}`}
            >
              <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
