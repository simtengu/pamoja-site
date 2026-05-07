"use client";

import { useEffect } from "react";
import { Leaf, Award, Globe, HeartHandshake } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic", once: true, offset: 80 });
  }, []);

  const reasons = [
    {
      id: "conservation",
      icon: <Leaf className="w-8 h-8 text-safari-accent" />,
      title: "Conservation-Driven",
      description: "We operate with a deep respect for nature — using eco-friendly practices that conserve water, energy, and protect the land.",
    },
    {
      id: "authentic",
      icon: <Award className="w-8 h-8 text-safari-accent" />,
      title: "Authentic Comfort",
      description: "Whether it's a tented camp or a serene villa, our lodges blend warm, personalized hospitality with natural beauty.",
    },
    {
      id: "wildlife",
      icon: <Globe className="w-8 h-8 text-safari-accent" />,
      title: "Wildlife-Respectful",
      description: "Our mobile camps follow the Great Migration with minimal impact, offering close encounters with wildlife in their natural rhythm.",
    },
    {
      id: "community",
      icon: <HeartHandshake className="w-8 h-8 text-safari-accent" />,
      title: "Community Focused",
      description: "Rooted in 'Pamoja', we empower local communities through employment, education, and sustainable development initiatives.",
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">

          {/* Left: Image */}
          <div className="flex-1 w-full flex justify-center relative" data-aos="fade-right">
            <div className="relative w-full aspect-[4/5] max-w-lg rounded-sm overflow-hidden shadow-2xl group">
              <img
                src="/images/tarangire-6.jpeg"
                alt="Pamoja Africa Luxury Accommodations"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-safari-dark/20 group-hover:bg-safari-dark/10 transition-colors"></div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-safari-gold rounded-full z-[-1] opacity-50 blur-3xl"></div>
            </div>
            <div className="absolute bg-white p-6 shadow-xl rounded-sm bottom-8 -left-8 md:left-0 z-10 w-64 border-l-4 border-safari-gold">
              <p className="text-3xl font-serif text-safari-dark mb-1">10k+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Happy Guests Globally</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1">
            <span
              className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block"
              data-aos="fade-up"
            >
              Why Choose Pamoja
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-5xl font-serif text-safari-dark mb-8 leading-tight"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Exquisite Properties & Exceptional Stays
            </h2>
            <p
              className="text-gray-600 font-light text-lg leading-relaxed mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              What sets us apart is our collection of unique properties, exceptional personalized service, and sustainable hospitality across Tanzania&apos;s most beautiful landscapes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {reasons.map((reason, i) => (
                <div
                  key={reason.id}
                  className="flex flex-col group p-4 -m-4 rounded-sm hover:bg-safari-light transition-colors"
                  data-aos="fade-up"
                  data-aos-delay={300 + i * 80}
                >
                  <div className="w-16 h-16 bg-safari-light group-hover:bg-white rounded-full flex items-center justify-center mb-4 transition-colors shadow-sm">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-serif text-safari-dark mb-3">{reason.title}</h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
