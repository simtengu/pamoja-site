import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { BookingData } from "@/types/booking";
import { Property } from "@/types/property";
import { Room } from "@/types/room";

// ─── Fetch all published properties ────────────────────────────────────────
export async function fetchProperties(): Promise<Property[]> {
  const q = query(
    collection(db, "properties"),
    where("isPublished", "==", true)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Property));
}

// ─── Fetch all rooms for a property ────────────────────────────────────────
export async function fetchRoomsForProperty(propertyId: string): Promise<Room[]> {
  const q = query(
    collection(db, "rooms"),
    where("propertyId", "==", propertyId),
    where("isActive", "==", true),
    where("isPublished", "==", true)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() } as Room));
}

// ─── Fetch booked-room IDs for selected dates ───────────────────────────────
// Returns a Set of roomIds that are already booked on ANY of the given dates
export async function fetchBookedRoomIdsForDates(
  propertyId: string,
  dates: string[]           // YYYY-MM-DD strings
): Promise<Record<string, Set<string>>> {
  // returns { "YYYY-MM-DD": Set<roomId> }
  const result: Record<string, Set<string>> = {};
  for (const date of dates) {
    result[date] = new Set<string>();
  }

  if (dates.length === 0) return result;

  // Convert date strings to Timestamp boundaries for each date
  // Using explicit UTC parsing to avoid timezone shifts
  const [startY, startM, startD] = dates[0].split("-").map(Number);
  const [endY, endM, endD] = dates[dates.length - 1].split("-").map(Number);
  
  const startTs = Timestamp.fromDate(new Date(Date.UTC(startY, startM - 1, startD, 0, 0, 0)));
  const endTs = Timestamp.fromDate(new Date(Date.UTC(endY, endM - 1, endD, 23, 59, 59)));

  const q = query(
    collection(db, "booked-rooms"),
    where("propertyId", "==", propertyId),
    where("dateBooked", ">=", startTs),
    where("dateBooked", "<=", endTs)
  );

  const snap = await getDocs(q);
  snap.docs.forEach((doc) => {
    const data = doc.data();
    const ts: Timestamp = data.dateBooked;
    // Convert back to YYYY-MM-DD (UTC)
    const d = ts.toDate();
    const key = d.toISOString().slice(0, 10);
    if (result[key]) {
      result[key].add(data.roomId);
    }
  });

  return result;
}

// ─── Submit Booking ─────────────────────────────────────────────────────────
export async function submitBooking(data: BookingData): Promise<string> {
  const nights = data.selectedDates.length;
  const totalCost = data.selectedRooms.reduce(
    (sum, room) => sum + room.price * nights,
    0
  );

  const experienceNotes =
    data.selectedExperiences.length > 0 || data.selectedOffers.length > 0
      ? `Experiences of interest: ${data.selectedExperiences.join(", ")}. Offers of interest: ${data.selectedOffers.join(", ")}.`
      : "";

  // 1 — Write to `bookings` collection
  const bookingRef = await addDoc(collection(db, "bookings"), {
    propertyId: data.propertyId,
    adultsNo: data.adultsNo,
    kidsNo: data.kidsNo,
    groupName: "",
    nights,
    guestNo: data.adultsNo + data.kidsNo,
    roomsNumber: data.selectedRooms.length,
    source: "website",
    status: "pending",
    customerId: "",
    totalCost,
    currency: "USD",
    paid: "",
    isPaymentCompleted: "false",
    checkinStatus: "not-checked",
    checkinDate: data.checkinDate,
    checkoutDate: data.checkoutDate,
    arrivalTime: "",
    departureTime: "",
    files: [],
    events: [],
    mealsPlan: [],
    createdAt: serverTimestamp(),
    bookingDescription: `Booking by ${data.guestName} (${data.guestEmail}, ${data.guestPhone}). ${experienceNotes}`.trim(),
    discount: 0,
    hasArrived: false,
    hasDiscount: false,
    isApproved: false,
  });

  const bookingId = bookingRef.id;

  // 2 — Write one `booked-rooms` doc per room per date
  const writes: Promise<void>[] = [];
  for (const room of data.selectedRooms) {
    for (const dateStr of data.selectedDates) {
      const [y, m, d] = dateStr.split("-").map(Number);
      const dateTs = Timestamp.fromDate(new Date(Date.UTC(y, m - 1, d, 12, 0, 0)));
      writes.push(
        addDoc(collection(db, "booked-rooms"), {
          roomId: room.roomId,
          bookingId,
          propertyId: data.propertyId,
          dateBooked: dateTs,
          price: room.price,
          soldFor: room.price,
          bookedAs: room.type,
          description: "",
          extraBeds: 0,
          guestIds: [],
          hasDiscount: false,
          kidsNumber: data.kidsNo,
          adultsNumber: data.adultsNo,
        }).then(() => undefined)
      );
    }
  }

  await Promise.all(writes);
  return bookingId;
}
