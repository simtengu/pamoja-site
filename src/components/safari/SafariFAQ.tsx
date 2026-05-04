"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the best time of year for a safari in Tanzania?",
    answer: "The best time for wildlife viewing is generally during the dry season from late June to October. For the Great Migration in the Serengeti, June and July are peak times for the river crossings, while January to February is excellent for calving in the Southern Serengeti."
  },
  {
    question: "Is it safe to go on a safari with children?",
    answer: "Yes, many of our safaris are family-friendly. We recommend children be at least 5 years old for long game drives. We provide child-safe vehicles, specialized guides, and lodges with family suites and age-appropriate activities."
  },
  {
    question: "What should I pack for my safari?",
    answer: "Pack light, breathable clothing in neutral colors (khaki, olive, tan). Include a warm jacket for early morning game drives, sturdy walking shoes, a wide-brimmed hat, high-SPF sunscreen, and good binoculars."
  },
  {
    question: "Do I need vaccinations or malaria tablets?",
    answer: "Tanzania is a malaria-risk area, so we strongly recommend consulting your doctor about profilaxis well before travel. Yellow fever vaccination is required if traveling from an endemic country. Always check current CDC or WHO requirements."
  },
  {
    question: "Can I customize a pre-set safari package?",
    answer: "Absolutely. All our packages serve as a foundation that can be fully customized to your specific interests, budget, and time frame. We specialize in bespoke itineraries."
  }
];

export default function SafariFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="safari-faq" className="py-24 bg-safari-light px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <HelpCircle className="w-12 h-12 text-safari-accent" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-safari-dark mb-6"
          >
            Safari FAQ
          </motion.h2>
          <p className="text-gray-500 font-light">
            Answers to our most commonly asked questions about planning your Tanzanian adventure.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-sm border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === idx}
              >
                <span className="text-lg font-serif text-safari-dark pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 text-safari-gold transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pt-2 text-gray-600 font-light leading-relaxed border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
