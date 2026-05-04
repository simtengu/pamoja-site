"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, Compass, Backpack } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: "1. Consultation",
    description: "Connect with our safari specialists to discuss your interests, budget, and travel dates."
  },
  {
    icon: <Compass className="w-10 h-10" />,
    title: "2. Tailored Proposal",
    description: "We'll create a bespoke itinerary that blends luxury lodges with iconic wildlife sightings."
  },
  {
    icon: <Calendar className="w-10 h-10" />,
    title: "3. Finalize & Book",
    description: "Once you're satisfied with the plan, we'll confirm all bookings and provide your travel kit."
  },
  {
    icon: <Backpack className="w-10 h-10" />,
    title: "4. Travel with Us",
    description: "Touch down in Tanzania and let our expert guides lead you on an adventure of a lifetime."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-safari-dark mb-6"
          >
            How it Works
          </motion.h2>
          <div className="w-24 h-1 bg-safari-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[15%] right-[15%] h-[1px] bg-safari-accent opacity-20"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center relative z-10"
            >
              <div className="mb-8 p-6 bg-safari-light rounded-full border-2 border-transparent hover:border-safari-accent transition-all duration-300 transform hover:scale-110">
                <div className="text-safari-accent">{step.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-safari-dark mb-4 tracking-wide uppercase text-sm">
                {step.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
