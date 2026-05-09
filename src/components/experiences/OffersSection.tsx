"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const offers = [
  {
    id: "stay-longer",
    title: "Stay Longer, Explore Deeper",
    badge: "Most Popular",
    description: "Immerse yourself in the Tanzanian wild. Book 5 nights or more at any of our luxury lodges and receive an exclusive 10% discount on your entire stay.",
    validity: "Valid until Dec 31, 2026",
    benefits: ["Best price guaranteed", "Welcome drink on arrival", "Flexible cancellation"],
    image: "/images/serengeti-1.jpeg"
  },
  {
    id: "safari-day-trip",
    title: "Safari Discovery Bonus",
    badge: "Exclusive",
    description: "Book a 7-day stay and receive a complimentary private day trip to Lake Manyara or Arusha National Park for your entire group.",
    validity: "Year-Round",
    benefits: ["Private expert guide", "Gourmet picnic lunch", "All entrance fees included"],
    image: "/images/experiences/safari-discovery-bonus.jpg"
  },
  {
    id: "honeymoon-bush-dinner",
    title: "Romantic Bush Experience",
    badge: "Honeymooners",
    description: "Celebrate your love under the African stars. All honeymoon bookings of 3+ nights include a complimentary private sunset bush dinner in a remote location.",
    validity: "Seasonal (June - Oct)",
    benefits: ["Bottle of premium wine", "Maasai sunset cocktail", "Private waiter service"],
    image: "/images/experiences/bush-experience.jpg"
  },
  {
    id: "early-bird-adventure",
    title: "Early Bird Safari Special",
    badge: "Early Purchase",
    description: "Plan your dream stay in advance and save. Book your stay 6 months or more before arrival to enjoy a 15% early purchase discount.",
    validity: "Valid for all 2026 stays",
    benefits: ["Secure your preferred dates", "Best room allocation", "Complimentary airport transfer"],
    image: "/images/migration-1.jpeg"
  }
];

export default function OffersSection() {
  return (
    <section className="bg-safari-light py-24 px-4">
      <div className="max-w-7xl mx-auto space-y-24">
        
        <div className="text-center mb-16">
          <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
            Exclusive Value
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">
            Special Offers
          </h2>
        </div>

        <div className="space-y-24">
          {offers.map((offer, index) => (
            <motion.div 
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row-reverse bg-white shadow-2xl rounded-sm overflow-hidden group"
            >
              {/* Image Block */}
              <div className="w-full lg:w-1/2 relative h-[350px] lg:h-auto overflow-hidden">
                <img 
                  src={offer.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" 
                  alt={offer.title} 
                />
                <div className="absolute top-6 left-6 bg-safari-gold text-white text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-sm">
                  {offer.badge}
                </div>
              </div>

              {/* Content Block */}
              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif text-safari-dark mb-6">{offer.title}</h3>
                <p className="text-gray-600 font-light text-lg mb-8 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="space-y-4 mb-10">
                  {offer.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center text-sm text-safari-dark font-medium">
                      <CheckCircle className="w-4 h-4 text-safari-gold mr-3" /> {benefit}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-6">
                  <div className="flex items-center text-xs text-gray-400 uppercase tracking-widest font-bold">
                    <Clock className="w-4 h-4 mr-2" /> {offer.validity}
                  </div>
                  <Link 
                    href="/booking" 
                    className="w-full sm:w-auto px-8 py-4 bg-safari-dark text-white hover:bg-safari-gold text-xs font-bold uppercase tracking-widest text-center transition-all rounded-sm shadow-xl"
                  >
                    Claim Offer
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
