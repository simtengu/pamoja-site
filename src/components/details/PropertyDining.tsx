"use client";

import { Utensils, Coffee, Sun } from "lucide-react";

export default function PropertyDining() {
  return (
    <div className="border-t border-gray-100 pt-16">
      <h2 className="text-3xl font-serif text-safari-dark mb-10 flex items-center">
        Dining & Culinary <Utensils className="ml-3 mt-1 text-safari-accent" />
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
              <h3 className="text-xl font-serif mb-2">Farm-to-Table Breakfast</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Start your day with freshly roasted single-origin coffee harvested right from our estate. Enjoy a full English breakfast or a tropical fruit spread overlooking the crater rim as the mist clears.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-safari-gold/20 p-3 rounded-full mr-4 text-safari-gold">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">The Plantation Restaurant</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Our executive chef crafts a daily changing four-course menu utilizing organic vegetables grown on-site. The open-air setting ensures you never miss a sound of the African night.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-safari-gold/20 p-3 rounded-full mr-4 text-safari-gold">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-serif mb-2">High Tea & Sundowners</h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                After a dusty game drive, relax by the crackling fire pit with traditional Swahili bitings, premium gin & tonics, and an assortment of sweet treats as you watch the sunset.
              </p>
            </div>
          </div>

        </div>

        <div className="w-full lg:w-1/2 relative z-10 group rounded-sm overflow-hidden h-64 lg:h-auto">
          <img 
            src="/images/dining.jpeg" 
            alt="Pamoja Farm Villa Dining" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s]"
          />
        </div>

      </div>
    </div>
  );
}
