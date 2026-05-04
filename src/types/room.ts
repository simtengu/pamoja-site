import { Timestamp } from "firebase/firestore";

export interface Room {
  id?: string;
  
  // Basic Info
  name: string;
  slug: string;

  // Relations
  propertyId: string;   // reference to property
  type: string;         // type ID
  standard: string;     // standard ID
  status: string;       // status ID

  // Room Details
  description: string;  // HTML content
  amenities: string[];

  beds: string;             // e.g. "2"
  extraBeds: string;        // e.g. "1"
  number: string;           // room number (e.g. "14")
  numberOfPeople: string;   // capacity

  // Pricing
  price: string;     // e.g. "700"
  kidPrice: string;  // e.g. "50"

  // Media
  photos: string[];

  // Status / Control
  isActive: boolean;
  isPublished: boolean;

  // Timestamps
  createdAt: Timestamp;
}
