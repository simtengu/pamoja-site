"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Eleanor & James Roberts",
      source: "google",
      body: "Our stay at the Manyara Baobab Lodge was nothing short of miraculous. The staff knew our names before we even stepped off the vehicle. Waking up to the view of the rift valley escarpment with an unhurried luxury feel was the highlight of our honeymoon.",
      rating: 5,
      date: "October 2025",
    },
    {
      id: 2,
      name: "Marcus Van Der Berg",
      source: "tripadvisor",
      body: "Pamoja Migration Camp gave us front-row seats to the great migration. The tents are impeccably designed, feeling more like a 5-star hotel room than a tent. The conservation ethos truly shines through in everything they do.",
      rating: 5,
      date: "August 2025",
    },
    {
      id: 3,
      name: "Sarah Jenkins Family",
      source: "google",
      body: "We brought our two children to Tarangire Luxury Hideaway, and it exceeded every expectation. The authentic comfort combined with spectacular elephant sightings made this a trip we will cherish forever. Highly recommended for families looking for safe, luxury adventure.",
      rating: 5,
      date: "January 2026",
    }
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Auto-play the slider
  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-safari-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-safari-accent opacity-5 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Context */}
        <div className="flex-1 text-center md:text-left">
          <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
            Guest Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Hear From Our Guests
          </h2>
          <p className="text-gray-400 font-light text-lg mb-8 max-w-md mx-auto md:mx-0">
            Don't just take our word for it. Discover what fellow travelers have to say about their unforgettable journeys with Pamoja Africa.
          </p>
          
          <div className="flex items-center justify-center md:justify-start gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-safari-gold hover:text-safari-dark hover:border-safari-gold transition-colors focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-safari-gold hover:text-safari-dark hover:border-safari-gold transition-colors focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side: Slider */}
        <div className="flex-1 w-full relative h-[450px] sm:h-[400px]">
          {reviews.map((review, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={review.id}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
                  isActive ? "opacity-100 translate-x-0 z-20" : "opacity-0 translate-x-12 z-0 pointer-events-none"
                }`}
              >
                <div className="bg-white p-10 md:p-12 shadow-2xl rounded-sm border-t-4 border-safari-gold relative h-full flex flex-col">
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-safari-light -z-0 opacity-50" />
                  
                  <div className="flex items-center gap-1 mb-6 relative z-10">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-safari-gold text-safari-gold" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed mb-8 flex-grow relative z-10 italic">
                    "{review.body}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6 relative z-10">
                    <div>
                      <p className="font-serif text-safari-dark font-bold text-lg">{review.name}</p>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{review.date}</p>
                    </div>
                    <div className="w-10 h-10 flex-shrink-0">
                      {review.source === "google" && (
                        <img src="/images/google.png" alt="Google Review" className="w-full h-full object-contain" />
                      )}
                      {review.source === "tripadvisor" && (
                        <img src="/images/tripadvisor.png" alt="TripAdvisor Review" className="w-full h-full object-contain" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          
          {/* Pagination Indicators */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-safari-gold w-6" : "bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
