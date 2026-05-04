"use client";

import SafariHero from "@/components/safari/SafariHero";
import ValueProp from "@/components/safari/ValueProp";
import PackageGrid from "@/components/safari/PackageGrid";
import DayTrips from "@/components/safari/DayTrips";
import InquiryForm from "@/components/safari/InquiryForm";
import DestinationsShowcase from "@/components/safari/DestinationsShowcase";
import ExperienceHighlights from "@/components/safari/ExperienceHighlights";
import HowItWorks from "@/components/safari/HowItWorks";
import TestimonialsSection from "@/components/safari/TestimonialsSection";
import SafariFAQ from "@/components/safari/SafariFAQ";

export default function SafariTripsPage() {
  return (
    <main className="flex flex-col w-full bg-safari-light">
      {/* 1. Hero Section */}
      <SafariHero />

      {/* 2. Value Proposition Section */}
      <ValueProp />

      {/* 3. Safari Packages Section */}
      <PackageGrid />

      {/* 4. Day Trips Section */}
      <DayTrips />

      {/* 5. Custom Safari Planning Section / Inquiry Form */}
      <div id="custom-planning" className="pt-20">
        <InquiryForm />
      </div>

      {/* 6. Destinations Section */}
      <DestinationsShowcase />

      {/* 7. Experience Highlights Section */}
      <ExperienceHighlights />

      {/* 8. How It Works Section */}
      <HowItWorks />

      {/* 9. Testimonials Section */}
      <TestimonialsSection />

      {/* 10. FAQ Section */}
      <SafariFAQ />

      {/* 11. Final Call-To-Action (Using Inquiry Form anchor also here if needed, but the section exists above) */}
      <section className="py-16 bg-safari-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-serif mb-8 whitespace-pre-wrap">
            Ready to Start Your Adventure?
          </h2>
          <button 
            onClick={() => document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" })}
            className="px-12 py-5 bg-white text-safari-dark uppercase font-bold text-sm tracking-widest hover:bg-safari-dark hover:text-white transition-all duration-300 rounded-sm shadow-xl"
          >
            Inquire Now
          </button>
        </div>
      </section>
    </main>
  );
}
