"use client";

import { motion } from "framer-motion";
import { Check, Building2, CalendarDays, BedDouble, Sparkles, Users, ClipboardList } from "lucide-react";

const STEPS = [
  { label: "Property",    icon: Building2 },
  { label: "Dates",       icon: CalendarDays },
  { label: "Rooms",       icon: BedDouble },
  { label: "Experiences", icon: Sparkles },
  { label: "Guests",      icon: Users },
  { label: "Review",      icon: ClipboardList },
];

interface Props {
  currentStep: number;
  completedSteps: number[];
  onStepClick: (step: number) => void;
}

export default function StepIndicator({ currentStep, completedSteps, onStepClick }: Props) {
  return (
    <div className="w-full">
      {/* Desktop — horizontal */}
      <div className="hidden md:flex items-center justify-center gap-0">
        {STEPS.map((step, idx) => {
          const num = idx + 1;
          const isDone = completedSteps.includes(num);
          const isActive = currentStep === num;
          const canClick = num === 1 || completedSteps.includes(num - 1);
          const Icon = step.icon;

          return (
            <div key={num} className="flex items-center">
              <button
                onClick={() => canClick && onStepClick(num)}
                disabled={!canClick}
                className={`flex flex-col items-center group transition-all duration-300 ${canClick ? "cursor-pointer" : "cursor-default opacity-40"}`}
              >
                <div className={`relative w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300 shadow-sm
                  ${isActive  ? "border-amber-600 bg-amber-600 text-white shadow-amber-200 shadow-lg scale-110"
                  : isDone    ? "border-amber-600 bg-amber-600 text-white"
                              : "border-gray-300 bg-white text-gray-400"}`}
                >
                  {isDone && !isActive
                    ? <Check className="w-5 h-5 stroke-[2.5]" />
                    : <Icon className="w-5 h-5" />
                  }
                  {isActive && (
                    <motion.div
                      layoutId="step-ring"
                      className="absolute inset-[-4px] rounded-full border-2 border-amber-400/50"
                    />
                  )}
                </div>
                <span className={`mt-2 text-[10px] font-bold uppercase tracking-widest transition-colors duration-300
                  ${isActive ? "text-amber-700" : isDone ? "text-amber-600" : "text-gray-400"}`}>
                  {step.label}
                </span>
              </button>

              {/* Connector line */}
              {idx < STEPS.length - 1 && (
                <div className={`w-12 h-[2px] mx-1 transition-colors duration-500 ${completedSteps.includes(num) ? "bg-amber-600" : "bg-gray-200"}`} />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile — compact pill */}
      <div className="flex md:hidden items-center justify-center">
        <div className="bg-white rounded-full shadow-md px-5 py-3 flex items-center gap-3">
          {STEPS.map((_, idx) => {
            const num = idx + 1;
            const isDone = completedSteps.includes(num);
            const isActive = currentStep === num;
            return (
              <div
                key={num}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${isActive ? "bg-amber-600 scale-125" : isDone ? "bg-amber-400" : "bg-gray-200"}`}
              />
            );
          })}
          <span className="text-xs font-bold text-gray-500 ml-1">
            {currentStep} / {STEPS.length} — {STEPS[currentStep - 1].label}
          </span>
        </div>
      </div>
    </div>
  );
}
