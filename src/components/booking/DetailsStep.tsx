"use client";

import { motion } from "framer-motion";
import { Users, Compass, DollarSign, Clock, MessageSquare, MapPin } from "lucide-react";
import { BookingData } from "@/types/booking";

interface StepProps {
  data: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const travelerTypes = ["Solo", "Couple", "Family", "Group", "Honeymoon"];
const safariDestinations = ["Serengeti", "Ngorongoro Crater", "Tarangire", "Lake Manyara", "Arusha National Park"];
const budgetRanges = ["Standard", "Premium", "Luxury", "Ultra-Luxury"];

export default function DetailsStep({ data, onUpdate, onNext, onPrev }: StepProps) {
  
  const toggleDestination = (dest: string) => {
    const current = data.destinations || [];
    if (current.includes(dest)) {
      onUpdate({ destinations: current.filter(d => d !== dest) });
    } else {
      onUpdate({ destinations: [...current, dest] });
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-serif text-safari-dark mb-2">Almost there! Your trip details</h2>
        <p className="text-gray-500 font-light">Tell us a bit more about who's traveling and what you're looking for.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        
        {/* Guest Count */}
        <div className="space-y-4">
          <label className="text-sm font-bold uppercase tracking-widest text-safari-dark flex items-center">
            <Users className="w-4 h-4 mr-2 text-safari-gold" /> Number of Guests
          </label>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onUpdate({ guests: Math.max(1, data.guests - 1) })}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-safari-dark hover:text-white transition-all font-bold text-xl"
            >
              -
            </button>
            <span className="text-2xl font-serif w-12 text-center text-safari-dark">{data.guests}</span>
            <button 
              onClick={() => onUpdate({ guests: data.guests + 1 })}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-safari-dark hover:text-white transition-all font-bold text-xl"
            >
              +
            </button>
          </div>
        </div>

        {/* Traveler Type */}
        <div className="space-y-4">
          <label className="text-sm font-bold uppercase tracking-widest text-safari-dark flex items-center">
            <Compass className="w-4 h-4 mr-2 text-safari-gold" /> Traveler Type
          </label>
          <div className="flex flex-wrap gap-2">
            {travelerTypes.map(type => (
              <button
                key={type}
                onClick={() => onUpdate({ travelerType: type })}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border
                  ${data.travelerType === type 
                    ? "bg-safari-dark text-white border-safari-dark" 
                    : "bg-white text-gray-500 border-gray-200 hover:border-safari-accent"}
                `}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conditional: Safari Package Fields */}
      {data.type === "safari" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10 pt-10 border-t border-gray-100 mb-12"
        >
          <div className="space-y-6">
            <label className="text-sm font-bold uppercase tracking-widest text-safari-dark flex items-center">
              <MapPin className="w-4 h-4 mr-2 text-safari-gold" /> Preferred Destinations
            </label>
            <div className="flex flex-wrap gap-3">
              {safariDestinations.map(dest => (
                <button
                  key={dest}
                  onClick={() => toggleDestination(dest)}
                  className={`px-6 py-3 rounded-sm text-sm transition-all duration-300 border
                    ${data.destinations?.includes(dest)
                      ? "bg-safari-accent text-white border-safari-accent font-bold"
                      : "bg-white text-gray-500 border-gray-100 hover:border-safari-accent"}
                  `}
                >
                  {dest}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-safari-dark flex items-center">
                <DollarSign className="w-4 h-4 mr-2 text-safari-gold" /> Budget Range
              </label>
              <select 
                value={data.budget}
                onChange={(e) => onUpdate({ budget: e.target.value })}
                className="w-full bg-safari-light p-4 rounded-sm outline-none text-safari-dark font-serif"
              >
                {budgetRanges.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase tracking-widest text-safari-dark flex items-center">
                <Clock className="w-4 h-4 mr-2 text-safari-gold" /> Total Days
              </label>
              <input 
                type="number"
                min={1}
                max={30}
                value={data.duration}
                onChange={(e) => onUpdate({ duration: parseInt(e.target.value) })}
                className="w-full bg-safari-light p-4 rounded-sm outline-none text-safari-dark font-serif"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Conditional: Custom Trip Fields */}
      {data.type === "custom" && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 pt-10 border-t border-gray-100 mb-12"
        >
          <label className="text-sm font-bold uppercase tracking-widest text-safari-dark flex items-center">
            <MessageSquare className="w-4 h-4 mr-2 text-safari-gold" /> Describe Your Ideal Journey
          </label>
          <textarea
            value={data.customNotes}
            onChange={(e) => onUpdate({ customNotes: e.target.value })}
            placeholder="E.g. We'd love a mix of Serengeti luxury and Tarangire wilderness. Specifically interested in photography..."
            className="w-full bg-safari-light p-6 rounded-sm outline-none text-safari-dark font-light min-h-[150px] leading-relaxed"
          ></textarea>
        </motion.div>
      )}

      <div className="mt-auto flex justify-between">
        <button
          onClick={onPrev}
          className="px-8 py-4 uppercase font-bold text-xs tracking-widest text-safari-dark hover:text-safari-gold transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          className="px-12 py-5 uppercase font-bold text-sm tracking-widest transition-all duration-300 rounded-sm shadow-xl bg-safari-dark text-white hover:bg-safari-gold"
        >
          Explore Packages
        </button>
      </div>
    </div>
  );
}
