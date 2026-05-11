"use client";

import { useState, useEffect } from "react";
import { BookingData, initialBookingData } from "@/types/booking";
import { submitBooking } from "@/lib/api/bookingService";

const TOTAL_STEPS = 6;
const STORAGE_KEY = "pamoja_booking_v2";

export function useBookingForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>(initialBookingData);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ── Persist draft ──────────────────────────────────────────────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setFormData(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, [formData]);

  // ── Form helpers ───────────────────────────────────────────────────────────
  const updateFormData = (data: Partial<BookingData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCompletedSteps((prev) =>
        prev.includes(currentStep) ? prev : [...prev, currentStep]
      );
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const goToStep = (step: number) => {
    if (step === 1 || completedSteps.includes(step - 1)) {
      setCurrentStep(step);
    }
  };

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const id = await submitBooking(formData);
      setBookingId(id);
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error("Booking submit failed:", err);
      setSubmitError(
        "Something went wrong while submitting your booking. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData(initialBookingData);
    setCompletedSteps([]);
    setCurrentStep(1);
    setBookingId(null);
    setSubmitError(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
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
  };
}
