"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { BookingData } from "@/types/booking";

// ─── Static data (filtered per property) ─────────────────────────────────────
const experiencesData = [
  { id: "canoeing-manyara",      title: "Lake Manyara Canoeing",             properties: ["Manyara Baobab Lodge"],                                                            image: "/images/experiences/lake-manyara-canoeing.jpg" },
  { id: "mto-wa-mbu-tour",       title: "Mto wa Mbu Cultural Town Tour",      properties: ["Manyara Baobab Lodge"],                                                            image: "/images/experiences/Mto-wa-Mbu-Cultural-Tour.jpg" },
  { id: "walking-safari-verdant",title: "Guided Forest Walking Safari",        properties: ["Pamoja Verdant Farm Villa"],                                                       image: "/images/experiences/forest-walking-safari.jpg" },
  { id: "arusha-city-tour",      title: "Arusha City Tour",                  properties: ["Pamoja Verdant Farm Villa"],                                                       image: "/images/experiences/arusha-city-tour.jpg" },
  { id: "lake-duluti-tour",      title: "Lake Duluti Canoeing & Forest Walk", properties: ["Pamoja Verdant Farm Villa"],                                                       image: "/images/experiences/Lake_Duluti.jpg" },
  { id: "balloon-safari",        title: "Serengeti Hot Air Balloon",          properties: ["Pamoja Migration Camp", "Migration Undercanvas", "Pamoja Serengeti Luxury Camp"],  image: "/images/experiences/serengeti-national-park-baloon-safari.jpg" },
  { id: "mara-river-crossing",   title: "Wildebeest Mara River Crossing",     properties: ["Migration Undercanvas", "Pamoja Migration Camp"],                                 image: "/images/experiences/wildebeest-migration-safari.jpg" },
  { id: "maasai-boma",           title: "Maasai Boma Visit",                  properties: ["Tarangire Luxury Hideaway"],                                                       image: "/images/experiences/maasai-boma.jpg" },
  { id: "coffee-banana-tour",    title: "Coffee & Banana Farm Tour",          properties: ["Pamoja Farm Villas", "Pamoja Verdant Farm Villa"],                                 image: "/images/experiences/coffee-farm-tour-1.jpg" },
  { id: "karatu-town-tour",      title: "Karatu Town & Market Tour",          properties: ["Pamoja Farm Villas"],                                                              image: "/images/experiences/karatu-town-1.jpg" },
  { id: "elephant-caves-trek",   title: "Elephant Caves & Endoro Waterfall",  properties: ["Pamoja Farm Villas"],                                                              image: "/images/experiences/elephant-caves-main-image.jpg" },
];

const offersData = [
  { id: "stay-longer",       title: "Stay Longer, Explore Deeper",  badge: "Most Popular",   image: "/images/serengeti-1.jpeg",           desc: "5+ nights — 10% off your entire stay." },
  { id: "safari-day-trip",   title: "Safari Discovery Bonus",        badge: "Exclusive",      image: "/images/experiences/safari-discovery-bonus.jpg", desc: "7-day stay — complimentary private day trip." },
  { id: "honeymoon-dinner",  title: "Romantic Bush Experience",      badge: "Honeymooners",   image: "/images/experiences/bush-experience.jpg",         desc: "3+ nights — private sunset bush dinner." },
  { id: "early-bird",        title: "Early Bird Safari Special",     badge: "Early Purchase", image: "/images/migration-1.jpeg",           desc: "Book 6 months ahead — 15% discount." },
];

interface Props {
  data: BookingData;
  onUpdate: (d: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

function MiniCard({
  id, title, image, badge, desc, isSelected, onToggle,
}: { id: string; title: string; image: string; badge?: string; desc?: string; isSelected: boolean; onToggle: () => void; }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      onClick={onToggle}
      className={`relative cursor-pointer rounded-sm overflow-hidden border-2 transition-all duration-300 shadow-sm
        ${isSelected ? "border-amber-600 shadow-amber-100 shadow-md" : "border-gray-100 hover:border-amber-200 hover:shadow-md"}`}
    >
      {/* Image */}
      <div className="relative h-28 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {badge && (
          <span className="absolute top-2 left-2 text-[9px] font-bold uppercase tracking-widest bg-amber-600 text-white px-2 py-0.5 rounded-sm">
            {badge}
          </span>
        )}
        {isSelected && (
          <div className="absolute top-2 right-2 bg-amber-600 rounded-full p-0.5 text-white">
            <CheckCircle2 className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 bg-white">
        <p className="text-stone-900 font-semibold text-xs leading-snug mb-1">{title}</p>
        {desc && <p className="text-gray-400 text-[11px] leading-relaxed">{desc}</p>}
      </div>

      {/* Selection bar */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${isSelected ? "bg-amber-600" : "bg-transparent"}`} />
    </motion.div>
  );
}

export default function ExperiencesStep({ data, onUpdate, onNext, onPrev }: Props) {
  const filteredExps = experiencesData.filter(e => e.properties.includes(data.propertyName));
  const allExps = filteredExps.length > 0 ? filteredExps : experiencesData;

  const toggleExp = (id: string) => {
    const cur = data.selectedExperiences;
    onUpdate({ selectedExperiences: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id] });
  };
  const toggleOffer = (id: string) => {
    const cur = data.selectedOffers;
    onUpdate({ selectedOffers: cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id] });
  };

  return (
    <div>
      <div className="mb-6">
        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-2">Step 4 of 6</span>
        <h2 className="text-3xl font-serif text-stone-900 mb-1">Experiences & Offers</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Let us know what interests you — your reservation team will follow up with details.
          This step is <span className="font-semibold text-stone-600">optional</span>.
        </p>
      </div>

      {/* Experiences */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-gray-100 pb-2 flex-1">
            Experiences {filteredExps.length > 0 ? `— ${data.propertyName}` : "— All Properties"}
          </h3>
          <Link href="/experiences" target="_blank" className="flex items-center gap-1 text-amber-600 text-[10px] font-bold uppercase tracking-widest hover:underline ml-4 shrink-0">
            View All <ExternalLink className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {allExps.map(e => (
            <MiniCard
              key={e.id} id={e.id} title={e.title} image={e.image}
              isSelected={data.selectedExperiences.includes(e.id)}
              onToggle={() => toggleExp(e.id)}
            />
          ))}
        </div>
      </div>

      {/* Offers */}
      <div className="mb-8">
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 border-b border-gray-100 pb-2 mb-4">
          Special Offers
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {offersData.map(o => (
            <MiniCard
              key={o.id} id={o.id} title={o.title} image={o.image} badge={o.badge} desc={o.desc}
              isSelected={data.selectedOffers.includes(o.id)}
              onToggle={() => toggleOffer(o.id)}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between items-center">
        <button onClick={onPrev} className="flex items-center text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-amber-600 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </button>
        <div className="flex gap-3">
          <button onClick={onNext} className="px-6 py-3 border border-gray-300 text-gray-500 text-xs font-bold uppercase tracking-widest rounded-sm hover:border-amber-300 hover:text-amber-600 transition-all duration-300">
            Skip
          </button>
          <button
            onClick={onNext}
            className="px-10 py-3 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-600 transition-all duration-300 shadow-lg"
          >
            Continue <ChevronRight className="w-4 h-4 inline ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
