"use client";

import { Building2, CalendarDays, BedDouble, Users, DollarSign } from "lucide-react";
import { BookingData } from "@/types/booking";

interface Props {
  data: BookingData;
  currentStep: number;
}

function SideRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-gray-50 last:border-0">
      <span className="text-amber-600 mt-0.5 shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
        <p className="text-xs font-semibold text-stone-800 leading-snug break-words">{value}</p>
      </div>
    </div>
  );
}

export default function SummarySidebar({ data, currentStep }: Props) {
  const nights = data.selectedDates.length;
  const total = data.selectedRooms.reduce((s, r) => s + r.price * nights, 0);

  const formatDate = (ymd: string) =>
    ymd ? new Date(ymd + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";

  const hasAnything = data.propertyName || data.checkinDate || data.selectedRooms.length > 0 || data.guestName;

  return (
    <div className="bg-white border border-gray-100 rounded-sm shadow-md overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 bg-stone-900 text-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400 mb-0.5">Booking Summary</p>
        <p className="text-xs text-gray-300 font-light">Step {currentStep} of 6</p>
      </div>

      <div className="px-5 py-4">
        {!hasAnything && (
          <p className="text-xs text-gray-400 text-center py-6 leading-relaxed">
            Your booking summary will appear here as you fill in each step.
          </p>
        )}

        {/* Property */}
        {data.propertyName && (
          <SideRow
            icon={<Building2 className="w-4 h-4" />}
            label="Property"
            value={data.propertyName}
          />
        )}

        {/* Dates */}
        {data.checkinDate && (
          <SideRow
            icon={<CalendarDays className="w-4 h-4" />}
            label={data.dateMode === "range" ? "Check-in → Check-out" : `${nights} Night${nights !== 1 ? "s" : ""} Selected`}
            value={data.dateMode === "range"
              ? `${formatDate(data.checkinDate)} → ${formatDate(data.checkoutDate)}`
              : `${formatDate(data.checkinDate)} + ${nights - 1} more`}
          />
        )}

        {/* Rooms */}
        {data.selectedRooms.length > 0 && (
          <SideRow
            icon={<BedDouble className="w-4 h-4" />}
            label={`${data.selectedRooms.length} Room${data.selectedRooms.length > 1 ? "s" : ""}`}
            value={data.selectedRooms.map(r => `Room ${r.roomNumber} · $${r.price}/night`).join(", ")}
          />
        )}

        {/* Guests */}
        {data.guestName && (
          <SideRow
            icon={<Users className="w-4 h-4" />}
            label="Guest"
            value={`${data.guestName} · ${data.adultsNo} adult${data.adultsNo !== 1 ? "s" : ""}${data.kidsNo > 0 ? `, ${data.kidsNo} child${data.kidsNo !== 1 ? "ren" : ""}` : ""}`}
          />
        )}

        {/* Total */}
        {total > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400">
                <DollarSign className="w-4 h-4 text-amber-600" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Estimated Total</span>
              </div>
              <div className="text-right">
                <p className="font-bold text-stone-900 text-lg">${total.toLocaleString()}</p>
                <p className="text-[10px] text-gray-400">USD · {nights} night{nights !== 1 ? "s" : ""}</p>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 leading-relaxed">
              Final price confirmed after reservation team review.
            </p>
          </div>
        )}
      </div>

      {/* Progress dots */}
      <div className="px-5 pb-4 flex gap-1.5">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-500 ${
              i + 1 < currentStep ? "bg-amber-600"
              : i + 1 === currentStep ? "bg-amber-400"
              : "bg-gray-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
