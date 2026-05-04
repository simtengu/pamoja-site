"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Utensils, Waves, Sparkles } from "lucide-react";

export default function Experiences() {
  const [activeTab, setActiveTab] = useState("dining");

  const tabs = [
    { id: "dining", label: "Culinary Journey", icon: <Utensils className="w-4 h-4 mr-2" /> },
    { id: "pools", label: "Infinity Pools", icon: <Waves className="w-4 h-4 mr-2" /> },
    { id: "wellness", label: "Spa & Wellness", icon: <Sparkles className="w-4 h-4 mr-2" /> },
  ];

  const content: Record<string, { title: string, subtitle: string, desc: string, image: string, highlights: {name: string, detail: string}[] }> = {
    dining: {
      title: "A Culinary Journey",
      subtitle: "Taste The Wild",
      desc: "Our master chefs blend international culinary techniques with the finest, freshest local Tanzanian ingredients. Whether it's a sunrise bush breakfast or a romantic candlelit dinner under a canopy of stars, every meal is designed to be an unforgettable event.",
      image: "/images/dining.jpeg",
      highlights: [
        { name: "Swahili Bush Breakfast", detail: "Freshly baked pastries and eggs cooked over an open fire on the plains." },
        { name: "Under The Stars Dining", detail: "A spectacular five-course tasting menu paired with premium South African wines." },
        { name: "Traditional Boma Dinner", detail: "Authentic local barbecue with Maasai cultural storytelling and dances." }
      ]
    },
    pools: {
      title: "Infinite Relaxation",
      subtitle: "Oasis In The Dust",
      desc: "After a thrilling game drive, nothing compares to slipping into the cool, crystal-clear waters of our infinity pools. Designed to blend seamlessly into the horizon, our pools offer the perfect vantage point to watch wildlife roam right past the lodge.",
      image: "/images/pamoja-villa-2.jpeg",
      highlights: [
        { name: "Baobab Infinity Edge", detail: "Suspended over the rift valley, offering 180-degree sunset views." },
        { name: "Private Plunge Pools", detail: "Exclusive temperature-controlled pools attached to our premium honeymoon villas." },
        { name: "Poolside Service", detail: "Signature cocktails and light bites delivered directly to your sun lounger." }
      ]
    },
    wellness: {
      title: "Restore & Rejuvenate",
      subtitle: "African Spa Therapies",
      desc: "Embrace the healing rhythms of nature. Our wellness centers harness indigenous botanicals and ancient African massage techniques to soothe your body and soul after a long day of adventure in the bush.",
      image: "/images/massage.jpg",
      highlights: [
        { name: "Marula Oil Massage", detail: "Deep tissue relaxation using organic, locally sourced Marula and Baobab oils." },
        { name: "In-Tent Treatments", detail: "Enjoy world-class spa therapies in the complete privacy of your luxury tent." },
        { name: "Sunrise Yoga", detail: "Guided meditation and yoga sessions available daily on our panoramic wooden decks." }
      ]
    }
  };

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
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out filter brightness-50 ${
              activeTab === key ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          />
        ))}
        {/* Overlay gradient for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-safari-dark/95 via-safari-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 flex flex-col md:flex-row min-h-[700px]">
        
        {/* Left Content Area */}
        <div className="w-full md:w-1/2 flex flex-col pr-0 md:pr-12 lg:pr-24">
          
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

          <Link 
            href="/about" 
            className="inline-flex items-center gap-2 text-safari-gold font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group mt-auto self-start"
          >
            Discover More 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

        </div>

        {/* Right Tab Navigation */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-end mt-16 md:mt-0">
          <div className="bg-safari-dark/40 backdrop-blur-md border border-white/10 rounded-sm p-2 flex flex-col w-full max-w-sm ml-auto space-y-2">
            
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-between w-full px-6 py-5 text-left transition-all duration-300 rounded-sm group ${
                  activeTab === tab.id 
                    ? "bg-safari-gold text-safari-dark font-bold shadow-lg scale-[1.02]" 
                    : "text-white hover:bg-white/10"
                }`}
              >
                <span className="flex items-center text-sm uppercase tracking-widest">
                  {tab.icon} {tab.label}
                </span>
                <ChevronIndicator active={activeTab === tab.id} />
              </button>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
}

function ChevronIndicator({ active }: { active: boolean }) {
  return (
    <svg 
      className={`w-5 h-5 transition-transform duration-300 ${active ? "translate-x-1" : "opacity-0 -translate-x-2"}`} 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}
