"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepIndicator from "@/components/booking/StepIndicator";
import BookingTypeStep from "@/components/booking/BookingTypeStep";
import CalendarStep from "@/components/booking/CalendarStep";
import DetailsStep from "@/components/booking/DetailsStep";
import PackageStep from "@/components/booking/PackageStep";
import PersonalStep from "@/components/booking/PersonalStep";
import ReviewStep from "@/components/booking/ReviewStep";
import SummarySidebar from "@/components/booking/SummarySidebar";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BookingPage() {
  const { 
    currentStep, 
    formData, 
    updateFormData, 
    nextStep, 
    prevStep, 
    goToStep 
  } = useBookingForm();

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <BookingTypeStep data={formData} onUpdate={updateFormData} onNext={nextStep} />;
      case 2: return <CalendarStep data={formData} onUpdate={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 3: return <DetailsStep data={formData} onUpdate={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 4: return <PackageStep data={formData} onUpdate={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 5: return <PersonalStep data={formData} onUpdate={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 6: return <ReviewStep data={formData} onNext={nextStep} onPrev={prevStep} />;
      default: return null;
    }
  };

  return (
    <main className="min-h-screen bg-safari-light pb-16">
      {/* Small Dark Hero Section for Navbar Contrast */}
      <div className="relative h-[45vh] w-full overflow-hidden bg-safari-dark">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src="/images/tarangire-1.jpeg"
            alt="Pamoja Africa Booking"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-safari-light/5"></div>
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto pt-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-safari-gold tracking-[0.3em] font-bold uppercase text-xs md:text-sm mb-4"
          >
            Start Your Adventure
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight"
          >
            Plan Your Tanzanian Journey
          </motion.h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-20">

        <StepIndicator currentStep={currentStep} onStepClick={goToStep} />

        <div className="flex flex-col lg:flex-row gap-8 items-start mt-12">
          
          {/* Main Form Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-sm shadow-xl p-6 md:p-10 min-h-[500px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons (shown if not handled internally by steps) */}
            <div className="mt-8 flex justify-between items-center">
              {currentStep > 1 && (
                <button 
                  onClick={prevStep}
                  className="flex items-center text-safari-dark font-bold uppercase text-xs tracking-widest hover:text-safari-gold transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" /> Back
                </button>
              )}
              {/* Note: Next buttons are mostly inside steps for validation, 
                  but we could put a general one here if step is valid */}
            </div>
          </div>

          {/* Real-time Summary Sidebar */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <SummarySidebar data={formData} currentStep={currentStep} />
          </div>

        </div>
      </div>
    </main>
  );
}
