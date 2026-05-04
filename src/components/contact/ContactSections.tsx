"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, ChevronDown, Send, Clock } from "lucide-react";
import dynamic from "next/dynamic";

const InteractiveMap = dynamic(() => import("./MapClient"), { 
  ssr: false, 
  loading: () => <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">Loading Map Data...</div> 
});

export function ContactHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative h-[65vh] w-full overflow-hidden bg-safari-dark">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/tarangire-8.jpeg"
          alt="Contact Pamoja Africa"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-safari-dark"></div>
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-safari-gold tracking-[0.3em] font-bold uppercase text-xs md:text-sm mb-6"
        >
          We Are Here
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
        >
          Get In Touch
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 font-light text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          Whether you're looking to craft a complete safari itinerary or just have questions about our luxury lodges, our dedicated concierge team is ready to assist you.
        </motion.p>
      </div>

      <motion.button 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 text-white animate-bounce focus:outline-none"
      >
        <ChevronDown className="w-8 h-8 opacity-70 hover:opacity-100 transition-opacity text-safari-gold" />
      </motion.button>
    </div>
  );
}

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message Sent! (Demo Mode)");
  };

  return (
    <section className="py-24 bg-safari-light px-4 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Contact Information */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-12">
          
          <div>
            <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
              Reach Out
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-6 leading-tight">
              Let's Plan Your Journey
            </h2>
            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6 border-l-2 border-safari-accent pl-4">
              Our reservations operate 24/7. Connect with our dedicated Tanzania-based experts to craft your ultimate adventure.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-white p-3 shadow-md rounded-full mr-6 text-safari-accent flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-safari-dark mb-2">Head Office</h4>
                <p className="text-gray-600 font-light leading-relaxed">Pamoja Africa House, Arusha<br/>PO BOX 4567, Tanzania</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white p-3 shadow-md rounded-full mr-6 text-safari-accent flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-safari-dark mb-2">Direct Lines</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-1">Reservations: +255 768 123 456</p>
                <p className="text-gray-600 font-light leading-relaxed">Emergency: +255 784 987 654</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white p-3 shadow-md rounded-full mr-6 text-safari-accent flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-safari-dark mb-2">Electronic Mail</h4>
                <p className="text-gray-600 font-light leading-relaxed mb-1">bookings@pamojaafrica.com</p>
                <p className="text-gray-600 font-light leading-relaxed">support@pamojaafrica.com</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: The Form */}
        <div className="w-full lg:w-3/5">
          <div className="bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-4 border-safari-gold relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-safari-accent opacity-5 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-serif text-safari-dark mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">First Name</label>
                  <input type="text" required className="w-full border-b border-gray-300 py-3 bg-transparent text-gray-800 focus:border-safari-dark outline-none transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Last Name</label>
                  <input type="text" required className="w-full border-b border-gray-300 py-3 bg-transparent text-gray-800 focus:border-safari-dark outline-none transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Email Address</label>
                  <input type="email" required className="w-full border-b border-gray-300 py-3 bg-transparent text-gray-800 focus:border-safari-dark outline-none transition-colors" placeholder="hello@example.com" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 block">Inquiry Type</label>
                  <select className="w-full border-b border-gray-300 py-3 bg-transparent text-gray-800 focus:border-safari-dark outline-none transition-colors appearance-none">
                    <option>General Support</option>
                    <option>Booking a specific Lodge</option>
                    <option>Tailor-Made Safari Request</option>
                    <option>Travel Agent Connection</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4 block">Your Message</label>
                <textarea rows={4} required className="w-full border border-gray-200 p-4 bg-gray-50 text-gray-800 focus:border-safari-dark outline-none transition-colors rounded-sm" placeholder="Tell us about your dream trip..."></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="group flex items-center justify-center w-full md:w-auto bg-safari-dark text-white hover:bg-safari-gold hover:text-safari-dark font-bold uppercase tracking-widest text-sm px-10 py-5 transition-all duration-300 rounded-sm">
                  Send Inquiry <Send className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export function AccommodationsMap() {
  return (
    <section className="py-24 bg-safari-dark relative px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="text-center mb-16 text-white max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Explore Our Locations</h2>
          <p className="text-gray-400 font-light text-lg">
            Strategically positioned across Tanzania's most iconic landscapes, our 7 distinct properties offer front-row access to the greatest wildlife spectacles on earth.
          </p>
        </div>

        {/* The OpenStreetMap Interactive Leaflet Container */}
        <div className="w-full h-[600px] rounded-sm overflow-hidden shadow-2xl border border-gray-800 relative z-10 bg-gray-100">
          <InteractiveMap />
        </div>

      </div>
    </section>
  );
}
