"use client";

import { motion } from "framer-motion";
import { BookingData } from "@/types/booking";
import { Info } from "lucide-react";
import { useState } from "react";

interface StepProps {
  data: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function CalendarStep({ data, onUpdate, onNext, onPrev }: StepProps) {
  const [hoveredDate, setHoveredDate] = useState<string | null>(null);

  // Simplified calendar logic for demo / implementation
  // In a real app, use react-day-picker
  const generateMonth = (monthOffset = 0) => {
    const now = new Date();
    const month = now.getMonth() + monthOffset;
    const year = now.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    return {
      name: new Intl.DateTimeFormat('en-US', { month: 'long' }).format(firstDay),
      year,
      days: Array.from({ length: daysInMonth }, (_, i) => {
        const d = new Date(year, month, i + 1);
        return d.toISOString().split('T')[0];
      }),
      padding: startingDay
    };
  };

  const months = [generateMonth(0), generateMonth(1)];

  const handleDateClick = (dateStr: string) => {
    if (!data.checkIn || (data.checkIn && data.checkOut)) {
      onUpdate({ checkIn: dateStr, checkOut: "" });
    } else if (data.checkIn && !data.checkOut) {
      if (dateStr < data.checkIn) {
        onUpdate({ checkIn: dateStr, checkOut: "" });
      } else {
        onUpdate({ checkOut: dateStr });
      }
    }
  };

  const isInRange = (dateStr: string) => {
    if (!data.checkIn || !data.checkOut) return false;
    return dateStr > data.checkIn && dateStr < data.checkOut;
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-serif text-safari-dark mb-2">When do you want to arrive?</h2>
        <p className="text-gray-500 font-light">Select your preferred check-in and check-out dates.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {months.map((month, mIdx) => (
          <div key={mIdx} className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
            <h3 className="text-lg font-bold text-safari-dark mb-6 text-center">{month.name} {month.year}</h3>
            
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: month.padding }).map((_, i) => <div key={`p-${i}`}></div>)}
              {month.days.map(d => {
                const dayNum = d.split('-')[2];
                const isSelected = d === data.checkIn || d === data.checkOut;
                const isRange = isInRange(d);
                const isPast = d < new Date().toISOString().split('T')[0];

                return (
                  <button
                    key={d}
                    onClick={() => !isPast && handleDateClick(d)}
                    disabled={isPast}
                    className={`h-10 sm:h-12 w-full rounded-full flex items-center justify-center text-sm transition-all duration-200 relative
                      ${isSelected 
                        ? "bg-safari-dark text-white font-bold z-10" 
                        : isRange 
                          ? "bg-safari-light text-safari-dark rounded-none" 
                          : isPast 
                            ? "text-gray-200 cursor-not-allowed" 
                            : "text-safari-dark hover:bg-gray-100"}
                    `}
                  >
                    {dayNum}
                    {d === data.checkIn && data.checkOut && (
                      <div className="absolute right-0 w-1/2 h-full bg-safari-light -z-10 rounded-none"></div>
                    )}
                    {d === data.checkOut && (
                      <div className="absolute left-0 w-1/2 h-full bg-safari-light -z-10 rounded-none"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-safari-light/50 p-6 rounded-sm border-l-4 border-safari-gold mb-12 flex items-start">
        <Info className="w-5 h-5 text-safari-gold mr-4 mt-1 flex-shrink-0" />
        <div>
          <p className="text-sm font-bold text-safari-dark mb-1">Availability Note</p>
          <p className="text-xs text-gray-500 leading-relaxed font-light">
            Due to the exclusive nature of our properties, final availability will be confirmed by our team within 24 hours of your request.
          </p>
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
          disabled={!data.checkIn || !data.checkOut}
          className={`px-12 py-5 uppercase font-bold text-sm tracking-widest transition-all duration-300 rounded-sm shadow-xl
            ${data.checkIn && data.checkOut 
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
