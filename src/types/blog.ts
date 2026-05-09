import { Timestamp } from "firebase/firestore";

export interface BlogCategory {
  id: string;
  title: string;
  createdAt: Timestamp | string;
}

export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML markup from Quill
  categories: string[]; // Array of BlogCategory IDs
  isPublished: boolean;
  photos: string[];
  createdAt: Timestamp | string; // Assuming Timestamp from Firestore
  author?: string; // Will default to "Pamoja Africa" in UI
}
