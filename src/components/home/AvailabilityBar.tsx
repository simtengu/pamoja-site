"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Users, ChevronDown } from "lucide-react";

export default function AvailabilityBar() {
  const router = useRouter();
  const [property, setProperty] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Adults, 0 Children");

  const properties = [
    "Pamoja Farm Villa (Karatu)",
    "Tarangire Luxury Hideaway",
    "Manyara Baobab Lodge",
    "Pamoja Serengeti Luxury Camp",
    "Pamoja Migration Camp",
    "Migration Undercanvas",
    "Pamoja Verdant Farm Villa (Arusha)"
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams({
      property,
      checkIn,
      checkOut,
      guests
    });
    router.push(`/booking?${queryParams.toString()}`);
  };

  return (
    <div className="relative -mt-24 z-30 px-4 max-w-7xl mx-auto w-full mb-16">
      <div className="bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden p-6 md:p-8 animate-[slideUp_1s_ease-out]">
        <h3 className="text-xl font-serif text-safari-dark mb-6 tracking-wide font-semibold text-center md:text-left">
          Check Availability
        </h3>
        
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Property Select */}
          <div className="relative flex flex-col justify-center border border-gray-200 rounded-sm p-3 hover:border-safari-accent transition-colors">
            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 flex items-center">
              <MapPin className="w-3 h-3 mr-1" /> Destination
            </label>
            <div className="relative">
              <select 
                value={property} 
                onChange={(e) => setProperty(e.target.value)}
                className="w-full text-sm text-safari-dark bg-transparent outline-none appearance-none cursor-pointer pr-5"
                required
              >
                <option value="" disabled>Select a lodge or camp</option>
                {properties.map(prop => (
                  <option key={prop} value={prop}>{prop}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Check-in */}
          <div className="relative flex flex-col justify-center border border-gray-200 rounded-sm p-3 hover:border-safari-accent transition-colors">
            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 flex items-center">
              <Calendar className="w-3 h-3 mr-1" /> Check In
            </label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm text-safari-dark bg-transparent outline-none cursor-pointer"
              required
            />
          </div>

          {/* Check-out */}
          <div className="relative flex flex-col justify-center border border-gray-200 rounded-sm p-3 hover:border-safari-accent transition-colors">
            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 flex items-center">
              <Calendar className="w-3 h-3 mr-1" /> Check Out
            </label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm text-safari-dark bg-transparent outline-none cursor-pointer"
              required
            />
          </div>

          {/* Guests */}
          <div className="relative flex flex-col justify-center border border-gray-200 rounded-sm p-3 hover:border-safari-accent transition-colors">
            <label className="text-xs uppercase text-gray-500 font-bold tracking-wider mb-1 flex items-center">
              <Users className="w-3 h-3 mr-1" /> Guests
            </label>
            <div className="relative">
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full text-sm text-safari-dark bg-transparent outline-none appearance-none cursor-pointer pr-5"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults, 0 Children">2 Adults, 0 Children</option>
                <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
                <option value="3+ Adults">3+ Adults</option>
                <option value="Group Booking">Group Booking</option>
              </select>
              <ChevronDown className="absolute right-0 top-1 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-end">
            <button 
              type="submit" 
              className="w-full h-[58px] bg-safari-dark text-white uppercase font-bold text-sm tracking-widest hover:bg-safari-gold transition-colors duration-300 rounded-sm"
            >
              Search
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
