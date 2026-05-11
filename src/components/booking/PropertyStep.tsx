"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { fetchProperties } from "@/lib/api/bookingService";
import { Property } from "@/types/property";
import { BookingData } from "@/types/booking";

interface Props {
  data: BookingData;
  onUpdate: (d: Partial<BookingData>) => void;
  onNext: () => void;
}

export default function PropertyStep({ data, onUpdate, onNext }: Props) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProperties()
      .then(setProperties)
      .catch(() => setError("Failed to load properties. Please refresh."))
      .finally(() => setLoading(false));
  }, []);

  const select = (p: Property) => {
    onUpdate({
      propertyId: p.id,
      propertyName: p.name,
      propertyPhoto: p.photos?.[0] ?? "",
      // Reset downstream steps when property changes
      selectedDates: [],
      checkinDate: "",
      checkoutDate: "",
      selectedRooms: [],
    });
  };

  return (
    <div>
      <div className="mb-8">
        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-2">Step 1 of 6</span>
        <h2 className="text-3xl font-serif text-stone-900 mb-2">Choose Your Property</h2>
        <p className="text-gray-500 text-sm leading-relaxed">Select the Pamoja property you'd like to stay at.</p>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Loader2 className="w-8 h-8 animate-spin mb-3 text-amber-600" />
          <span className="text-sm font-medium">Loading properties…</span>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-sm text-red-600 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((p, i) => {
            const isSelected = data.propertyId === p.id;
            return (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => select(p)}
                className={`group relative p-5 text-left rounded-sm transition-all duration-300 border-2 focus:outline-none flex items-center justify-between
                  ${isSelected 
                    ? "border-amber-600 bg-amber-50 shadow-md" 
                    : "border-gray-100 bg-white hover:border-amber-300 hover:shadow-sm"}`}
              >
                <div className="pr-4">
                  <h3 className={`font-serif text-stone-900 text-base leading-tight mb-1 transition-colors ${isSelected ? "text-amber-800" : ""}`}>
                    {p.name}
                  </h3>
                  <div className="flex items-center text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    <MapPin className="w-3 h-3 mr-1 text-amber-600" />
                    {p.region || p.address}
                  </div>
                </div>

                <div className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300
                  ${isSelected ? "bg-amber-600 border-amber-600 text-white" : "border-gray-200 text-transparent"}`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </motion.button>
            );
          })}
        </div>
      )}

      {/* Next */}
      <div className="mt-10 flex justify-end">
        <button
          onClick={onNext}
          disabled={!data.propertyId}
          className="px-10 py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm 
            hover:bg-amber-600 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        >
          Continue to Dates
        </button>
      </div>
    </div>
  );
}
