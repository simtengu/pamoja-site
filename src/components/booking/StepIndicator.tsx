"use client";

import { motion } from "framer-motion";
import { 
  Compass, 
  Calendar, 
  MapPin, 
  Package, 
  User, 
  CheckCircle2 
} from "lucide-react";

interface StepIndicatorProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

const steps = [
  { icon: <Compass className="w-5 h-5" />, label: "Type" },
  { icon: <Calendar className="w-5 h-5" />, label: "Dates" },
  { icon: <MapPin className="w-5 h-5" />, label: "Details" },
  { icon: <Package className="w-5 h-5" />, label: "Packages" },
  { icon: <User className="w-5 h-5" />, label: "Personal" },
  { icon: <CheckCircle2 className="w-5 h-5" />, label: "Review" }
];

export default function StepIndicator({ currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="w-full relative px-2 sm:px-6">
      {/* Background Line */}
      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0 hidden sm:block"></div>
      
      {/* Progress Line */}
      <motion.div 
        initial={{ width: "0%" }}
        animate={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        className="absolute top-1/2 left-0 h-[2px] bg-safari-gold -translate-y-1/2 z-0 hidden sm:block transition-all duration-500 ease-out"
      />

      <div className="relative z-10 flex justify-between items-center">
        {steps.map((step, idx) => {
          const stepNum = idx + 1;
          const isActive = currentStep === stepNum;
          const isCompleted = currentStep > stepNum;

          return (
            <div 
              key={stepNum} 
              className="flex flex-col items-center group"
            >
              <button
                onClick={() => onStepClick(stepNum)}
                disabled={!isCompleted && !isActive}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center transition-all duration-500 border-2 
                  ${isActive 
                    ? "bg-safari-dark border-safari-gold text-safari-gold scale-110 shadow-lg" 
                    : isCompleted 
                      ? "bg-safari-gold border-safari-gold text-white" 
                      : "bg-white border-gray-200 text-gray-400 cursor-not-allowed"}
                `}
              >
                <div className="transition-transform group-hover:scale-110 duration-300">
                  {step.icon}
                </div>
              </button>
              <span className={`mt-3 text-[10px] sm:text-xs font-bold uppercase tracking-widest hidden md:block
                ${isActive ? "text-safari-dark" : isCompleted ? "text-safari-gold" : "text-gray-400"}
              `}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
