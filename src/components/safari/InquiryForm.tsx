"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";

export default function InquiryForm() {
  return (
    <section id="inquiry-form" className="py-24 bg-safari-dark text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Contact Info */}
          <div className="lg:w-2/5">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-safari-gold font-bold uppercase text-xs tracking-widest mb-6 inline-block"
            >
              Start Your Journey
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif mb-10 leading-tight"
            >
              Plan Your <br />
              <span className="text-safari-gold">Bespoke Safari</span>
            </motion.h2>
            
            <p className="text-gray-400 font-light mb-12 text-lg">
              Let our experts craft the perfect Tanzanian adventure tailored to your exact desires. We're here to help every step of the way.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:bg-safari-gold group-hover:text-white transition-all">
                  <Phone className="w-6 h-6 text-safari-gold group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-widest block mb-1">Call Us</span>
                  <span className="text-lg font-light">+255 7XX XXX XXX</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:bg-safari-gold group-hover:text-white transition-all">
                  <Mail className="w-6 h-6 text-safari-gold group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-widest block mb-1">Email Us</span>
                  <span className="text-lg font-light">safari@pamojaafrica.com</span>
                </div>
              </div>

              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:bg-safari-gold group-hover:text-white transition-all">
                  <MessageCircle className="w-6 h-6 text-safari-gold group-hover:text-white" />
                </div>
                <div>
                  <span className="text-xs text-gray-500 uppercase font-bold tracking-widest block mb-1">WhatsApp</span>
                  <span className="text-lg font-light underline decoration-safari-gold/30">Chat with a Specialist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 bg-white p-10 md:p-16 rounded-sm shadow-2xl relative overflow-hidden">
            {/* Subtle Texture Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/migration-1.jpeg')] bg-cover"></div>
            
            <form className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-safari-dark">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-safari-gold transition-colors text-sm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-safari-gold transition-colors text-sm" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Trip Duration</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-safari-gold transition-colors text-sm cursor-pointer appearance-none">
                    <option className="text-gray-400">Select Duration</option>
                    <option>1-3 Days</option>
                    <option>4-7 Days</option>
                    <option>8-12 Days</option>
                    <option>13+ Days</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Interest</label>
                  <select className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-safari-gold transition-colors text-sm cursor-pointer appearance-none">
                    <option className="text-gray-400">Select Primary Interest</option>
                    <option>Great Migration</option>
                    <option>Big Five Encounter</option>
                    <option>Photography Safari</option>
                    <option>Cultural Experience</option>
                    <option>Honeymoon / Couple</option>
                    <option>Family Safari</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-2 text-safari-dark">
                <label className="text-[10px] uppercase font-bold tracking-widest text-gray-400">Tell us about your dream trip</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-safari-gold transition-colors text-sm resize-none" placeholder="We're interested in visiting the Serengeti during the river crossing..."></textarea>
              </div>

              <button className="w-full py-5 bg-safari-dark text-white uppercase font-bold text-sm tracking-widest hover:bg-safari-gold transition-colors duration-300 rounded-sm">
                Request Custom Safari
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
