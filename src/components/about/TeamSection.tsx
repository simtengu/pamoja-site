"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const team = [
  {
    name: "Pamoja Serengeti Luxury Camp",
    role: "Team",
    speciality: "Serengeti National Park",
    image: "/images/team/team-one.jpg",
  },
  {
    name: "Tarangire Luxury Hideaway",
    role: "Team",
    speciality: "Tarangire National Park",
    image: "/images/team/team-two.jpg",
  },
  {
    name: "Pamoja Farm Villas",
    role: "Team",
    speciality: "Karatu / Ngorongoro",
    image: "/images/team/team-three.jpg",
  },
  {
    name: "Pamoja Migration Camp",
    role: "Team",
    speciality: "Northern Serengeti",
    image: "/images/team/team-four.jpeg",
  },
  {
    name: "Manyara Baobab Lodge",
    role: "Team",
    speciality: "Lake Manyara",
    image: "/images/team/team-five.jpg",
  },
  {
    name: "Migration Undercanvas",
    role: "Team",
    speciality: "Mobile (Serengeti)",
    image: "/images/team/serengeti-luxury-team.jpg",
  },
  {
    name: "Pamoja Verdant Farm Villa",
    role: "Team",
    speciality: "Karatu Highlands",
    image: "/images/team/villa-team.jpg",
  },
];

const GENERAL_BIO = "The Pamoja experience is brought to life by our exceptional staff members who call these wild places home. From the moment you arrive until your final farewell, our teams at each property are dedicated to ensuring your comfort, safety, and a deep connection with the Tanzanian wilderness. They are the storytellers, the protectors, and the creators of the magic that happens every day in the bush.";

const GENERAL_PHILOSOPHY = "Our people are our greatest asset. We invest in local talent, providing ongoing training and empowerment to ensure that the benefits of tourism are shared with the communities that surround our iconic destinations.";

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
            {/* Location badge */}
            <div className="absolute top-6 left-6 bg-safari-gold text-safari-dark px-4 py-2 text-xs font-bold uppercase tracking-widest">
              {member.speciality}
            </div>
          </div>

          {/* Content */}
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <h3 className="text-4xl font-serif text-safari-dark mb-2">{member.name}</h3>
            <span className="text-sm uppercase tracking-widest font-bold text-safari-accent mb-6 block">{member.role}</span>
            <div className="w-12 h-0.5 bg-safari-gold mb-8" />
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">{GENERAL_BIO}</p>

            {/* Philosophy instead of Fun Fact */}
            <div className="border-l-4 border-safari-gold pl-6 bg-safari-light py-4 pr-4">
              <p className="text-sm font-bold text-safari-dark mb-1 uppercase tracking-widest">Our Philosophy</p>
              <p className="text-gray-600 font-light italic text-sm">{GENERAL_PHILOSOPHY}</p>
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
        <div className="grid grid-cols-4 md:grid-cols-7 gap-3 mt-6">
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
