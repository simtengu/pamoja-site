"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useBookingForm } from "@/hooks/useBookingForm";
import StepIndicator from "@/components/booking/StepIndicator";
import PropertyStep from "@/components/booking/PropertyStep";
import DateStep from "@/components/booking/DateStep";
import RoomsStep from "@/components/booking/RoomsStep";
import ExperiencesStep from "@/components/booking/ExperiencesStep";
import GuestStep from "@/components/booking/GuestStep";
import SummaryStep from "@/components/booking/SummaryStep";
import SummarySidebar from "@/components/booking/SummarySidebar";

export default function BookingPage() {
  const {
    currentStep,
    formData,
    completedSteps,
    isSubmitting,
    bookingId,
    submitError,
    updateFormData,
    nextStep,
    prevStep,
    goToStep,
    handleSubmit,
    resetForm,
  } = useBookingForm();

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <PropertyStep    data={formData} onUpdate={updateFormData} onNext={nextStep} />;
      case 2: return <DateStep        data={formData} onUpdate={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 3: return <RoomsStep       data={formData} onUpdate={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 4: return <ExperiencesStep data={formData} onUpdate={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 5: return <GuestStep       data={formData} onUpdate={updateFormData} onNext={nextStep} onPrev={prevStep} />;
      case 6: return (
        <SummaryStep
          data={formData}
          onPrev={prevStep}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          bookingId={bookingId}
          submitError={submitError}
          onReset={resetForm}
        />
      );
      default: return null;
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 pb-20">
      {/* Hero */}
      <div className="relative h-[42vh] w-full overflow-hidden bg-stone-900">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src="/images/tarangire-1.jpeg"
            alt="Pamoja Africa Booking"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-stone-50" />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-amber-400 tracking-[0.3em] font-bold uppercase text-xs mb-4 block"
          >
            Reserve Your Stay
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight"
          >
            Book Your Pamoja Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/60 text-sm max-w-sm font-light leading-relaxed"
          >
            A few simple steps and our team will take care of the rest.
          </motion.p>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="max-w-7xl mx-auto px-4 -mt-6 relative z-20">
        <div className="bg-white rounded-sm shadow-xl px-6 py-5 mb-8">
          <StepIndicator
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={goToStep}
          />
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Form Panel */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-sm shadow-xl p-6 md:p-10 min-h-[500px] relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  {renderStep()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <SummarySidebar data={formData} currentStep={currentStep} />
          </div>
        </div>
      </div>
    </main>
  );
}
