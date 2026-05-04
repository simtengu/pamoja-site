"use client";

import { motion } from "framer-motion";
import { Home, Compass, Sparkles } from "lucide-react";
import { BookingData } from "@/types/booking";

interface StepProps {
  data: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  onNext: () => void;
}

const types = [
  { 
    id: "accommodation", 
    label: "Accommodation Only", 
    desc: "Luxury lodge or camp stay without a guided safari package.",
    icon: <Home className="w-8 h-8" /> 
  },
  { 
    id: "safari", 
    label: "Safari Package", 
    desc: "Fixed itineraries combining our top lodges with expert-led game drives.",
    icon: <Compass className="w-8 h-8" /> 
  },
  { 
    id: "custom", 
    label: "Custom Trip", 
    desc: "A bespoke Tanzanian adventure tailored specifically to your group.",
    icon: <Sparkles className="w-8 h-8" /> 
  }
];

export default function BookingTypeStep({ data, onUpdate, onNext }: StepProps) {
  const handleSelect = (type: string) => {
    onUpdate({ type: type as any });
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-serif text-safari-dark mb-2">How can we help you explore?</h2>
        <p className="text-gray-500 font-light">Select the primary focus for your Tanzanian visit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {types.map((type) => (
          <motion.button
            key={type.id}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleSelect(type.id)}
            className={`flex flex-col items-center text-center p-8 rounded-sm transition-all duration-300 border-2 
              ${data.type === type.id 
                ? "bg-safari-dark border-safari-gold text-white shadow-2xl" 
                : "bg-white border-gray-100 text-gray-500 hover:border-safari-accent hover:shadow-lg"}
            `}
          >
            <div className={`mb-6 p-4 rounded-full ${data.type === type.id ? "bg-safari-gold text-white" : "bg-safari-light text-safari-accent"}`}>
              {type.icon}
            </div>
            <h3 className={`text-xl font-serif mb-3 ${data.type === type.id ? "text-white" : "text-safari-dark"}`}>
              {type.label}
            </h3>
            <p className={`text-sm font-light leading-relaxed ${data.type === type.id ? "text-gray-300" : "text-gray-500"}`}>
              {type.desc}
            </p>
          </motion.button>
        ))}
      </div>

      <div className="mt-auto flex justify-center sm:justify-end">
        <button
          onClick={onNext}
          disabled={!data.type}
          className={`px-12 py-5 uppercase font-bold text-sm tracking-widest transition-all duration-300 rounded-sm shadow-xl
            ${data.type 
              ? "bg-safari-dark text-white hover:bg-safari-gold" 
              : "bg-gray-200 text-gray-400 cursor-not-allowed"}
          `}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
