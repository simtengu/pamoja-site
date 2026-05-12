"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CalendarDays, MousePointerClick, X } from "lucide-react";
import { BookingData } from "@/types/booking";

interface Props {
  data: BookingData;
  onUpdate: (d: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

// ── Helpers ─────────────────────────────────────────────────────────────────
const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function toYMD(d: Date) {
  return d.toISOString().slice(0, 10);
}

function getDatesInRange(start: string, end: string): string[] {
  if (!start || !end) return [];
  const result: string[] = [];
  const cur = new Date(start + "T00:00:00Z");
  const last = new Date(end + "T00:00:00Z");
  while (cur < last) {
    result.push(toYMD(cur));
    cur.setUTCDate(cur.getUTCDate() + 1);
  }
  return result;
}

function addDays(ymd: string, n: number): string {
  const d = new Date(ymd + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + n);
  return toYMD(d);
}

function buildCalendarMatrix(year: number, month: number) {
  const first = new Date(Date.UTC(year, month, 1));
  const rows: (string | null)[][] = [];
  let row: (string | null)[] = new Array(first.getUTCDay()).fill(null);
  const daysInMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  for (let d = 1; d <= daysInMonth; d++) {
    row.push(toYMD(new Date(Date.UTC(year, month, d))));
    if (row.length === 7) { rows.push(row); row = []; }
  }
  if (row.length > 0) { while (row.length < 7) row.push(null); rows.push(row); }
  return rows;
}

// ── Calendar Component ───────────────────────────────────────────────────────
interface CalendarProps {
  mode: "range" | "specific";
  rangeStart: string;
  rangeEnd: string;
  specificDates: Set<string>;
  onRangeStartChange: (d: string) => void;
  onRangeEndChange: (d: string) => void;
  onSpecificToggle: (d: string) => void;
}

function Calendar({ mode, rangeStart, rangeEnd, specificDates, onRangeStartChange, onRangeEndChange, onSpecificToggle }: CalendarProps) {
  const today = toYMD(new Date());
  const [viewYear, setViewYear] = useState(() => new Date().getFullYear());
  const [viewMonth, setViewMonth] = useState(() => new Date().getMonth());
  const [rangePhase, setRangePhase] = useState<"start" | "end">("start");

  const matrix = buildCalendarMatrix(viewYear, viewMonth);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  const handleDayClick = (day: string) => {
    if (day < today) return;
    if (mode === "specific") {
      onSpecificToggle(day);
    } else {
      if (rangePhase === "start") {
        onRangeStartChange(day);
        onRangeEndChange("");
        setRangePhase("end");
      } else {
        if (day <= rangeStart) {
          onRangeStartChange(day);
          onRangeEndChange("");
          setRangePhase("end");
        } else {
          onRangeEndChange(day);
          setRangePhase("start");
        }
      }
    }
  };

  const isInRange = (day: string) => rangeStart && rangeEnd && day > rangeStart && day < rangeEnd;
  const isRangeEnd = (day: string) => day === rangeEnd;
  const isRangeStart = (day: string) => day === rangeStart;
  const isSpecific = (day: string) => specificDates.has(day);
  const isPast = (day: string) => day < today;

  return (
    <div className="bg-white rounded-sm border border-gray-100 shadow-sm p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="p-2 hover:bg-amber-50 rounded-sm transition-colors">
          <ChevronLeft className="w-4 h-4 text-gray-500" />
        </button>
        <span className="font-serif text-stone-900 text-sm font-semibold">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>
        <button onClick={nextMonth} className="p-2 hover:bg-amber-50 rounded-sm transition-colors">
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 mb-2">
        {DAY_NAMES.map(d => (
          <div key={d} className="text-center text-[10px] font-bold uppercase tracking-widest text-gray-400 py-1">{d}</div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-y-1">
        {matrix.map((row, ri) =>
          row.map((day, ci) => {
            if (!day) return <div key={`${ri}-${ci}`} />;
            const past = isPast(day);
            const selectedRange = mode === "range" && (isRangeStart(day) || isRangeEnd(day));
            const inRange = mode === "range" && isInRange(day);
            const selected = mode === "specific" && isSpecific(day);
            const isToday = day === today;

            return (
              <button
                key={day}
                onClick={() => !past && handleDayClick(day)}
                disabled={past}
                className={`relative h-9 w-full flex items-center justify-center text-xs font-semibold transition-all duration-150 rounded-sm
                  ${past ? "text-gray-200 cursor-default"
                  : selectedRange ? "bg-amber-600 text-white shadow-md z-10"
                  : inRange ? "bg-amber-100 text-amber-800"
                  : selected ? "bg-amber-600 text-white shadow-md"
                  : isToday ? "border border-amber-400 text-amber-700 hover:bg-amber-50"
                  : "text-stone-700 hover:bg-amber-50 hover:text-amber-700"}`}
              >
                {day.slice(-2).replace(/^0/, "")}
                {isRangeEnd(day) && mode === "range" && (
                  <span className="absolute -top-1 -right-1 text-[8px] font-bold bg-stone-800 text-white px-0.5 rounded-sm leading-tight">out</span>
                )}
              </button>
            );
          })
        )}
      </div>

      {mode === "range" && rangePhase === "end" && !rangeEnd && (
        <p className="text-center text-xs text-amber-600 font-medium mt-3">Now select your check-out date</p>
      )}
    </div>
  );
}

// ── DateStep ─────────────────────────────────────────────────────────────────
export default function DateStep({ data, onUpdate, onNext, onPrev }: Props) {
  const [rangeStart, setRangeStart] = useState(data.checkinDate || "");
  const [rangeEnd, setRangeEnd] = useState(data.checkoutDate || "");
  const [specificSet, setSpecificSet] = useState<Set<string>>(
    () => new Set(data.selectedDates)
  );

  // Sync with props when they change (important for URL param initialization)
  useEffect(() => {
    if (data.checkinDate) setRangeStart(data.checkinDate);
    if (data.checkoutDate) setRangeEnd(data.checkoutDate);
    if (data.selectedDates.length > 0) setSpecificSet(new Set(data.selectedDates));
  }, [data.checkinDate, data.checkoutDate, data.selectedDates]);

  const mode = data.dateMode;

  const toggleSpecific = (day: string) => {
    setSpecificSet(prev => {
      const next = new Set(prev);
      next.has(day) ? next.delete(day) : next.add(day);
      return next;
    });
  };

  const computedDates: string[] = mode === "range"
    ? getDatesInRange(rangeStart, rangeEnd)
    : Array.from(specificSet).sort();

  const canProceed = computedDates.length > 0;

  const handleNext = () => {
    const sorted = computedDates;
    const checkin = sorted[0] ?? "";
    const checkout = mode === "range" ? rangeEnd : (sorted.length > 0 ? addDays(sorted[sorted.length - 1], 1) : "");
    onUpdate({
      selectedDates: sorted,
      checkinDate: checkin,
      checkoutDate: checkout,
      // Reset rooms on date change
      selectedRooms: [],
    });
    onNext();
  };

  return (
    <div>
      <div className="mb-8">
        <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-2">Step 2 of 6</span>
        <h2 className="text-3xl font-serif text-stone-900 mb-1">Select Your Dates</h2>
        <p className="text-gray-400 text-sm">
          Staying at: <span className="text-stone-700 font-semibold">{data.propertyName}</span>
        </p>
      </div>

      {/* Mode Toggle */}
      <div className="flex gap-3 mb-8">
        {(["range", "specific"] as const).map(m => (
          <button
            key={m}
            onClick={() => {
              onUpdate({ dateMode: m });
              setRangeStart(""); setRangeEnd("");
              setSpecificSet(new Set());
            }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 border-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300
              ${mode === m ? "border-amber-600 bg-amber-600 text-white shadow-md" : "border-gray-200 text-gray-500 hover:border-amber-300"}`}
          >
            {m === "range" ? <><CalendarDays className="w-4 h-4" /> Check-in / Check-out</> : <><MousePointerClick className="w-4 h-4" /> Pick Specific Nights</>}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Calendar */}
        <Calendar
          mode={mode}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          specificDates={specificSet}
          onRangeStartChange={d => { setRangeStart(d); setRangeEnd(""); }}
          onRangeEndChange={setRangeEnd}
          onSpecificToggle={toggleSpecific}
        />

        {/* Selected dates summary */}
        <div className="bg-stone-50 border border-gray-100 rounded-sm p-5">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 border-b pb-3">
            {computedDates.length === 0 ? "No dates selected" : `${computedDates.length} night${computedDates.length > 1 ? "s" : ""} selected`}
          </p>

          <AnimatePresence>
            {computedDates.length === 0 && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-400 text-sm text-center py-8">
                {mode === "range" ? "Select a check-in and check-out date on the calendar." : "Click on any dates on the calendar to add them."}
              </motion.p>
            )}

            {computedDates.length > 0 && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2 max-h-64 overflow-y-auto pr-1">
                {computedDates.map((d, i) => (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: i * 0.03 }}
                    className="flex items-center justify-between bg-white border border-gray-100 rounded-sm px-3 py-2"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mr-2">
                        Night {i + 1}
                      </span>
                      <span className="text-sm font-medium text-stone-700">
                        {new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    {mode === "specific" && (
                      <button onClick={() => toggleSpecific(d)} className="text-gray-300 hover:text-red-400 transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {mode === "range" && rangeStart && rangeEnd && (
            <div className="mt-4 pt-4 border-t space-y-1">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Check-in</span>
                <span className="font-semibold text-stone-700">
                  {new Date(rangeStart + "T00:00:00Z").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
                </span>
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Check-out</span>
                <span className="font-semibold text-stone-700">
                  {new Date(rangeEnd + "T00:00:00Z").toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex justify-between items-center">
        <button onClick={onPrev} className="flex items-center text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-amber-600 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={!canProceed}
          className="px-10 py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-600 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        >
          Find Available Rooms
        </button>
      </div>
    </div>
  );
}
