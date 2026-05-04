"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Accommodations", path: "/accommodations" },
    { name: "Safari & Trips", path: "/safari-trips" },
    { name: "Offers", path: "/offers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const moreLinks = [
    { name: "Destinations", path: "/destinations" },
    { name: "FAQs", path: "/faqs" },
    { name: "Policies", path: "/policies" },
    { name: "News/Blog", path: "/news" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out font-sans ${
        isScrolled
          ? "bg-safari-light/95 backdrop-blur-md shadow-md text-safari-dark py-2"
          : "bg-transparent text-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="relative h-12 w-32 md:h-16 md:w-40 transition-transform hover-zoom">
              <img
                src={isScrolled ? "/images/logo-black.png" : "/images/logo-white.png"}
                alt="Pamoja Africa Logo"
                className="object-contain h-full w-full"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-safari-accent transition-colors text-sm uppercase tracking-wider font-semibold"
              >
                {link.name}
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center hover:text-safari-accent transition-colors text-sm uppercase tracking-wider font-semibold focus:outline-none"
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                More <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-white text-safari-dark shadow-lg border border-gray-100 rounded-sm transition-all duration-200 transform origin-top-left ${
                  isMoreOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                }`}
                onMouseEnter={() => setIsMoreOpen(true)}
                onMouseLeave={() => setIsMoreOpen(false)}
              >
                <div className="py-2">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      className="block px-4 py-2 text-sm hover:bg-safari-light hover:text-safari-accent transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Book Now Button */}
            <Link
              href="/booking"
              className={`px-6 py-2 uppercase tracking-wide text-sm font-bold border transition-all duration-300 ${
                isScrolled
                  ? "border-safari-dark text-safari-dark hover:bg-safari-dark hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-safari-dark"
              }`}
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-safari-dark text-white shadow-xl h-screen overflow-y-auto pb-32">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="block px-3 py-4 text-base font-medium border-b border-gray-700/50 hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 pb-2">
              <Link
                href="/booking"
                className="block w-full text-center px-6 py-3 bg-safari-gold text-safari-dark font-bold uppercase tracking-wider"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
