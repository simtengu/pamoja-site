"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Clock, Users, Calendar, MapPin, Package, User, Star } from "lucide-react";
import { BookingData } from "@/types/booking";

interface StepProps {
  data: BookingData;
  onNext: () => void;
  onPrev: () => void;
}

export default function ReviewStep({ data, onNext, onPrev }: StepProps) {
  const formatDate = (date: string) => {
    if (!date) return "-";
    return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const calculateNights = () => {
    if (!data.checkIn || !data.checkOut) return 0;
    const diffTime = Math.abs(new Date(data.checkOut).getTime() - new Date(data.checkIn).getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="flex flex-col h-full">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-serif text-safari-dark mb-2">Review Your Request</h2>
        <p className="text-gray-500 font-light">Please verify your details before submitting. Our experts will contact you shortly.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
        {/* Trip Overview */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-safari-gold flex items-center">
            <MapPin className="w-4 h-4 mr-2" /> Trip Overview
          </h3>
          <div className="bg-safari-light p-6 rounded-sm space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Booking Type</span>
              <span className="text-safari-dark font-bold capitalize">{data.type}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Dates</span>
              <span className="text-safari-dark font-bold">
                {formatDate(data.checkIn)} - {formatDate(data.checkOut)}
              </span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Duration</span>
              <span className="text-safari-dark font-bold">{calculateNights()} Nights</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Guests</span>
              <span className="text-safari-dark font-bold">{data.guests} ({data.travelerType})</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-safari-gold flex items-center">
            <User className="w-4 h-4 mr-2" /> Traveler Details
          </h3>
          <div className="bg-safari-light p-6 rounded-sm space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Full Name</span>
              <span className="text-safari-dark font-bold">{data.fullName}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-right">
              <span className="text-gray-500">Email</span>
              <span className="text-safari-dark font-bold truncate max-w-[150px]">{data.email}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">Phone</span>
              <span className="text-safari-dark font-bold">{data.phone}</span>
            </div>
          </div>
        </div>

        {/* Additional Details (Package or Custom) */}
        {(data.type === 'safari' || data.type === 'custom') && (
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-safari-gold flex items-center">
              <Star className="w-4 h-4 mr-2" /> Additional Preferences
            </h3>
            <div className="bg-safari-light p-6 rounded-sm">
              {data.type === 'safari' ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-start text-sm">
                    <span className="text-gray-500">Destinations</span>
                    <span className="text-safari-dark font-bold text-right max-w-xs">{data.destinations?.join(', ') || 'Any'}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Budget Range</span>
                    <span className="text-safari-dark font-bold">{data.budget}</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <span className="text-gray-500 text-xs uppercase tracking-widest font-bold">Custom Vision</span>
                  <p className="text-safari-dark font-light text-sm italic">"{data.customNotes || 'Shared upon contact'}"</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm">
          <ShieldCheck className="w-6 h-6 text-safari-accent mr-4" />
          <span className="text-xs font-bold text-safari-dark">Secure Booking</span>
        </div>
        <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm">
          <CheckCircle className="w-6 h-6 text-safari-accent mr-4" />
          <span className="text-xs font-bold text-safari-dark">Tanzanian Experts</span>
        </div>
        <div className="flex items-center p-4 bg-white border border-gray-100 rounded-sm">
          <Clock className="w-6 h-6 text-safari-accent mr-4" />
          <span className="text-xs font-bold text-safari-dark">24h Response Time</span>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col items-center">
         <button
          onClick={onNext}
          className="w-full md:w-auto px-16 py-6 bg-safari-dark text-white uppercase font-bold text-sm tracking-[0.2em] transition-all duration-300 rounded-sm shadow-2xl hover:bg-safari-gold hover:scale-105"
        >
          Submit Booking Request
        </button>
        <p className="mt-4 text-[10px] text-gray-400 font-light opacity-60">
          No payment is required at this stage. Our team will review and confirm availability first.
        </p>

        <button
          onClick={onPrev}
          className="mt-6 px-8 py-4 uppercase font-bold text-xs tracking-widest text-safari-dark hover:text-safari-gold transition-colors"
        >
          Go Back & Edit
        </button>
      </div>
    </div>
  );
}
