import { Timestamp } from "firebase/firestore";

export interface Property {
  id: string;
  name: string;
  slug: string;

  address: string;
  region: string;
  zipCode: string;
  placeId: string;
  mapLink: string;

  description: string; // HTML content — used on details page
  minDescription?: string; // plain text brief — used on listing cards
  slogan: string;

  amenities: string[];
  categories?: string[];

  photos: string[]; // image URLs

  phoneNumbers: string[];
  emails: string[];

  socialMedia: {
    fb: string;
    ig: string;
    ttk: string;
    wsp: string;
    x: string;
  };

  isPublished: boolean;
  priority: number;
  youtubeId?: string; // Optional YouTube ID for property tour video

  createdAt: Timestamp;
}
