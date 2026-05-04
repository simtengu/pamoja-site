"use client";

import { motion } from "framer-motion";
import { UserCheck, Map, Tent, CalendarCheck } from "lucide-react";

export default function ValueProp() {
  const values = [
    {
      icon: <UserCheck className="w-10 h-10 text-safari-accent" />,
      title: "Locally Owned",
      description: "100% Tanzanian owned and operated, with deep roots in the lands we traverse."
    },
    {
      icon: <Tent className="w-10 h-10 text-safari-accent" />,
      title: "Lodge Proximity",
      description: "Our luxury lodges are strategically located near the heart of the top safari destinations."
    },
    {
      icon: <Map className="w-10 h-10 text-safari-accent" />,
      title: "Personalized Itineraries",
      description: "Bespoke experiences tailored to your interests, pace, and group size."
    },
    {
      icon: <CalendarCheck className="w-10 h-10 text-safari-accent" />,
      title: "Seamless Booking",
      description: "Single-point coordination for your luxury accommodations and safari adventure."
    }
  ];

  return (
    <section id="value-proposition" className="py-24 bg-safari-light px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-safari-dark mb-6"
          >
            Why Safari with Pamoja Africa?
          </motion.h2>
          <div className="w-24 h-1 bg-safari-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((val, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-6 bg-white shadow-lg rounded-full group-hover:bg-safari-accent group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                <div className="group-hover:text-white transition-colors duration-500">
                  {val.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-safari-dark mb-4 tracking-wide uppercase text-sm">
                {val.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {val.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
