"use client";

import { Utensils, Coffee, Sun } from "lucide-react";
import { detailedAmenities } from "@/data/amenities";

export default function PropertyDining({ propertyId }: { propertyId?: string }) {
  const propertyData = detailedAmenities.find(d => d.propertyId === propertyId);
  const diningImage = propertyData?.culinaryImage || "/images/dining.jpeg";

  return (
    <div className="border-t border-gray-100 pt-16">
      <h2 className="text-3xl font-serif text-safari-dark mb-10 flex items-center">
        Culinary & Service <Utensils className="ml-3 mt-1 text-safari-accent" />
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-12 bg-safari-dark text-white p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden">
        
        {/* Decorative background circle */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-safari-gold opacity-10 rounded-full blur-3xl"></div>

        <div className="w-full lg:w-1/2 relative space-y-6 z-10">
          
          <div className="flex items-start">
            <div className="bg-safari-gold/20 p-3 rounded-full mr-4 text-safari-gold">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Morning Delights</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Begin your day with a vibrant selection of freshly brewed coffee, tropical fruits, and hearty breakfast options, thoughtfully prepared to energize you for the adventures ahead.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-safari-gold/20 p-3 rounded-full mr-4 text-safari-gold">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Exceptional Cuisine</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Savor a fusion of local flavors and international dishes curated by talented chefs. Each meal is crafted with fresh ingredients, offering a culinary experience as memorable as your surroundings.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-safari-gold/20 p-3 rounded-full mr-4 text-safari-gold">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">Warm Hospitality & Service</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Experience genuine, attentive service from the moment you arrive. Whether it's a refreshing sundowner after a long day or a personalized dining setup, every detail is handled with care.
              </p>
            </div>
          </div>

        </div>

        <div className="w-full lg:w-1/2 relative z-10 group rounded-sm overflow-hidden h-64 lg:h-auto">
          <img 
            src={diningImage} 
            alt="Property Culinary Experience" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/dining.jpeg";
            }}
          />
        </div>

      </div>
    </div>
  );
}
