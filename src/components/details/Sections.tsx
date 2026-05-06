"use client";

import { 
  Wifi, Snowflake, Tv, ShieldCheck, Speaker, Camera, 
  CheckCircle, Bath, Clock, MapPin, Map 
} from "lucide-react";

import { Property } from "@/types/property";

export function PropertyOverview({ property }: { property?: Property }) {
  if (!property) return null;
  
  return (
    <div className="pt-2">
      <h2 className="text-3xl font-serif text-safari-dark mb-6">Overview</h2>
      {property.description ? (
        <div 
          className="text-gray-600 font-light leading-relaxed text-lg mb-6 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: property.description }}
        />
      ) : (
        <p className="text-gray-600 font-light leading-relaxed text-lg mb-6">
          {property.slogan || "Experience unparalleled luxury in the heart of nature."}
        </p>
      )}
    </div>
  );
}

import { detailedAmenities } from "@/data/amenities";

export function PropertyAmenities({ property }: { property?: Property }) {
  if (!property?.id) return null;

  const data = detailedAmenities.find(d => d.propertyId === property.id);
  
  if (!data || !data.amenities || data.amenities.length === 0) {
    return null;
  }

  return (
    <div className="border-t border-gray-100 pt-16">
      <h2 className="text-3xl font-serif text-safari-dark mb-10">Amenities & Facilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.amenities.map((amenity, idx) => (
          <div 
            key={idx} 
            className="relative aspect-square overflow-hidden group rounded-sm shadow-lg bg-safari-dark"
            data-aos="fade-up"
            data-aos-delay={idx * 50}
          >
             <img 
               src={amenity.image} 
               alt={amenity.title}
               className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 ease-in-out"
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "/images/placeholder.jpeg";
               }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/90 via-safari-dark/40 to-transparent" />
             <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-serif text-white mb-3 tracking-wide">{amenity.title}</h3>
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed line-clamp-3">
                  {amenity.description}
                </p>
             </div>
             
             {/* Decorative border */}
             <div className="absolute inset-4 border border-white/10 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PropertyRules() {
  return (
    <div className="border-t border-gray-100 pt-16">
      <h2 className="text-3xl font-serif text-safari-dark mb-10">Booking Guidelines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-safari-light p-8 rounded-sm">
          <h3 className="text-xl font-serif text-safari-dark mb-6">Check In</h3>
          <ul className="space-y-4 text-gray-600 font-light text-sm">
            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-safari-accent mr-3 mt-1 flex-shrink-0" /> Check-in from 2:00 PM</li>
            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-safari-accent mr-3 mt-1 flex-shrink-0" /> Early check-in subject to availability</li>
            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-safari-accent mr-3 mt-1 flex-shrink-0" /> Minimum age to check-in is 18 years</li>
          </ul>
        </div>
        <div className="bg-safari-light p-8 rounded-sm">
          <h3 className="text-xl font-serif text-safari-dark mb-6">Check Out</h3>
          <ul className="space-y-4 text-gray-600 font-light text-sm">
            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-safari-gold mr-3 mt-1 flex-shrink-0" /> Check-out strictly before 11:00 AM</li>
            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-safari-gold mr-3 mt-1 flex-shrink-0" /> Express check-out available</li>
            <li className="flex items-start"><CheckCircle className="w-4 h-4 text-safari-gold mr-3 mt-1 flex-shrink-0" /> Baggage storage available at reception</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("../contact/MapClient"), { 
  ssr: false, 
  loading: () => <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 font-serif italic uppercase tracking-widest">Initialising Map Engine...</div> 
});

export function PropertyLocationMap({ property }: { property?: Property }) {
  const locationText = property?.address || property?.region || "Tanzania";
  
  return (
    <div className="border-t border-gray-100 pt-16">
      <h2 className="text-3xl font-serif text-safari-dark mb-10 flex items-center">
        Location <MapPin className="ml-3 mt-1 text-safari-accent" />
      </h2>
      <div className="w-full h-[500px] bg-gray-100 relative overflow-hidden rounded-sm border border-gray-200 shadow-inner group">
        {/* Interactive Map Component */}
        <div className="absolute inset-0 z-10 grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out">
          <InteractiveMap />
        </div>
        
        {/* Location Label Overlay */}
        <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 shadow-xl z-20 rounded-sm border border-safari-gold/20 pointer-events-none">
          <p className="text-xl font-serif text-safari-dark font-bold tracking-wider flex items-center mb-1">
            <Map className="w-5 h-5 mr-2 text-safari-gold" /> {locationText}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-safari-accent">
            {property?.region || "Pamoja Africa"}
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 gap-4">
        <p className="text-gray-500 font-light text-sm italic">
          * Map view indicates the general area of the property.
        </p>
        {property?.mapLink && (
          <a href={property.mapLink} target="_blank" rel="noopener noreferrer" className="text-safari-dark font-bold uppercase tracking-widest text-xs hover:text-safari-gold transition-colors flex items-center">
            Get Driving Directions <CheckCircle className="w-4 h-4 ml-2" />
          </a>
        )}
      </div>
    </div>
  );
}
