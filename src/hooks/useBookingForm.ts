"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { BookingData, initialBookingData } from "@/types/booking";
import { submitBooking, fetchProperties } from "@/lib/api/bookingService";

const TOTAL_STEPS = 6;
const STORAGE_KEY = "pamoja_booking_v2";

export function useBookingForm() {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>(initialBookingData);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // ── Persist draft & Initialize from URL ──────────────────────────────────────
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      if (isInitialized) return;
      
      // 1. Try localStorage first
      let data = { ...initialBookingData };
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) data = JSON.parse(saved);
      } catch { /* ignore */ }

      // 2. Override with search params if present
      const propertyParam = searchParams.get("property");
      const checkInParam = searchParams.get("checkIn");
      const checkOutParam = searchParams.get("checkOut");
      const guestsParam = searchParams.get("guests");
      const experienceParam = searchParams.get("experience");
      const offerParam = searchParams.get("offer");

      const hasParams = !!(propertyParam || checkInParam || checkOutParam || guestsParam || experienceParam || offerParam);

      if (hasParams) {
        let initialStep = 1;

        // Experience / Offer Pre-selection
        if (experienceParam) {
          data.selectedExperiences = [experienceParam];
        }
        if (offerParam) {
          data.selectedOffers = [offerParam];
        }

        // Date Parsing
        if (checkInParam && checkOutParam) {
          const d1 = new Date(checkInParam + "T00:00:00Z");
          const d2 = new Date(checkOutParam + "T00:00:00Z");
          
          if (!isNaN(d1.getTime()) && !isNaN(d2.getTime())) {
            data.checkinDate = checkInParam;
            data.checkoutDate = checkOutParam;
            const dates = [];
            let curr = new Date(d1);
            while (curr < d2) {
              dates.push(curr.toISOString().split("T")[0]);
              curr.setUTCDate(curr.getUTCDate() + 1);
            }
            data.selectedDates = dates;
          }
        }

        // Guest Parsing
        if (guestsParam) {
          const g = guestsParam.toLowerCase();
          if (g.includes("1 adult")) data.adultsNo = 1;
          else if (g.includes("2 adults")) data.adultsNo = 2;
          else if (g.includes("3+ adults")) data.adultsNo = 3;
          
          if (g.includes("1 child")) data.kidsNo = 1;
          else if (g.includes("2 children")) data.kidsNo = 2;
          else data.kidsNo = 0;
        }

        // Property Matching
        if (propertyParam) {
          try {
            const properties = await fetchProperties();
            // Clean the param: "Pamoja Farm Villa (Karatu)" -> "pamoja farm villa"
            const cleanParam = propertyParam.split("(")[0].trim().toLowerCase();
            
            const matched = properties.find((p) => {
              const pName = p.name.toLowerCase().trim();
              return pName.includes(cleanParam) || cleanParam.includes(pName);
            });
            
            if (matched) {
              data.propertyId = matched.id;
              data.propertyName = matched.name;
              data.propertyPhoto = matched.photos?.[0] || "";
              initialStep = 2; // Advance to dates
              
              // If dates also matched, advance to rooms
              if (data.checkinDate && data.checkoutDate && data.selectedDates.length > 0) {
                initialStep = 3;
              }
            }
          } catch (err) {
            console.error("Param property match failed:", err);
          }
        }

        setFormData(data);
        setCurrentStep(initialStep);
        
        const completed: number[] = [];
        if (initialStep > 1) completed.push(1);
        if (initialStep > 2) completed.push(2);
        setCompletedSteps(completed);
      } else {
        setFormData(data);
      }
      setIsInitialized(true);
    };

    loadData();
  }, [searchParams, isInitialized]);

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
    // Client-side validation before submission
    if (!formData.propertyId)
      return setSubmitError("Please select a property before submitting.");
    if (formData.selectedDates.length === 0)
      return setSubmitError("Please select your stay dates before submitting.");
    if (formData.selectedRooms.length === 0)
      return setSubmitError("Please select at least one room before submitting.");
    if (!formData.guestName.trim())
      return setSubmitError("Guest name is required.");
    if (!formData.guestEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.guestEmail))
      return setSubmitError("A valid email address is required.");
    if (!formData.guestPhone.trim())
      return setSubmitError("Guest phone number is required.");

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const id = await submitBooking(formData);
      setBookingId(id);
      localStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      console.error("Booking submit failed:", err);
      setSubmitError(
        "Something went wrong while submitting your booking. Please try again or contact us directly."
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
