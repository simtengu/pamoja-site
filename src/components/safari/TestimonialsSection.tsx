"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & David Thompson",
    role: "Couple (Honeymoon)",
    text: "Pamoja Africa made our honeymoon absolutely magical. The transition from the luxury camp to our private game drives was seamless. The attention to detail was beyond anything we've experienced.",
    image: "/images/team-1.jpg"
  },
  {
    name: "The Miller Family",
    role: "Family Safari",
    text: "Traveling with three kids can be stressful, but our guide was incredible at keeping the little ones engaged. We felt safe, pampered, and truly connected to the wildlife.",
    image: "/images/team-2.jpg"
  },
  {
    name: "Robert Chen",
    role: "Photography Enthusiast",
    text: "The photographic opportunities were endless. Our guide understood lighting and positioning perfectly, allowing me to capture the migration crossing from the best possible angle.",
    image: "/images/team-3.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white px-4 border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-safari-accent font-bold uppercase text-xs tracking-widest mb-4 inline-block"
          >
            Guest Stories
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif text-safari-dark mb-6"
          >
            What Our Guests Say
          </motion.h2>
          <div className="w-24 h-1 bg-safari-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-safari-light p-10 rounded-sm relative shadow-sm hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-safari-gold/20" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-safari-gold text-safari-gold" />
                ))}
              </div>
              <p className="text-gray-600 font-light italic leading-relaxed mb-8 relative z-10 text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-safari-dark text-sm uppercase tracking-wide">
                    {testimonial.name}
                  </h4>
                  <span className="text-[10px] text-safari-accent font-bold uppercase tracking-widest">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
