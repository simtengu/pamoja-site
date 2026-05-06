"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-safari-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-40 h-16 transition-transform hover-zoom">
              <img src="/images/logo-white.png" alt="Pamoja Africa Logo" className="object-contain w-full h-full" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Creating unforgettable African experiences. We are a proud Tanzanian-owned collection of eco-conscious lodges and mobile camps, carefully placed in the most breathtaking regions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/pamojaafricatz/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-safari-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pamoja_africa_lodges_and_camps/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-safari-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 tracking-wider text-safari-gold uppercase text-sm">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/accommodations" className="hover:text-white transition-colors">Accommodations</Link></li>
              <li><Link href="/safari-trips" className="hover:text-white transition-colors">Experiences</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 tracking-wider text-safari-gold uppercase text-sm">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-safari-accent flex-shrink-0" />
                <span>Arusha, Tanzania<br/>East Africa</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-safari-accent flex-shrink-0" />
                <a href="tel:+255767465557" className="hover:text-white transition-colors">+255 767 465 557</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-safari-accent flex-shrink-0" />
                <a href="mailto:info@pamojaafricatz.com" className="hover:text-white transition-colors">info@pamojaafricatz.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 tracking-wider text-safari-gold uppercase text-sm">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-gray-900 border border-gray-700 focus:border-safari-gold focus:ring-1 focus:ring-safari-gold text-white px-4 py-2 rounded-sm text-sm outline-none transition-all"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-safari-gold text-safari-dark font-bold uppercase tracking-wider text-sm px-4 py-2 rounded-sm hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Pamoja Africa. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">Usage Terms</Link>
            <Link href="/policies" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
