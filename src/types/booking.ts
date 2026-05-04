export type BookingType = "accommodation" | "safari" | "custom" | "";

export interface BookingData {
  type: BookingType;
  checkIn: string;
  checkOut: string;
  guests: number;
  travelerType: string;
  
  // Safari specifics
  destinations: string[];
  duration: number;
  budget: string;
  
  // Custom specifics
  customNotes: string;
  
  // Package selection
  selectedPackageId?: string;
  
  // Personal Info
  fullName: string;
  email: string;
  phone: string;
}

export const initialBookingData: BookingData = {
  type: "",
  checkIn: "",
  checkOut: "",
  guests: 2,
  travelerType: "Couple",
  destinations: [],
  duration: 7,
  budget: "Luxury",
  customNotes: "",
  fullName: "",
  email: "",
  phone: "",
};
