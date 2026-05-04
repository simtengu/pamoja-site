"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Gift, ShieldCheck, Star, ArrowRight } from "lucide-react";
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
    description: "Book a 7-day Safari & Trips package and receive a complimentary private day trip to Lake Manyara or Arusha National Park for your entire group.",
    validity: "Year-Round",
    benefits: ["Private expert guide", "Gourmet picnic lunch", "All entrance fees included"],
    image: "/images/tarangire-3.jpeg"
  },
  {
    id: "honeymoon-bush-dinner",
    title: "Romantic Bush Experience",
    badge: "Honeymooners",
    description: "Celebrate your love under the African stars. All honeymoon bookings of 3+ nights include a complimentary private sunset bush dinner in a remote location.",
    validity: "Seasonal (June - Oct)",
    benefits: ["Bottle of premium wine", "Maasai sunset cocktail", "Private waiter service"],
    image: "/images/pamoja-villa-1.jpeg"
  },
  {
    id: "early-bird-adventure",
    title: "Early Bird Safari Special",
    badge: "Early Purchase",
    description: "Plan your dream safari in advance and save. Book your stay 6 months or more before arrival to enjoy a 15% early purchase discount.",
    validity: "Valid for all 2026 stays",
    benefits: ["Secure your preferred dates", "Best room allocation", "Complimentary airport transfer"],
    image: "/images/migration-1.jpeg"
  }
];

const bookDirectBenefits = [
  { icon: <Star className="w-6 h-6 text-safari-gold" />, title: "Best Rate Guarantee", desc: "You'll always find the lowest available rates right here on our official website." },
  { icon: <Clock className="w-6 h-6 text-safari-gold" />, title: "Earlier Check-In", desc: "Enjoy priority early check-in and late checkout based on availability for direct bookings." },
  { icon: <ShieldCheck className="w-6 h-6 text-safari-gold" />, title: "Flexible Terms", desc: "Direct bookings enjoy more relaxed modification and cancellation policies compared to agencies." },
  { icon: <Gift className="w-6 h-6 text-safari-gold" />, title: "Welcome Perks", desc: "Every direct booking includes a complimentary bottle of wine or local gift from our artisans." }
];

export default function OffersPage() {
  return (
    <main className="min-h-screen bg-safari-light pb-24">
      {/* Short Hero for Navbar Contrast */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-safari-dark">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src="/images/tarangire-8.jpeg" className="w-full h-full object-cover opacity-60" alt="Pamoja Offers" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-safari-dark/20"></div>
        </motion.div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
          <motion.span 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-safari-gold tracking-[0.3em] font-bold uppercase text-xs mb-4"
          >
            Exclusive Value
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white text-4xl md:text-6xl font-serif mb-4"
          >
            Special Offers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-300 font-light max-w-2xl mx-auto"
          >
            Unlock exclusive rates and curated experiences designed specifically for our direct guests.
          </motion.p>
        </div>
      </section>

      {/* Offers Collection */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="space-y-24">
          {offers.map((offer, index) => (
            <motion.div 
              key={offer.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white shadow-2xl rounded-sm overflow-hidden group`}
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
                <h2 className="text-3xl md:text-4xl font-serif text-safari-dark mb-6">{offer.title}</h2>
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
      </section>

      {/* Book Direct Benefits */}
      <section className="bg-safari-dark py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-safari-gold/5 blur-[100px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-5xl font-serif mb-6 leading-tight">Why Book Direct With Us?</h2>
            <p className="text-gray-400 font-light max-w-2xl mx-auto italic">More than just a stay—we ensure your entire journey is perfectly crafted from the very first click.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookDirectBenefits.map((benefit) => (
              <div key={benefit.title} className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm hover:border-safari-gold transition-all duration-300">
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-white text-xl font-serif mb-4">{benefit.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Link 
              href="/booking" 
              className="inline-flex items-center px-12 py-5 bg-white text-safari-dark hover:bg-safari-gold hover:text-white uppercase font-bold text-sm tracking-widest transition-all rounded-sm shadow-2xl group"
            >
              Ready to Book? <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
