"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutBrief() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  return (
    <section className="py-20 bg-safari-light px-4 relative">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

        <div className="mb-4" data-aos="fade-up">
          <span className="text-safari-gold font-sans tracking-[0.3em] uppercase text-xs font-bold w-full inline-block">
            Our Journey In Africa
          </span>
          <div className="w-12 h-0.5 bg-safari-accent mx-auto mt-4 mb-8"></div>
        </div>

        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-safari-dark mb-10 leading-[1.2] max-w-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We offer a journey with purpose.
        </h2>

        <p
          className="text-gray-600 font-light text-lg md:text-xl leading-relaxed max-w-3xl mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Rooted in the Swahili word <span className="italic">Pamoja</span>, meaning &ldquo;together,&rdquo; our philosophy reflects unity with the land, wildlife, and local communities. We are a proud Tanzanian-owned collection of eco-conscious lodges and mobile camps, carefully placed in the most breathtaking regions of northern Tanzania.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mt-8 mb-16 px-4 w-full">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "7",   label: "Luxury Properties" },
            { value: "5",   label: "Destinations" },
            { value: "10k+",label: "Happy Guests" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center group border-r border-gray-300 last:border-0 md:last:border-r-0"
              data-aos="fade-up"
              data-aos-delay={300 + i * 80}
            >
              <p className="text-4xl md:text-5xl font-serif text-safari-accent mb-2 group-hover:text-safari-gold transition-colors">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="group flex items-center gap-3 text-safari-dark font-bold uppercase tracking-widest text-sm hover:text-safari-gold transition-colors border-b-2 border-transparent hover:border-safari-gold pb-1"
          data-aos="fade-up"
          data-aos-delay="650"
        >
          Discover Our Story
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
