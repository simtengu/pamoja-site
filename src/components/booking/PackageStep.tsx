"use client";

import { motion } from "framer-motion";
import { Check, Star, Clock, MapPin } from "lucide-react";
import { BookingData } from "@/types/booking";

interface StepProps {
  data: BookingData;
  onUpdate: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onPrev: () => void;
}

const packages = [
  {
    id: "pkg-1",
    name: "Classic Migration Journey",
    duration: "7 Days",
    highlights: ["Serengeti Plains", "Ngorongoro Crater", "Luxury Tents"],
    image: "/images/migration-1.jpeg",
    price: "From $3,500pp"
  },
  {
    id: "pkg-2",
    name: "Luxury Highlands Retreat",
    duration: "5 Days",
    highlights: ["Karatu Highland", "Coffee Farm Tour", "Manayra Views"],
    image: "/images/pamoja-villa-1.jpeg",
    price: "From $2,800pp"
  },
  {
    id: "pkg-3",
    name: "Ultimate Wild Adventure",
    duration: "10 Days",
    highlights: ["Tarangire Elephants", "Serengeti Crossing", "Big Five Tracking"],
    image: "/images/serengeti-1.jpeg",
    price: "From $5,200pp"
  }
];

export default function PackageStep({ data, onUpdate, onNext, onPrev }: StepProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-10 text-center sm:text-left">
        <h2 className="text-3xl font-serif text-safari-dark mb-2">Featured Safari Packages</h2>
        <p className="text-gray-500 font-light">Choose a pre-designed itinerary or skip to request a custom plan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {packages.map((pkg) => {
          const isSelected = data.selectedPackageId === pkg.id;

          return (
            <motion.div
              key={pkg.id}
              whileHover={{ y: -5 }}
              onClick={() => onUpdate({ selectedPackageId: pkg.id })}
              className={`flex flex-col rounded-sm overflow-hidden transition-all duration-300 border-2 cursor-pointer group
                ${isSelected 
                  ? "bg-safari-dark border-safari-gold shadow-2xl" 
                  : "bg-white border-gray-100 hover:border-safari-accent hover:shadow-lg"}
              `}
            >
              <div className="h-40 w-full relative">
                <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover" />
                <div className={`absolute inset-0 bg-safari-dark/20 ${isSelected ? "opacity-40" : "opacity-0 group-hover:opacity-40"} transition-opacity`}></div>
                {isSelected && (
                  <div className="absolute top-4 right-4 bg-safari-gold text-white p-1 rounded-full">
                    <Check className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-safari-gold mb-2">
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                  <Star className="w-3 h-3 fill-current" />
                </div>
                <h3 className={`text-lg font-serif mb-4 leading-tight ${isSelected ? "text-white" : "text-safari-dark"}`}>
                  {pkg.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="w-3 h-3 mr-2" /> {pkg.duration}
                  </div>
                  <ul className="space-y-1">
                    {pkg.highlights.map(h => (
                      <li key={h} className={`text-xs font-light flex items-center ${isSelected ? "text-gray-300" : "text-gray-500"}`}>
                        <span className="w-1 h-1 bg-safari-gold rounded-full mr-2"></span> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 border-opacity-10 flex justify-between items-center">
                  <span className={`font-bold ${isSelected ? "text-white" : "text-safari-dark"}`}>{pkg.price}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-auto flex justify-between">
        <button
          onClick={onPrev}
          className="px-8 py-4 uppercase font-bold text-xs tracking-widest text-safari-dark hover:text-safari-gold transition-colors"
        >
          Back
        </button>
        <div className="flex gap-4">
          <button
            onClick={() => {
              onUpdate({ selectedPackageId: undefined });
              onNext();
            }}
            className="px-8 py-5 uppercase font-bold text-xs tracking-widest text-gray-400 hover:text-safari-dark transition-colors"
          >
            Skip for now
          </button>
          <button
            onClick={onNext}
            className="px-12 py-5 uppercase font-bold text-sm tracking-widest transition-all duration-300 rounded-sm shadow-xl bg-safari-dark text-white hover:bg-safari-gold"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
