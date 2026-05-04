"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Compass, Users as UsersIcon, ChevronDown, CheckCircle2, MapPin, Shield, Heart, Zap, ChevronLeft, ChevronRight } from "lucide-react";

export function AboutHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth"
    });
  };

  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-safari-dark">
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/migration-2.jpeg"
          alt="Pamoja Africa Heritage"
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
          The Pamoja Heritage
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight"
        >
          Inspired by Nature, <br/> Crafted for Comfort
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 font-light text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          Founded on a sheer love for the untamed beauty of East Africa, Pamoja has grown from a single camp to a legacy of ethical luxury embedded in Tanzania's most dramatic landscapes.
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

export function OurStory() {
  return (
    <section className="py-24 bg-white px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Images Grid */}
        <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
          <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-sm overflow-hidden shadow-2xl z-10">
            <img src="/images/pamoja1.jpg" alt="Our founder" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-sm overflow-hidden shadow-2xl border-4 border-white z-20">
            <img src="/images/baobab-2.jpeg" alt="The original Baobab" className="w-full h-full object-cover" />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-safari-accent opacity-10 rounded-full blur-2xl"></div>
        </div>

        {/* Text Area */}
        <div className="w-full lg:w-1/2">
          <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
            Our Background
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-8 leading-tight">
            How The Dream Began
          </h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
            Pamoja Africa was born over two decades ago beneath the sweeping canopy of a giant Baobab tree. Our founders, guided by a profound respect for the delicate Tanzanian ecosystem, envisioned a hospitality experience that didn't just exist *on* the land, but worked fundamentally *with* it.
          </p>
          <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
            The philosophy was simple: “Pamoja,” meaning “Together” in Swahili. Together with the local communities, together with conservationists, and together with discerning travelers seeking a true connection to nature. Today, our 7 distinct properties span from the Ngorongoro highlands to the remote plains of the Serengeti, serving as sanctuaries of comfort without compromising our rugged, wild heritage.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
            <div>
              <span className="block text-4xl font-serif text-safari-dark mb-1">07</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Luxury Properties</span>
            </div>
            <div>
              <span className="block text-4xl font-serif text-safari-dark mb-1">20+</span>
              <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Years of Heritage</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export function VisionMission() {
  return (
    <section className="py-24 bg-safari-light px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Vision Card */}
        <div className="bg-safari-dark text-white p-12 md:p-16 rounded-sm relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-safari-gold opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
          <Compass className="w-12 h-12 text-safari-gold mb-8" />
          <h3 className="text-3xl font-serif mb-6">Our Vision</h3>
          <p className="text-gray-300 font-light leading-relaxed text-lg mb-8">
            To set the absolute benchmark for ethical luxury across the African continent. We envision a future where high-end tourism operates as the primary funding mechanism for wildlife preservation and long-term community elevation.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start text-sm text-gray-400 font-light"><CheckCircle2 className="w-4 h-4 text-safari-accent mr-3 mt-0.5 flex-shrink-0" /> Zero-carbon footprint by 2030</li>
            <li className="flex items-start text-sm text-gray-400 font-light"><CheckCircle2 className="w-4 h-4 text-safari-accent mr-3 mt-0.5 flex-shrink-0" /> 100% solar power implementation</li>
            <li className="flex items-start text-sm text-gray-400 font-light"><CheckCircle2 className="w-4 h-4 text-safari-accent mr-3 mt-0.5 flex-shrink-0" /> Continuous wildlife habitat expansion</li>
          </ul>
        </div>

        {/* Mission Card */}
        <div className="bg-white p-12 md:p-16 rounded-sm relative overflow-hidden border border-gray-100 group hover:-translate-y-2 transition-transform duration-500 shadow-xl">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-safari-accent opacity-5 rounded-full blur-2xl group-hover:opacity-20 transition-opacity"></div>
          <Leaf className="w-12 h-12 text-safari-accent mb-8" />
          <h3 className="text-3xl font-serif text-safari-dark mb-6">Our Mission</h3>
          <p className="text-gray-600 font-light leading-relaxed text-lg mb-8">
            To immerse our guests in the most breathtaking, unfiltered aspects of wild Africa while wrapping them in absolute comfort and safety. We strive to create deeply personal, unforgettable experiences that turn our guests into lifelong ambassadors for conservation.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start text-sm text-gray-500 font-light"><CheckCircle2 className="w-4 h-4 text-safari-gold mr-3 mt-0.5 flex-shrink-0" /> Empowering local Tanzanian workforces</li>
            <li className="flex items-start text-sm text-gray-500 font-light"><CheckCircle2 className="w-4 h-4 text-safari-gold mr-3 mt-0.5 flex-shrink-0" /> Supporting regional anti-poaching units</li>
            <li className="flex items-start text-sm text-gray-500 font-light"><CheckCircle2 className="w-4 h-4 text-safari-gold mr-3 mt-0.5 flex-shrink-0" /> Preserving indigenous cultural heritage</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export function TeamSection() {
  const team = [
    {
      name: "Jackson Mrema",
      role: "Head Safari Guide",
      image: "/images/team-1.jpg", 
      bio: "With over 15 years tracking the migration, Jackson knows the Serengeti like the back of his hand."
    },
    {
      name: "Sarah Jenkins",
      role: "Operations Director",
      image: "/images/team-2.jpg", 
      bio: "Sarah ensures every guest experience seamlessly blends flawless luxury with raw adventure."
    },
    {
      name: "Chef Amadi",
      role: "Executive Bush Chef",
      image: "/images/team-3.jpg", 
      bio: "Amadi transforms local Tanzanian ingredients into five-star menus served under the absolute wild."
    }
  ];

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
          Meet The Experts
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-16">
          The Faces Behind Pamoja
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center group">
              <div className="w-48 h-48 rounded-full overflow-hidden mb-8 shadow-xl relative grayscale group-hover:grayscale-0 transition-all duration-700 max-w-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif text-safari-dark mb-2">{member.name}</h3>
              <span className="text-xs uppercase tracking-widest font-bold text-safari-accent mb-4">
                {member.role}
              </span>
              <p className="text-gray-500 font-light text-sm px-4 leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section className="py-24 bg-safari-dark relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-safari-gold opacity-5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-safari-accent opacity-5 rounded-full blur-[100px]"></div>

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
          Ready to Write Your <br /> Own <span className="text-safari-gold">Safari Story?</span>
        </h2>
        <p className="text-gray-300 font-light text-lg mb-12 max-w-2xl mx-auto">
          Whether it's the thrill of the hunt or the peace of the plains, Pamoja Africa is your gateway to an unforgettable Tanzanian adventure.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/accommodations" 
            className="px-12 py-5 bg-safari-gold hover:bg-safari-gold/90 text-safari-dark font-bold uppercase text-xs tracking-widest transition-all hover:scale-105"
          >
            Explore Properties
          </a>
          <a 
            href="/contact" 
            className="px-12 py-5 border border-white/30 hover:border-white text-white font-bold uppercase text-xs tracking-widest transition-all hover:bg-white/10"
          >
            Speak to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}

export function LocationsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const locations = [
    {
      name: "Pamoja Serengeti Luxury Camp",
      region: "Central Serengeti",
      image: "/images/serengeti-1.jpeg",
      desc: "An authentic canvas experience in the heart of the great migration path."
    },
    {
      name: "Tarangire Luxury Hideaway",
      region: "Tarangire National Park",
      image: "/images/tarangire-2.jpeg",
      desc: "A secluded sanctuary among colossal baobabs and vast elephant herds."
    },
    {
      name: "Pamoja Farm Villas",
      region: "Karatu / Ngorongoro",
      image: "/images/pamoja-villa-1.jpeg",
      desc: "Boutique villas set within lush gardens, the perfect base for Ngorongoro Crater."
    },
    {
      name: "Pamoja Migration Camp",
      region: "Northern Serengeti",
      image: "/images/migration-3.jpeg",
      desc: "Strategically located to witness the dramatic Mara River crossings."
    },
    {
      name: "Manyara Baobab Lodge",
      region: "Lake Manyara",
      image: "/images/baobab-3.jpeg",
      desc: "Nested in an ancient baobab forest overlooking the picturesque Lake Manyara."
    },
    {
      name: "Migration Undercanvas",
      region: "Mobile (Serengeti)",
      image: "/images/undercanvas-2.jpeg",
      desc: "A boutique mobile camp that follows the pulse of the Great Wildebeest Migration."
    },
    {
      name: "Pamoja Verdant Farm Villa",
      region: "Karatu Highlands",
      image: "/images/pamoja-villa-6.jpeg",
      desc: "A private estate offerring absolute tranquility and farm-to-table experiences."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      
      // Calculate card width based on current visibility (1 mobile, 3 desktop)
      let cardWidth = clientWidth; // Mobile default
      if (window.innerWidth >= 1024) cardWidth = clientWidth / 3;
      else if (window.innerWidth >= 768) cardWidth = clientWidth / 2;
      
      const scrollTo = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth } = scrollRef.current;
      
      // Trigger jump when close to either cloned end
      const buffer = scrollWidth / 3;
      if (scrollLeft <= 10) {
        scrollRef.current.scrollLeft = buffer;
      } else if (scrollLeft >= (scrollWidth - scrollRef.current.clientWidth - 10)) {
        scrollRef.current.scrollLeft = buffer;
      }
    }
  };

  const extendedLocations = [...locations, ...locations, ...locations];

  useEffect(() => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      scrollRef.current.scrollLeft = scrollWidth / 3;
    }
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      scroll('right');
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-safari-light px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
              Global Presence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">
              Our Iconic Destinations
            </h2>
          </div>
          
          <div className="flex gap-4 items-center">
            <p className="text-gray-500 font-light max-w-xs hidden lg:block mr-8 text-sm italic">
              Explore our unique collection of luxury properties one by one.
            </p>
            <button 
              onClick={() => {
                scroll('left');
                setIsPaused(true);
              }}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all bg-white text-safari-dark hover:bg-safari-gold hover:border-safari-gold cursor-pointer z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => {
                scroll('right');
                setIsPaused(true);
              }}
              className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center transition-all bg-white text-safari-dark hover:bg-safari-gold hover:border-safari-gold cursor-pointer z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {extendedLocations.map((loc, index) => (
            <div 
              key={`${loc.name}-${index}`} 
              className="flex-none w-full md:w-1/2 lg:w-1/3 snap-start px-4 group cursor-pointer"
            >
              <div className="relative h-[450px] mb-6 overflow-hidden rounded-sm shadow-xl">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/90 via-safari-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                   <div className="flex items-center text-safari-gold mb-3">
                     <MapPin className="w-4 h-4 mr-2" />
                     <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{loc.region}</span>
                   </div>
                   <h3 className="text-white text-2xl font-serif mb-2 group-hover:text-safari-gold transition-colors">{loc.name}</h3>
                   <div className="w-12 h-0.5 bg-safari-gold/50 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
              <p className="text-gray-500 text-sm font-light leading-relaxed px-2">
                {loc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export function ValuesSection() {
  const values = [
    {
      title: "Authentic Connection",
      desc: "We prioritize genuine interactions with nature and local cultures over superficial luxury.",
      icon: Heart
    },
    {
      title: "Sustainable Heritage",
      desc: "Every step we take is measured by its impact on the environment and future generations.",
      icon: Leaf
    },
    {
      title: "Tanzanian Warmth",
      desc: "Hospitality is in our DNA. We welcome every guest as part of the Pamoja family.",
      icon: Shield
    },
    {
      title: "Pioneering Spirit",
      desc: "We constantly innovate to improve our service while preserving the wild's integrity.",
      icon: Zap
    }
  ];

  return (
    <section className="py-24 bg-white px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-safari-gold to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
            The Pamoja Way
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {values.map((v) => (
            <div key={v.title} className="text-center group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-safari-light border border-gray-100 mb-8 group-hover:bg-safari-dark group-hover:border-safari-dark transition-colors duration-500">
                <v.icon className="w-8 h-8 text-safari-gold" />
              </div>
              <h3 className="text-xl font-serif text-safari-dark mb-4">{v.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed px-4">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
