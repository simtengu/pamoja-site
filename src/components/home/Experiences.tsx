"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function Experiences() {
  const [activeTab, setActiveTab] = useState("dining");

  const content: Record<string, { title: string, subtitle: string, desc: string, image: string, highlights: {name: string, detail: string}[] }> = {
    dining: {
      title: "A Culinary Journey",
      subtitle: "Taste The Wild",
      desc: "Our master chefs blend international culinary techniques with the finest, freshest local Tanzanian ingredients. Whether it's a sunrise bush breakfast or a romantic candlelit dinner under a canopy of stars, every meal is designed to be an unforgettable event.",
      image: "/images/bonfire.jpg",
      highlights: [
        { name: "Swahili Bush Breakfast", detail: "Freshly baked pastries and eggs cooked over an open fire on the plains." },
        { name: "Under The Stars Dining", detail: "A spectacular five-course tasting menu paired with premium  African wines." },
        { name: " Bonfire Experience", detail: "Gather around the roaring fire for evening cocktails, traditional storytelling, and stargazing." }
      ]
    },
    pools: {
      title: "Infinite Relaxation",
      subtitle: "Serenity with a View",
      desc: "After a thrilling game drive, nothing compares to slipping into the cool, crystal-clear waters of our infinity pools. Designed to blend seamlessly into the horizon, our pools offer the perfect vantage point to watch wildlife roam right past the lodge.",
      image: "/images/pamoja-villa-2.jpeg",
      highlights: [
        { name: "Breathtaking Locations", detail: "Our properties are masterfully located to offer breathtaking panoramas, from lush ancient forests to the shimmering horizons of Lake Manyara." },
      
       
        { name: "Private Plunge Pools", detail: "Exclusive modern  pools attached to our premium  villas." },
    
      ]
    },
    wellness: {
      title: "Restore & Rejuvenate",
      subtitle: "African Spa Therapies",
      desc: "Embrace the healing rhythms of nature. Our wellness centers harness indigenous botanicals and ancient African massage techniques to soothe your body and soul after a long day of adventure in the bush.",
      image: "/images/massage.jpg",
      highlights: [
        { name: "In-Tent Treatments", detail: "Enjoy world-class spa therapies in the complete privacy of your luxury tent." },
        { name: "Sunrise Yoga", detail: "Guided meditation and yoga sessions available daily on our panoramic wooden decks." }
      ]
    }
  };

  const tabKeys = Object.keys(content);
  const currentIndex = tabKeys.indexOf(activeTab);

  const handleNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % tabKeys.length;
    setActiveTab(tabKeys[nextIndex]);
  }, [currentIndex, tabKeys]);

  const handlePrev = useCallback(() => {
    const prevIndex = (currentIndex - 1 + tabKeys.length) % tabKeys.length;
    setActiveTab(tabKeys[prevIndex]);
  }, [currentIndex, tabKeys]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-play every 5 seconds
    return () => clearInterval(interval);
  }, [handleNext]);

  const activeContent = content[activeTab];

  return (
    <section className="bg-safari-dark text-white relative overflow-hidden">
      
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out">
        {Object.keys(content).map(key => (
          <img 
            key={key}
            src={content[key].image} 
            alt={content[key].title} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter brightness-75 ${
              activeTab === key ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-safari-dark/80 via-safari-dark/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 flex flex-col min-h-[700px]">
        
        {/* Top Content Area */}
        <div className="flex-1 w-full md:w-1/2 flex flex-col pr-0 md:pr-12 lg:pr-24">
          
          <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block animate-[fadeIn_0.5s_ease-out]">
            {activeContent.subtitle}
          </span>
          <h2 key={`title-${activeTab}`} className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight animate-[slideUp_0.5s_ease-out]">
            {activeContent.title}
          </h2>
          <p key={`desc-${activeTab}`} className="text-gray-300 font-light text-lg leading-relaxed mb-10 animate-[slideUp_0.6s_ease-out]">
            {activeContent.desc}
          </p>

          <div key={`highlights-${activeTab}`} className="space-y-6 mb-12 animate-[slideUp_0.7s_ease-out]">
            {activeContent.highlights.map((item, idx) => (
              <div key={idx} className="border-l-2 border-safari-gold pl-4 hover:border-white transition-colors">
                <h4 className="font-serif text-xl text-white mb-1 tracking-wide">{item.name}</h4>
                <p className="text-sm text-gray-400 font-light leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Navigation */}
        <div className="w-full flex items-center justify-between mt-12 pt-8 border-t border-white/10">
          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-safari-gold font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group"
          >
            Discover More 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <div className="flex items-center gap-4">
            <button 
              onClick={handlePrev}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 hover:border-white/50 transition-colors text-white group"
              aria-label="Previous experience"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 hover:border-white/50 transition-colors text-white group"
              aria-label="Next experience"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
