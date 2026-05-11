import { Timestamp } from "firebase/firestore";

/** One document per room per night in the `booked-rooms` Firestore collection */
export interface BookedRoom {
  id?: string;
  roomId: string;
  bookingId: string;
  propertyId: string;
  dateBooked: Timestamp;   // the specific night this entry covers
  price: number;
  soldFor: number;
  bookedAs: string;        // room type, e.g. "double"
  description: string;
  extraBeds: number;
  guestIds: string[];
  hasDiscount: boolean;
  kidsNumber: number;
  adultsNumber: number;
}
