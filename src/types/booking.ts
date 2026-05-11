// ─── Selected Room (used in form state) ────────────────────────────────────
export interface SelectedRoom {
  roomId: string;
  roomNumber: string;
  standard: string;
  type: string;
  price: number;         // numeric price per night
  photo: string;
}

// ─── Main Booking Form State ────────────────────────────────────────────────
export interface BookingData {
  // Step 1 — Property
  propertyId: string;
  propertyName: string;
  propertyPhoto: string;

  // Step 2 — Dates
  dateMode: "range" | "specific";
  selectedDates: string[];   // YYYY-MM-DD strings (nights only, not checkout)
  checkinDate: string;       // first date in selectedDates
  checkoutDate: string;      // day AFTER last date in selectedDates

  // Step 3 — Rooms
  selectedRooms: SelectedRoom[];

  // Step 4 — Experiences & Offers (optional, informational)
  selectedExperiences: string[];   // experience IDs
  selectedOffers: string[];        // offer IDs

  // Step 5 — Guest Details
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  adultsNo: number;
  kidsNo: number;
}

// ─── Initial State ──────────────────────────────────────────────────────────
export const initialBookingData: BookingData = {
  propertyId: "",
  propertyName: "",
  propertyPhoto: "",

  dateMode: "range",
  selectedDates: [],
  checkinDate: "",
  checkoutDate: "",

  selectedRooms: [],

  selectedExperiences: [],
  selectedOffers: [],

  guestName: "",
  guestEmail: "",
  guestPhone: "",
  adultsNo: 2,
  kidsNo: 0,
};
