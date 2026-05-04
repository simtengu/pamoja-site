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
            <li className="flex items-start text-sm text-gray-400 font-light"><CheckCircle2 className="w-4 h-4 text-safari-accent mr-3 mt-0.5 flex-shrink-0" />Zero-carbon footprint by 2030</li>
            <li className="flex items-start text-sm text-gray-400 font-light"><CheckCircle2 className="w-4 h-4 text-safari-accent mr-3 mt-0.5 flex-shrink-0" />100% solar power implementation</li>
            <li className="flex items-start text-sm text-gray-400 font-light"><CheckCircle2 className="w-4 h-4 text-safari-accent mr-3 mt-0.5 flex-shrink-0" />Continuous wildlife habitat expansion</li>
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
            <li className="flex items-start text-sm text-gray-500 font-light"><CheckCircle2 className="w-4 h-4 text-safari-gold mr-3 mt-0.5 flex-shrink-0" />Supporting regional anti-poaching units</li>
            <li className="flex items-start text-sm text-gray-500 font-light"><CheckCircle2 className="w-4 h-4 text-safari-gold mr-3 mt-0.5 flex-shrink-0" />Preserving indigenous cultural heritage</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}

// ─── Locations Carousel ───────────────────────────────────────────────────────

const locations = [
  { name: "Pamoja Serengeti Luxury Camp", region: "Central Serengeti", image: "/images/serengeti-1.jpeg", desc: "An authentic canvas experience in the heart of the great migration path." },
  { name: "Tarangire Luxury Hideaway", region: "Tarangire National Park", image: "/images/tarangire-2.jpeg", desc: "A secluded sanctuary among colossal baobabs and vast elephant herds." },
  { name: "Pamoja Farm Villas", region: "Karatu / Ngorongoro", image: "/images/pamoja-villa-1.jpeg", desc: "Boutique villas set within lush gardens, the perfect base for Ngorongoro Crater." },
  { name: "Pamoja Migration Camp", region: "Northern Serengeti", image: "/images/migration-3.jpeg", desc: "Strategically located to witness the dramatic Mara River crossings." },
  { name: "Manyara Baobab Lodge", region: "Lake Manyara", image: "/images/baobab-3.jpeg", desc: "Nested in an ancient baobab forest overlooking the picturesque Lake Manyara." },
  { name: "Migration Undercanvas", region: "Mobile (Serengeti)", image: "/images/undercanvas-2.jpeg", desc: "A boutique mobile camp that follows the pulse of the Great Wildebeest Migration." },
  { name: "Pamoja Verdant Farm Villa", region: "Karatu Highlands", image: "/images/pamoja-villa-6.jpeg", desc: "A private estate offering absolute tranquility and farm-to-table experiences." },
];

export function LocationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const extended = [...locations, ...locations, ...locations];

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    let cardWidth = clientWidth;
    if (window.innerWidth >= 1024) cardWidth = clientWidth / 3;
    else if (window.innerWidth >= 768) cardWidth = clientWidth / 2;
    scrollRef.current.scrollTo({ left: dir === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth, behavior: "smooth" });
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const buffer = scrollWidth / 3;
    if (scrollLeft <= 10) scrollRef.current.scrollLeft = buffer;
    else if (scrollLeft >= scrollWidth - clientWidth - 10) scrollRef.current.scrollLeft = buffer;
  };

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3;
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => scroll("right"), 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-safari-light px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-4 block">Our Properties</span>
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">Our Iconic Destinations</h2>
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={() => { scroll("left"); setIsPaused(true); }} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white text-safari-dark hover:bg-safari-gold hover:border-safari-gold transition-all cursor-pointer z-10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => { scroll("right"); setIsPaused(true); }} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center bg-white text-safari-dark hover:bg-safari-gold hover:border-safari-gold transition-all cursor-pointer z-10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-auto pb-12 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {extended.map((loc, index) => (
            <div key={`${loc.name}-${index}`} className="flex-none w-full md:w-1/2 lg:w-1/3 snap-start px-4 group cursor-pointer">
              <div className="relative h-[450px] mb-6 overflow-hidden rounded-sm shadow-xl">
                <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/90 via-safari-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center text-safari-gold mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{loc.region}</span>
                  </div>
                  <h3 className="text-white text-2xl font-serif mb-2 group-hover:text-safari-gold transition-colors">{loc.name}</h3>
                  <div className="w-12 h-0.5 bg-safari-gold/50 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed px-2">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
}
