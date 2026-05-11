"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Building2, CalendarDays, BedDouble, Users, Sparkles, Tag,
  ChevronLeft, Loader2, CheckCircle2, AlertCircle, MessageCircle, Copy, Check
} from "lucide-react";
import { BookingData } from "@/types/booking";
import { useState } from "react";
import Link from "next/link";

interface Props {
  data: BookingData;
  onPrev: () => void;
  onSubmit: () => Promise<void> | void;
  isSubmitting: boolean;
  bookingId: string | null;
  submitError: string | null;
  onReset: () => void;
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3 border-b border-gray-50 last:border-0">
      <span className="text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">{label}</span>
      <span className="text-sm text-stone-800 font-medium text-right">{value}</span>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm shadow-sm overflow-hidden">
      <div className="px-5 py-3 bg-stone-50 border-b border-gray-100">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{title}</p>
      </div>
      <div className="px-5">{children}</div>
    </div>
  );
}

function SuccessScreen({ bookingId, data, onReset }: { bookingId: string; data: BookingData; onReset: () => void }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(bookingId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Pamoja Africa! I just made a booking request (Ref: ${bookingId}) for ${data.propertyName}. Looking forward to hearing from you.`
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-center py-6"
    >
      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="w-20 h-20 rounded-full bg-green-50 border-4 border-green-200 flex items-center justify-center mx-auto mb-6"
      >
        <CheckCircle2 className="w-10 h-10 text-green-500" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
        <h2 className="text-3xl font-serif text-stone-900 mb-2">Booking Request Received!</h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
          Thank you, <span className="font-semibold text-stone-700">{data.guestName}</span>. Our reservations team
          will contact you at <span className="font-semibold text-stone-700">{data.guestEmail}</span> within 24 hours
          to confirm your stay at {data.propertyName}.
        </p>
      </motion.div>

      {/* Booking Ref */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-sm px-5 py-3 mb-8"
      >
        <div className="text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-0.5">Booking Reference</p>
          <p className="font-mono text-stone-900 font-bold text-sm">{bookingId}</p>
        </div>
        <button onClick={copy} className="ml-2 text-gray-400 hover:text-amber-600 transition-colors">
          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <Link
          href={`https://wa.me/255XXXXXXXXX?text=${whatsappMsg}`}
          target="_blank"
          className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-green-700 transition-colors shadow-lg"
        >
          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
        </Link>
        <button
          onClick={onReset}
          className="px-8 py-4 border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-widest rounded-sm hover:border-amber-300 hover:text-amber-600 transition-all"
        >
          Make Another Booking
        </button>
        <Link
          href="/"
          className="px-8 py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-600 transition-all shadow-lg"
        >
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default function SummaryStep({ data, onPrev, onSubmit, isSubmitting, bookingId, submitError, onReset }: Props) {
  const nights = data.selectedDates.length;
  const totalCost = data.selectedRooms.reduce((sum, r) => sum + r.price * nights, 0);

  const formatDate = (ymd: string) =>
    ymd ? new Date(ymd + "T00:00:00Z").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" }) : "—";

  // If submitted successfully, show success screen
  if (bookingId) {
    return <SuccessScreen bookingId={bookingId} data={data} onReset={onReset} />;
  }

  return (
    <div>
      <div className="mb-8">
        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-2">Step 6 of 6</span>
        <h2 className="text-3xl font-serif text-stone-900 mb-1">Review Your Booking</h2>
        <p className="text-gray-400 text-sm">Please review everything before submitting your request.</p>
      </div>

      <div className="space-y-4">
        {/* Property */}
        <Section title="Property">
          <Row label="Property" value={data.propertyName} />
        </Section>

        {/* Dates */}
        <Section title="Stay Dates">
          <Row label="Check-in"  value={formatDate(data.checkinDate)} />
          <Row label="Check-out" value={formatDate(data.checkoutDate)} />
          <Row label="Duration"  value={`${nights} night${nights !== 1 ? "s" : ""}`} />
          <Row label="Mode" value={data.dateMode === "range" ? "Check-in / Check-out range" : "Specific nights"} />
        </Section>

        {/* Rooms */}
        <Section title={`Selected Room${data.selectedRooms.length > 1 ? "s" : ""}`}>
          {data.selectedRooms.map(r => (
            <div key={r.roomId} className="py-3 border-b border-gray-50 last:border-0">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-semibold text-stone-800">Room {r.roomNumber}</p>
                  <p className="text-[10px] uppercase tracking-widest text-amber-600 font-bold">{r.standard}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-stone-900">${(r.price * nights).toLocaleString()}</p>
                  <p className="text-[10px] text-gray-400">${r.price}/night × {nights}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="py-3 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Estimated Total</span>
            <span className="text-xl font-bold text-stone-900">${totalCost.toLocaleString()} <span className="text-xs text-gray-400 font-normal">USD</span></span>
          </div>
        </Section>

        {/* Guests */}
        <Section title="Guest Details">
          <Row label="Name"     value={data.guestName} />
          <Row label="Email"    value={data.guestEmail} />
          <Row label="Phone"    value={data.guestPhone} />
          <Row label="Adults"   value={data.adultsNo} />
          <Row label="Children" value={data.kidsNo} />
        </Section>

        {/* Experiences/Offers */}
        {(data.selectedExperiences.length > 0 || data.selectedOffers.length > 0) && (
          <Section title="Interests Noted">
            {data.selectedExperiences.length > 0 && (
              <Row
                label="Experiences"
                value={<span className="flex flex-wrap gap-1 justify-end">{data.selectedExperiences.map(id => <span key={id} className="bg-amber-50 text-amber-700 text-[10px] px-2 py-0.5 rounded-sm border border-amber-200 font-medium">{id.replace(/-/g, " ")}</span>)}</span>}
              />
            )}
            {data.selectedOffers.length > 0 && (
              <Row
                label="Offers"
                value={<span className="flex flex-wrap gap-1 justify-end">{data.selectedOffers.map(id => <span key={id} className="bg-stone-100 text-stone-600 text-[10px] px-2 py-0.5 rounded-sm border border-gray-200 font-medium">{id.replace(/-/g, " ")}</span>)}</span>}
              />
            )}
          </Section>
        )}

        {/* Disclaimer */}
        <div className="bg-blue-50 border border-blue-100 rounded-sm p-4 text-xs text-blue-700 leading-relaxed">
          <p><span className="font-bold">Note:</span> This is a booking <span className="font-bold">request</span>. Our reservations team will contact you to confirm availability, discuss payment, and finalise all details. No charge is made at this stage.</p>
        </div>

        {/* Error */}
        <AnimatePresence>
          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-sm text-red-600 text-sm"
            >
              <AlertCircle className="w-5 h-5 shrink-0" /> {submitError}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between items-center">
        <button onClick={onPrev} disabled={isSubmitting} className="flex items-center text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-amber-600 transition-colors disabled:opacity-30">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </button>
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="flex items-center gap-3 px-12 py-4 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-700 transition-all duration-300 shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
          ) : (
            <><CheckCircle2 className="w-4 h-4" /> Submit Booking Request</>
          )}
        </button>
      </div>
    </div>
  );
}
