"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, Users, Baby, ChevronLeft, ChevronRight } from "lucide-react";
import { BookingData } from "@/types/booking";

interface Props {
  data: BookingData;
  onUpdate: (d: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

interface FieldProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

function Field({ id, label, icon, type = "text", value, onChange, placeholder, required, error }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className={`flex items-center border rounded-sm transition-all duration-200 ${error ? "border-red-300 bg-red-50" : "border-gray-200 bg-white focus-within:border-amber-500 focus-within:ring-2 focus-within:ring-amber-100"}`}>
        <span className="pl-4 text-gray-400">{icon}</span>
        <input
          id={id}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-4 text-sm text-stone-900 bg-transparent focus:outline-none placeholder-gray-300"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

interface CounterProps {
  label: string;
  icon: React.ReactNode;
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
}

function Counter({ label, icon, value, min = 0, max = 20, onChange }: CounterProps) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-sm bg-white">
      <div className="flex items-center gap-3">
        <span className="text-amber-600">{icon}</span>
        <span className="text-sm font-semibold text-stone-700">{label}</span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-amber-500 hover:text-amber-600 transition-all duration-200 font-bold"
        >−</button>
        <span className="w-6 text-center font-bold text-stone-900 text-sm">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-amber-500 hover:text-amber-600 transition-all duration-200 font-bold"
        >+</button>
      </div>
    </div>
  );
}

export default function GuestStep({ data, onUpdate, onNext, onPrev }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.guestName.trim())  e.guestName  = "Full name is required";
    if (!data.guestEmail.trim()) e.guestEmail = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.guestEmail)) e.guestEmail = "Enter a valid email";
    if (!data.guestPhone.trim()) e.guestPhone = "Phone number is required";
    if (data.adultsNo < 1)       e.adultsNo   = "At least 1 adult required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (validate()) onNext();
  };

  return (
    <div>
      <div className="mb-8">
        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-2">Step 5 of 6</span>
        <h2 className="text-3xl font-serif text-stone-900 mb-1">Your Details</h2>
        <p className="text-gray-400 text-sm">We'll use these details to confirm your reservation.</p>
      </div>

      <div className="space-y-5">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-stone-50 border border-gray-100 rounded-sm p-6 space-y-5"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-3">Contact Information</p>

          <Field
            id="guestName" label="Full Name" required
            icon={<User className="w-4 h-4" />}
            value={data.guestName}
            onChange={v => onUpdate({ guestName: v })}
            placeholder="John Doe"
            error={errors.guestName}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              id="guestEmail" label="Email Address" type="email" required
              icon={<Mail className="w-4 h-4" />}
              value={data.guestEmail}
              onChange={v => onUpdate({ guestEmail: v })}
              placeholder="john@example.com"
              error={errors.guestEmail}
            />
            <Field
              id="guestPhone" label="Phone Number" type="tel" required
              icon={<Phone className="w-4 h-4" />}
              value={data.guestPhone}
              onChange={v => onUpdate({ guestPhone: v })}
              placeholder="+1 555 000 0000"
              error={errors.guestPhone}
            />
          </div>
        </motion.div>

        {/* Guest Counts */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-stone-50 border border-gray-100 rounded-sm p-6 space-y-3"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-3">Number of Guests</p>
          {errors.adultsNo && <p className="text-red-500 text-xs">{errors.adultsNo}</p>}
          <Counter
            label="Adults" icon={<Users className="w-5 h-5" />}
            value={data.adultsNo} min={1}
            onChange={v => onUpdate({ adultsNo: v })}
          />
          <Counter
            label="Children" icon={<Baby className="w-5 h-5" />}
            value={data.kidsNo} min={0}
            onChange={v => onUpdate({ kidsNo: v })}
          />
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between items-center">
        <button onClick={onPrev} className="flex items-center text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-amber-600 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </button>
        <button
          onClick={handleNext}
          className="px-10 py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-600 transition-all duration-300 shadow-lg"
        >
          Review Booking <ChevronRight className="w-4 h-4 inline ml-1" />
        </button>
      </div>
    </div>
  );
}
