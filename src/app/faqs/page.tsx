"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Booking & Logistics",
    questions: [
      {
        q: "What is the best time of year to visit for a safari?",
        a: "Tanzania is a phenomenal year-round destination. The dry season (June to October) offers optimal wildlife viewing as animals congregate around water sources, and it coincides with the dramatic Mara River crossings of the Great Migration. The green season (November to May) provides lush landscapes, incredible birdwatching, and the wildebeest calving season in the southern Serengeti (January to March)."
      },
      {
        q: "What is included in the all-inclusive rate?",
        a: "Our premium all-inclusive rate covers your luxury accommodation, all meals (breakfast, lunch, and dinner), a selection of house wines, local beers and spirits, teas and coffees, Wi-Fi, and laundry services. Depending on your booking, specific safari activities and game drives may also be included. Premium spirits, champagnes, and exclusive private activities may incur additional charges."
      },
      {
        q: "How do we get to your properties?",
        a: "Most guests fly into Kilimanjaro International Airport (JRO) or Arusha Airport (ARK). From there, we can arrange domestic bush flights to the airstrip nearest your chosen lodge or camp (e.g., Seronera Airstrip, Kuro Airstrip). Upon arrival at the airstrip, our guides will greet you in an open 4x4 safari vehicle and provide a game drive transfer to the property."
      }
    ]
  },
  {
    category: "The Safari Experience",
    questions: [
      {
        q: "Are children welcome at Pamoja Africa lodges?",
        a: "Yes, we warmly welcome families! We offer specialized family villas and multi-bedroom tents. However, for safety reasons in our unfenced wilderness camps, we recommend a minimum age of 6 years. We also offer tailored child-friendly activities and menus to ensure our youngest guests have an unforgettable adventure."
      },
      {
        q: "What should I pack for a safari?",
        a: "We recommend comfortable, lightweight clothing in neutral tones (khaki, brown, green) to blend in with the environment. Layers are essential, as early morning and evening game drives can be quite chilly. Don't forget a wide-brimmed hat, sunscreen, sunglasses, comfortable closed-toe walking shoes, a swimsuit (for properties with pools), and binoculars."
      },
      {
        q: "Is it safe to stay in unfenced luxury camps?",
        a: "Absolutely. Your safety is our utmost priority. Our camps are designed to immerse you in nature while maintaining strict security protocols. Maasai guards patrol the grounds 24/7, and guests are always escorted between the main areas and their tents after dark. We brief all guests thoroughly upon arrival."
      }
    ]
  },
  {
    category: "Health & Amenities",
    questions: [
      {
        q: "Do I need any specific vaccinations?",
        a: "We recommend consulting your doctor or a travel clinic at least 4-6 weeks prior to travel. Generally, anti-malarial medication is advised. A Yellow Fever certificate is required if you are arriving from or transiting through a country with risk of Yellow Fever transmission."
      },
      {
        q: "Is Wi-Fi available at the lodges and camps?",
        a: "Yes, complimentary high-speed Wi-Fi is available in the main lounge and dining areas of all our properties, as well as in most guest suites. However, as we are located in remote wilderness areas, the connection may occasionally be affected by weather or satellite interruptions."
      },
      {
        q: "Can you accommodate specific dietary requirements?",
        a: "Certainly. Our executive chefs are highly skilled in catering to various dietary needs, including vegetarian, vegan, gluten-free, dairy-free, and specific allergies. Please inform us of any dietary requirements at the time of booking so we can prepare a tailored culinary experience for you."
      }
    ]
  }
];

export default function FAQsPage() {
  const [openCategory, setOpenCategory] = useState<string>("Booking & Logistics");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (q: string) => {
    setOpenQuestion(openQuestion === q ? null : q);
  };

  return (
    <main className="min-h-screen bg-safari-light">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/faqs-hero.jpg" 
            alt="Pamoja FAQs" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block"
          >
            Guest Information
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-tight"
          >
            Frequently Asked Questions
          </motion.h1>
        </div>
      </section>

      {/* FAQs Content */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">
              Preparing for an African safari is an exciting journey. We've compiled answers to the most common questions to help you plan your ultimate Pamoja Africa experience.
            </p>
          </div>

          {/* Categories Tab */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {faqs.map((group) => (
              <button
                key={group.category}
                onClick={() => setOpenCategory(group.category)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  openCategory === group.category
                    ? "bg-safari-dark text-white border-safari-dark shadow-xl"
                    : "bg-white text-gray-500 border-gray-200 hover:border-safari-gold hover:text-safari-dark"
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>

          {/* Questions Accordion */}
          <div className="bg-white shadow-2xl rounded-sm p-8 md:p-12 border border-gray-100">
            <AnimatePresence mode="wait">
              {faqs
                .filter(group => group.category === openCategory)
                .map((group) => (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    {group.questions.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`border-b border-gray-100 pb-6 last:border-0 last:pb-0 ${idx === 0 ? '' : 'pt-2'}`}
                      >
                        <button
                          onClick={() => toggleQuestion(item.q)}
                          className="w-full flex items-center justify-between text-left group"
                        >
                          <h3 className="text-lg md:text-xl font-serif text-safari-dark group-hover:text-safari-gold transition-colors pr-8">
                            {item.q}
                          </h3>
                          <span className={`transform transition-transform duration-300 ${openQuestion === item.q ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-5 h-5 text-safari-gold" />
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {openQuestion === item.q && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <p className="pt-4 text-gray-600 font-light leading-relaxed">
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          <div className="mt-20 text-center">
            <p className="text-safari-dark font-serif text-2xl mb-6">Still have questions?</p>
            <Link 
              href="/contact" 
              className="inline-block px-10 py-4 bg-safari-dark text-white hover:bg-safari-gold hover:text-safari-dark text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-xl"
            >
              Contact Our Concierge
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
