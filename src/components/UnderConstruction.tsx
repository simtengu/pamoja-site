import React from "react";
import Link from "next/link";
import { Hammer } from "lucide-react";

export default function UnderConstruction({ pageName }: { pageName: string }) {
  return (
    <div className="min-h-screen bg-safari-light flex flex-col justify-center items-center text-center px-4 pt-20">
      <div className="bg-white p-10 md:p-16 shadow-2xl rounded-sm border border-gray-100 max-w-2xl w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-safari-gold"></div>
        <Hammer className="w-16 h-16 text-safari-accent mx-auto mb-6" />
        <h1 className="text-3xl md:text-5xl font-serif text-safari-dark mb-4 font-bold">
          {pageName}
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8 font-light tracking-wide uppercase">
          Coming Soon
        </h2>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto">
          We are currently crafting this page to ensure it meets our luxury standards. 
          Please check back later for updates, or return to our homepage.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-safari-dark text-white font-bold uppercase tracking-wider px-8 py-4 text-sm hover:bg-safari-gold transition-colors duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
}
