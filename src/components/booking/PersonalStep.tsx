"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, ShieldCheck } from "lucide-react";
import { BookingData } from "@/types/booking";

interface StepProps {
  data: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function PersonalStep({ data, onUpdate, onNext, onPrev }: StepProps) {
  const isValid = data.fullName && data.email && data.phone;

  return (
    <div className="flex flex-col h-full">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-serif text-safari-dark mb-2">Who are we preparing for?</h2>
        <p className="text-gray-500 font-light">We'll use these details to send your personalized proposal within 24 hours.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-safari-dark">Full Name</label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-safari-gold" />
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => onUpdate({ fullName: e.target.value })}
              placeholder="E.g. Michael Smith"
              className="w-full bg-safari-light p-5 pl-12 rounded-sm outline-none text-safari-dark font-serif"
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold uppercase tracking-widest text-safari-dark">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-safari-gold" />
            <input
              type="email"
              value={data.email}
              onChange={(e) => onUpdate({ email: e.target.value })}
              placeholder="E.g. hello@travel.com"
              className="w-full bg-safari-light p-5 pl-12 rounded-sm outline-none text-safari-dark font-serif"
              required
            />
          </div>
        </div>

        <div className="space-y-4 md:col-span-2">
          <label className="text-xs font-bold uppercase tracking-widest text-safari-dark">Phone / WhatsApp</label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-safari-gold" />
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => onUpdate({ phone: e.target.value })}
              placeholder="E.g. +1 (555) 000-0000"
              className="w-full bg-safari-light p-5 pl-12 rounded-sm outline-none text-safari-dark font-serif"
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-sm border border-gray-100 mb-12 flex items-center justify-between">
        <div className="flex items-center">
          <ShieldCheck className="w-8 h-8 text-safari-accent mr-4" />
          <div>
            <p className="text-sm font-bold text-safari-dark">Your privacy is our priority</p>
            <p className="text-xs text-gray-400 font-light leading-relaxed">We only use your data to manage your booking request.</p>
          </div>
        </div>
      </div>

      <div className="mt-auto flex justify-between">
        <button
          onClick={onPrev}
          className="px-8 py-4 uppercase font-bold text-xs tracking-widest text-safari-dark hover:text-safari-gold transition-colors"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!isValid}
          className={`px-12 py-5 uppercase font-bold text-sm tracking-widest transition-all duration-300 rounded-sm shadow-xl
            ${isValid 
              ? "bg-safari-dark text-white hover:bg-safari-gold" 
              : "bg-gray-200 text-gray-400 cursor-not-allowed"}
          `}
        >
          Final Review
        </button>
      </div>
    </div>
  );
}
