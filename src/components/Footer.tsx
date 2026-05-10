"use client";

import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-safari-dark text-white border-t border-gray-800">
      
      {/* Newsletter Banner */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-serif mb-4 text-white">Join Our Journey</h3>
            <p className="text-gray-400 font-light text-sm md:text-base max-w-md">
              Subscribe to our newsletter to receive exclusive offers, safari inspiration, and updates from the wild.
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-lg md:ml-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow bg-[#1a1a1a] border border-gray-700 focus:border-safari-gold focus:ring-1 focus:ring-safari-gold text-white px-5 py-4 text-sm outline-none transition-all placeholder-gray-500"
                required
              />
              <button 
                type="submit" 
                className="bg-safari-gold text-safari-dark font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-white transition-colors flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 pr-4">
            <Link href="/" className="inline-block relative w-44 h-16 transition-transform hover:-translate-y-1 duration-300 mb-6">
              <img src="/images/logo-white.png" alt="Pamoja Africa Logo" className="object-contain w-full h-full object-left" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">
              Creating unforgettable African experiences. We are a proud Tanzanian-owned collection of eco-conscious lodges and mobile camps, carefully placed in the most breathtaking regions of Northern Tanzania.
            </p>
            <p className="text-safari-gold font-luxury text-3xl italic">
              Where Nature Meets Luxury
            </p>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-sm font-bold tracking-widest text-safari-gold uppercase mb-8">Explore</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><Link href="/" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Home</Link></li>
              <li><Link href="/accommodations" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Our Properties</Link></li>
              <li><Link href="/safari-trips" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Experiences</Link></li>
              <li><Link href="/offers" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Special Offers</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold tracking-widest text-safari-gold uppercase mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><Link href="/about" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">Contact Us</Link></li>
              <li><Link href="/faqs" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">FAQs</Link></li>
              <li><Link href="/news" className="hover:text-white hover:translate-x-1 inline-block transition-transform duration-300">News & Insights</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-widest text-safari-gold uppercase mb-8">Get In Touch</h4>
            <ul className="space-y-6 text-sm font-light text-gray-400">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 mr-4 text-safari-accent group-hover:text-safari-gold transition-colors flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">Arusha, Tanzania<br/>East Africa</span>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-4 text-safari-accent group-hover:text-safari-gold transition-colors flex-shrink-0" />
                <a href="tel:+255767465557" className="hover:text-white transition-colors">+255 767 465 557</a>
              </li>
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-4 text-safari-accent group-hover:text-safari-gold transition-colors flex-shrink-0" />
                <a href="mailto:info@pamojaafricatz.com" className="hover:text-white transition-colors">info@pamojaafricatz.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-light gap-4">
          <p className="order-2 md:order-1 tracking-wider">&copy; {new Date().getFullYear()} PAMOJA AFRICA. ALL RIGHTS RESERVED.</p>
          
          <div className="flex space-x-6 order-3 md:order-2">
            <Link href="/terms" className="hover:text-white transition-colors uppercase tracking-wider">Usage Terms</Link>
            <Link href="/policies" className="hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</Link>
          </div>

          <div className="flex space-x-5 order-1 md:order-3">
            <a href="https://www.facebook.com/pamojaafricatz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-transform duration-300">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://www.instagram.com/pamoja_africa_lodges_and_camps/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:-translate-y-1 transition-transform duration-300">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
