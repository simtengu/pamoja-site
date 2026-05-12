"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeOffers() {
  return (
    <section className="py-24 relative overflow-hidden bg-safari-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/tarangire-6.jpeg" 
          alt="African Mountains Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-safari-dark/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-[10px] mb-4 block">Offers</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">Pamoja Special Offers</h2>
          <p className="text-gray-300 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            Take advantage of our curated selection of special packages and seasonal offers designed to make your safari experience even more extraordinary.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl">
          {/* Row 1 - Offset */}
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="bg-white p-10 flex flex-col justify-center min-h-[350px]">
            <h3 className="text-2xl font-serif text-safari-dark mb-4 leading-tight">Stay 3 Nights - Save 20%</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
              Experience the magic of the Savannah with an extended stay. Book three nights or more and enjoy a significant reduction on our standard rates.
            </p>
            <Link href="/booking?offer=stay-longer" className="text-safari-gold uppercase tracking-[0.2em] text-[10px] font-bold hover:text-safari-dark transition-colors inline-flex items-center group">
              Book & Claim Offer <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-[350px] overflow-hidden relative">
            <img src="/images/amenities/stay-offer.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Safari Stay Offer" />
            <div className="absolute bottom-4 right-4 text-white font-serif text-xl">+</div>
          </div>

          {/* Row 2 - Full */}
          <div className="h-[350px] overflow-hidden relative order-1 lg:order-none">
            <img src="/images/amenities/dining.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Wedding Offer" />
            <div className="absolute bottom-4 right-4 text-white font-serif text-xl">+</div>
          </div>
          <div className="bg-white p-10 flex flex-col justify-center min-h-[350px] order-2 lg:order-none border-l border-gray-50">
            <h3 className="text-2xl font-serif text-safari-dark mb-4 leading-tight">Honeymoon Special Offer</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
              Celebrate your love with custom romantic setups. Enjoy premium services including beautiful floral arrangements, exquisite private dining, and fine wines tailored to make your honeymoon unforgettable.
            </p>
            <Link href="/booking?offer=honeymoon-dinner" className="text-safari-gold uppercase tracking-[0.2em] text-[10px] font-bold hover:text-safari-dark transition-colors inline-flex items-center group">
              Book & Claim Offer <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-[350px] overflow-hidden relative order-3 lg:order-none">
            <img src="/images/massage.jpg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Spa Offer" />
            <div className="absolute bottom-4 right-4 text-white font-serif text-xl">+</div>
          </div>
          <div className="bg-white p-10 flex flex-col justify-center min-h-[350px] order-4 lg:order-none border-l border-gray-50">
            <h3 className="text-2xl font-serif text-safari-dark mb-4 leading-tight">Spa Treatment Launch</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
              Rejuvenate your senses with our newly launched spa therapies. Book any stay this month and receive a complimentary signature treatment.
            </p>
            <Link href="/booking?offer=safari-day-trip" className="text-safari-gold uppercase tracking-[0.2em] text-[10px] font-bold hover:text-safari-dark transition-colors inline-flex items-center group">
              Book & Claim Offer <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Row 3 - Start */}
          <div className="bg-white p-10 flex flex-col justify-center min-h-[350px] order-5 lg:order-none">
            <h3 className="text-2xl font-serif text-safari-dark mb-4 leading-tight">Complimentary Wine</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
              Savor the flavors of our house-selected premium wines, offered complimentary during special occasions such as birthdays, honeymoons, or for large family gatherings.
            </p>
            <Link href="/booking?offer=early-bird" className="text-safari-gold uppercase tracking-[0.2em] text-[10px] font-bold hover:text-safari-dark transition-colors inline-flex items-center group">
              Book & Claim Offer <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="h-[350px] overflow-hidden relative order-6 lg:order-none">
            <img src="/images/dining.jpeg" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Dining Offer" />
            <div className="absolute bottom-4 right-4 text-white font-serif text-xl">+</div>
          </div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <Link 
            href="/experiences" 
            className="inline-flex items-center gap-3 bg-safari-gold text-safari-dark hover:bg-white transition-all px-12 py-5 rounded-sm font-bold uppercase tracking-[0.2em] text-xs shadow-2xl group"
          >
            Explore All Offers
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
