"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BedDouble, Users, DollarSign, ChevronLeft, ChevronRight, Loader2, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import { BookingData, SelectedRoom } from "@/types/booking";
import { Room } from "@/types/room";
import { fetchRoomsForProperty, fetchBookedRoomIdsForDates } from "@/lib/api/bookingService";

interface Props {
  data: BookingData;
  onUpdate: (d: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function RoomsStep({ data, onUpdate, onNext, onPrev }: Props) {
  const [allRooms, setAllRooms] = useState<Room[]>([]);
  const [bookedMap, setBookedMap] = useState<Record<string, Set<string>>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDateTab, setActiveDateTab] = useState<string>(data.selectedDates[0] ?? "");

  const load = useCallback(async () => {
    if (!data.propertyId || data.selectedDates.length === 0) return;
    setLoading(true);
    setError(null);
    try {
      const [rooms, booked] = await Promise.all([
        fetchRoomsForProperty(data.propertyId),
        fetchBookedRoomIdsForDates(data.propertyId, data.selectedDates),
      ]);
      setAllRooms(rooms);
      setBookedMap(booked);
      setActiveDateTab(data.selectedDates[0]);
    } catch (err: any) {
      console.error("Error loading rooms:", err);
      setError(`Failed to load room availability: ${err?.message || "Unknown error"}. Please check your Firestore indexes.`);
    } finally {
      setLoading(false);
    }
  }, [data.propertyId, data.selectedDates]);

  useEffect(() => { load(); }, [load]);

  // Rooms available on the active date tab
  const availableOnDate = allRooms.filter(
    r => !bookedMap[activeDateTab]?.has(r.id ?? "")
  );

  const isSelected = (roomId: string) =>
    data.selectedRooms.some(r => r.roomId === roomId);

  const toggleRoom = (room: Room) => {
    if (!room.id) return;
    const alreadySelected = isSelected(room.id);
    if (alreadySelected) {
      onUpdate({ selectedRooms: data.selectedRooms.filter(r => r.roomId !== room.id) });
    } else {
      const sr: SelectedRoom = {
        roomId: room.id,
        roomNumber: room.number,
        standard: room.standard,
        type: room.type,
        price: Number(room.price),
        photo: room.photos?.[0] ?? "",
      };
      onUpdate({ selectedRooms: [...data.selectedRooms, sr] });
    }
  };

  const formatDate = (ymd: string) =>
    new Date(ymd + "T00:00:00Z").toLocaleDateString("en-GB", {
      weekday: "short", day: "numeric", month: "short",
    });

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <span className="text-amber-600 font-bold uppercase tracking-[0.2em] text-xs block mb-2">Step 3 of 6</span>
          <h2 className="text-3xl font-serif text-stone-900 mb-1">Select Your Room{data.selectedDates.length > 1 ? "s" : ""}</h2>
          <p className="text-gray-400 text-sm">
            {data.selectedDates.length} night{data.selectedDates.length > 1 ? "s" : ""} · {data.propertyName}
          </p>
        </div>

        {data.propertyId && data.selectedDates.length > 0 && (
          <button
            onClick={() => load()}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-sm text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:border-amber-400 hover:text-amber-600 transition-all duration-300 disabled:opacity-50"
          >
            <Loader2 className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            {loading ? "Refreshing..." : "Refresh Availability"}
          </button>
        )}
      </div>

      {/* Date Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 hide-scrollbar">
        {data.selectedDates.map((d) => {
          const bookedOnDate = bookedMap[d]?.size ?? 0;
          const totalRooms = allRooms.length;
          const avail = totalRooms - bookedOnDate;
          return (
            <button
              key={d}
              onClick={() => setActiveDateTab(d)}
              className={`shrink-0 px-4 py-2.5 rounded-sm border text-xs font-bold uppercase tracking-widest transition-all duration-200
                ${activeDateTab === d
                  ? "bg-stone-900 text-white border-stone-900"
                  : "bg-white text-gray-500 border-gray-200 hover:border-amber-300 hover:text-stone-700"}`}
            >
              <span className="block">{formatDate(d)}</span>
              {!loading && (
                <span className={`block text-[9px] mt-0.5 font-semibold ${avail === 0 ? "text-red-400" : "text-amber-400"}`}>
                  {avail} available
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <Loader2 className="w-8 h-8 animate-spin mb-3 text-amber-600" />
          <p className="text-sm font-medium">Checking availability…</p>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-sm text-red-600 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" /> {error}
        </div>
      )}

      {!loading && !error && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDateTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {availableOnDate.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <XCircle className="w-12 h-12 text-red-300 mb-4" />
                <p className="text-stone-700 font-serif text-xl mb-2">No Rooms Available</p>
                <p className="text-gray-400 text-sm max-w-xs">
                  There are no available rooms on {formatDate(activeDateTab)}. Try different dates.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {availableOnDate.map((room, i) => {
                  const sel = isSelected(room.id ?? "");
                  return (
                    <motion.div
                      key={room.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => toggleRoom(room)}
                      className={`group relative cursor-pointer rounded-sm overflow-hidden border-2 transition-all duration-300 shadow-sm
                        ${sel ? "border-amber-600 shadow-amber-100 shadow-lg" : "border-gray-100 hover:border-amber-200 hover:shadow-md"}`}
                    >
                      {/* Image */}
                      <div className="relative h-36 overflow-hidden">
                        <img
                          src={room.photos?.[0] ?? "/images/placeholder.jpg"}
                          alt={room.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        {/* Room number badge */}
                        <span className="absolute bottom-2 left-3 text-white text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm px-2 py-1 rounded-sm">
                          Room {room.number}
                        </span>
                        {sel && (
                          <div className="absolute top-2 right-2 bg-amber-600 text-white rounded-full p-0.5">
                            <CheckCircle2 className="w-5 h-5" />
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-3 bg-white">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div>
                            <p className="font-serif text-stone-900 text-sm font-semibold leading-tight">{room.name}</p>
                            <p className="text-[10px] uppercase tracking-widest text-amber-600 font-bold mt-0.5">{room.standard}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <p className="text-stone-900 font-bold text-sm">${Number(room.price).toLocaleString()}</p>
                            <p className="text-gray-400 text-[10px]">/night</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-gray-400 text-[11px] font-medium">
                          <span className="flex items-center gap-1"><BedDouble className="w-3 h-3" /> {room.beds} bed{Number(room.beds) > 1 ? "s" : ""}</span>
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> Up to {room.numberOfPeople}</span>
                        </div>
                      </div>

                      {/* Select indicator */}
                      <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${sel ? "bg-amber-600" : "bg-transparent"}`} />
                    </motion.div>
                  );
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Selected summary strip */}
      {data.selectedRooms.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-sm"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
            {data.selectedRooms.length} room{data.selectedRooms.length > 1 ? "s" : ""} selected
          </p>
          <div className="flex flex-wrap gap-2">
            {data.selectedRooms.map(r => (
              <span key={r.roomId} className="flex items-center gap-1.5 bg-white border border-amber-200 text-stone-700 text-xs px-3 py-1.5 rounded-sm font-medium">
                <DollarSign className="w-3 h-3 text-amber-600" />
                Room {r.roomNumber} · ${r.price}/night
                <button
                  onClick={(e) => { e.stopPropagation(); onUpdate({ selectedRooms: data.selectedRooms.filter(x => x.roomId !== r.roomId) }); }}
                  className="ml-1 text-gray-300 hover:text-red-400 transition-colors"
                >×</button>
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <div className="mt-10 flex justify-between items-center">
        <button onClick={onPrev} className="flex items-center text-gray-500 font-bold uppercase text-xs tracking-widest hover:text-amber-600 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </button>
        <button
          onClick={onNext}
          disabled={data.selectedRooms.length === 0}
          className="px-10 py-4 bg-stone-900 text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-amber-600 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
