"use client";

import { useState, useEffect } from "react";
import { BookingData, initialBookingData } from "@/types/booking";

export function useBookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>(initialBookingData);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem("pamoja_booking_draft");
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load booking draft", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem("pamoja_booking_draft", JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (data: Partial<BookingData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCompletedSteps(prev => prev.includes(currentStep) ? prev : [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const goToStep = (step: number) => {
    if (step === 1 || completedSteps.includes(step - 1)) {
      setCurrentStep(step);
    }
  };

  const resetForm = () => {
    setFormData(initialBookingData);
    setCompletedSteps([]);
    setCurrentStep(1);
    localStorage.removeItem("pamoja_booking_draft");
  };

  return {
    currentStep,
    formData,
    completedSteps,
    updateFormData,
    nextStep,
    prevStep,
    goToStep,
    resetForm
  };
}
