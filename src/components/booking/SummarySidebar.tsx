"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  MapPin, 
  Package, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import { BookingData } from "@/types/booking";

interface SummarySidebarProps {
  data: BookingData;
  currentStep: number;
}

export default function SummarySidebar({ data, currentStep }: SummarySidebarProps) {
  const formatDate = (date: string) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const calculateNights = () => {
    if (!data.checkIn || !data.checkOut) return 0;
    const diffTime = Math.abs(new Date(data.checkOut).getTime() - new Date(data.checkIn).getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="bg-white rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-50 overflow-hidden">
      <div className="bg-safari-dark p-6 text-white text-center">
        <h3 className="text-xl font-serif tracking-wide">Your Selection</h3>
      </div>

      <div className="p-6 md:p-8 space-y-8">
        
        {/* Booking Type */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
             <span className="text-[10px] font-bold uppercase tracking-widest text-safari-gold flex items-center">
               <Package className="w-3 h-3 mr-2" /> Trip Category
             </span>
             {data.type && <CheckCircle2 className="w-3 h-3 text-safari-accent" />}
          </div>
          <p className="text-sm font-serif text-safari-dark capitalize">
            {data.type ? `${data.type} Booking` : "Not selected"}
          </p>
        </div>

        {/* Dates */}
        <div className="space-y-4 pt-6 border-t border-gray-50">
          <div className="flex items-center justify-between">
             <span className="text-[10px] font-bold uppercase tracking-widest text-safari-gold flex items-center">
               <Calendar className="w-3 h-3 mr-2" /> Date Range
             </span>
             {data.checkIn && data.checkOut && <CheckCircle2 className="w-3 h-3 text-safari-accent" />}
          </div>
          <div className="flex items-center gap-4 text-sm font-serif text-safari-dark">
            <span>{formatDate(data.checkIn)}</span>
            <ArrowRight className="w-3 h-3 text-gray-300" />
            <span>{formatDate(data.checkOut)}</span>
          </div>
          {data.checkIn && data.checkOut && (
            <p className="text-[11px] text-gray-500 font-light lowercase">
              Total {calculateNights()} Nights
            </p>
          )}
        </div>

        {/* Guests */}
        <div className="space-y-4 pt-6 border-t border-gray-50">
          <div className="flex items-center justify-between">
             <span className="text-[10px] font-bold uppercase tracking-widest text-safari-gold flex items-center">
               <Users className="w-3 h-3 mr-2" /> Guests & Type
             </span>
             {data.travelerType && <CheckCircle2 className="w-3 h-3 text-safari-accent" />}
          </div>
          <p className="text-sm font-serif text-safari-dark">
            {data.guests} Guests ({data.travelerType})
          </p>
        </div>

        {/* Selected Package (Optional) */}
        {data.selectedPackageId && (
          <div className="space-y-4 pt-6 border-t border-gray-50 bg-safari-light/30 p-2 rounded-sm">
            <span className="text-[10px] font-bold uppercase tracking-widest text-safari-gold flex items-center">
              <Star className="w-3 h-3 mr-2" /> Selected Package
            </span>
            <p className="text-sm font-serif text-safari-dark leading-tight">
              {data.selectedPackageId}
            </p>
          </div>
        )}

      </div>

      <div className="p-6 bg-safari-light/50 mt-auto border-t border-gray-50 flex items-center">
        <ShieldCheck className="w-8 h-8 text-safari-accent mr-4 opacity-50" />
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-safari-dark">Secure Booking Request</p>
          <p className="text-[9px] text-gray-500 font-light opacity-80 leading-relaxed uppercase tracking-widest">
            No payment required today.
          </p>
        </div>
      </div>
    </div>
  );
}

function Star(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
