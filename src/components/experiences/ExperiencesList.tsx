"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const experiencesData = [
  {
    id: "canoeing-manyara",
    title: "Lake Manyara Canoeing",
    properties: ["Manyara Baobab Lodge"],
    description: "Glide silently past sleeping hippos and along the shores of Lake Manyara. This serene canoe safari offers a unique perspective on the aquatic life and spectacular birdlife, including thousands of pink flamingos.",
    duration: "2-3 Hours",
    included: ["Expert Canoe Guide", "Safety Equipment", "Refreshments"],
    images: ["/images/experiences/lake-manyara-canoeing.jpg"],
  },
  {
    id: "mto-wa-mbu-tour",
    title: "Mto wa Mbu Cultural Town Tour",
    properties: ["Manyara Baobab Lodge"],
    description: "Immerse yourself in the vibrant melting pot of Mto wa Mbu, where over 120 Tanzanian tribes coexist in harmony. Explore the bustling local market—a sensory explosion where you can find fresh lake fish, over 30 varieties of bananas, and unique local spices. Witness traditional craftsmanship and experience the authentic, rhythmic pulse of this unique agricultural hub at the gateway to the Rift Valley.",
    duration: "3-4 Hours",
    included: ["Local Cultural Guide", "Market Entrance", "Traditional Lunch", "Fruit Tasting"],
    images: ["/images/experiences/Mto-wa-Mbu-Cultural-Tour.jpg"],
  },
  {
    id: "walking-safari-verdant",
    title: "Guided Forest Walking Safari",
    properties: ["Pamoja Verdant Farm Villa"],
    description: "Venture into the lush montane forests of Arusha National Park, located just moments from Pamoja Verdant. Accompanied by an armed ranger, this intimate walking safari allows you to track wildlife on foot, from graceful giraffes and buffalo to the striking Black-and-white colobus monkeys leaping through the canopy above.",
    duration: "2-4 Hours",
    included: ["Armed Ranger", "Tracking Guide", "Bottled Water"],
    images: ["/images/experiences/forest-walking-safari.jpg", "/images/experiences/forest-walk-safari-2.jpg"],
  },
  {
    id: "arusha-city-tour",
    title: "Arusha City Tour",
    properties: ["Pamoja Verdant Farm Villa"],
    description: "Explore the vibrant heart of Tanzania's safari capital. Visit the local markets, the cultural heritage center, and experience the bustling daily life of Arusha town.",
    duration: "Half Day",
    included: ["Private Transport", "Local City Guide", "Market Visit"],
    images: ["/images/experiences/arusha-city-tour.jpg", "/images/experiences/arusha-city-tour-1.webp"],
  },
  {
    id: "lake-duluti-tour",
    title: "Lake Duluti Canoeing & Forest Walk",
    properties: ["Pamoja Verdant Farm Villa"],
    description: "Discover the serenity of Lake Duluti, a stunning crater lake on the slopes of Mount Meru. Enjoy a peaceful canoe safari across the mirrored waters, followed by a guided nature walk through the ancient forest canopy that rings the lake, teeming with birdlife and legend.",
    duration: "Half Day",
    included: ["Canoe Equipment", "Professional Nature Guide", "Private Transport", "Refreshments"],
    images: ["/images/experiences/Lake_Duluti.jpg", "/images/experiences/Lake_Duluti_x_66.jpg"],
  },
  {
    id: "balloon-safari",
    title: "Serengeti Hot Air Balloon",
    properties: ["Pamoja Migration Camp", "Migration Undercanvas", "Pamoja Serengeti Luxury Camp"],
    description: "Float above the endless plains of the Serengeti as the sun rises. Witness the Great Migration and predators on the prowl from a breathtaking vantage point, followed by a champagne breakfast in the bush.",
    duration: "Morning",
    included: ["Balloon Flight", "Champagne Breakfast", "Flight Certificate"],
    images: ["/images/experiences/serengeti-national-park-baloon-safari.jpg"],
  },
  {
    id: "mara-river-crossing",
    title: "Wildebeest Mara River Crossing",
    properties: ["Migration Undercanvas", "Pamoja Migration Camp"],
    description: "Witness one of nature's most spectacular events. Join our expert guides to position yourself perfectly along the Mara River and watch thousands of wildebeest brave the crocodile-infested waters in their dramatic quest for fresh grazing.",
    duration: "Full Day",
    included: ["Expert Safari Guide", "Packed Lunch", "4x4 Safari Vehicle"],
    images: ["/images/experiences/wildebeest-migration-safari.jpg", "/images/experiences/wildebeest-migration-1.jpg"],
  },
  {
    id: "maasai-boma",
    title: "Maasai Boma Visit",
    properties: ["Tarangire Luxury Hideaway"],
    description: "Experience the rich culture of the Maasai people. Visit a traditional boma, learn about their nomadic lifestyle, witness traditional jumping dances, and see local beadwork artisans at work.",
    duration: "2-3 Hours",
    included: ["Village Entry Fee", "Cultural Guide", "Traditional Dance"],
    images: ["/images/experiences/maasai-boma.jpg", "/images/experiences/maasai-boma-1.webp", "/images/experiences/maasai-boma-2.jpg"],
  },
  {
    id: "coffee-banana-tour",
    title: "Coffee & Banana Farm Tour",
    properties: ["Pamoja Farm Villas", "Pamoja Verdant Farm Villa"],
    description: "Walk through the lush highlands of Karatu. Discover how organic coffee and bananas are grown, harvested, and processed by local farmers. Conclude with a freshly brewed cup of Tanzanian coffee.",
    duration: "2 Hours",
    included: ["Farm Guide", "Coffee Tasting", "Walking Tour"],
    images: ["/images/experiences/coffee-farm-tour-1.jpg", "/images/experiences/coffee-farm-tour-2.jpg", "/images/experiences/coffee-farm-tour-3.jpg", "/images/experiences/coffee-farm-tour-4.jpeg"],
  },
  {
    id: "karatu-town-tour",
    title: "Karatu Town & Market Tour",
    properties: ["Pamoja Farm Villas"],
    description: "Immerse yourself in the local atmosphere of Karatu town. Visit the vibrant markets, interact with friendly locals, and get a true taste of everyday Tanzanian life outside the safari parks.",
    duration: "2-3 Hours",
    included: ["Local Guide", "Market Entrance", "Transport"],
    images: ["/images/experiences/karatu-town-1.jpg", "/images/experiences/karatu-town-2.jpeg"],
  },
  {
    id: "elephant-caves-trek",
    title: "Elephant Caves & Endoro Waterfall Trek",
    properties: ["Pamoja Farm Villas"],
    description: "Immerse yourself in the vibrant wilderness of the Ngorongoro highlands on an enjoyable walking safari designed for anyone with a moderate fitness level. Accompanied by an armed ranger, you will trek through verdant vegetation, listening to the rich sounds of the forest as you head toward the famous Elephant Caves. Here, you will witness the massive natural formations carved into the hillsides by elephants seeking essential minerals. Your journey through the lush rainforest culminates at the beautiful Endoro Waterfall, a refreshing and picturesque sight that offers the perfect, active midday break to experience the African bush on foot.",
    duration: "Half Day",
    included: ["Armed Ranger", "Forest Fees", "Bottled Water"],
    images: ["/images/experiences/elephant-caves-main-image.jpg", "/images/experiences/elephant-caves-1.jpg", "/images/experiences/elephant-caves-2.jpg", "/images/experiences/elephant-caves-3.jpg"],
  },
  {
    id: "soccer-with-community",
    title: "Soccer with Community",
    properties: ["Pamoja Farm Villas", "Manyara Baobab Lodge", "Tarangire Luxury Hideaway", "Pamoja Verdant Farm Villa"],
    description: "Connect with the local Tanzanian spirit through the beautiful game. Join residents and guests for a friendly match on a community pitch, where football becomes a universal language bridging cultures. A joyful, high-energy way to engage with the heart of the local community and create lasting memories beyond the bush.",
    duration: "1-2 Hours",
    included: ["Football Equipment", "Community Host", "Refreshments"],
    images: ["/images/experiences/soccer-with-community.jpg"],
  }
];

const allProperties = ["All Properties", ...Array.from(new Set(experiencesData.flatMap(exp => exp.properties)))];

function ActivityImageSlider({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex(i => (i + 1) % images.length);

  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
        alt={title}
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Prev / Next buttons — bottom-right */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 z-10">
        <button
          onClick={prev}
          className="p-2 bg-black/50 backdrop-blur-sm text-white hover:bg-safari-gold hover:text-safari-dark transition-colors duration-300 rounded-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-white text-[10px] font-bold uppercase tracking-widest bg-black/40 px-2 py-1 rounded-sm">
          {currentIndex + 1} / {images.length}
        </span>
        <button
          onClick={next}
          className="p-2 bg-black/50 backdrop-blur-sm text-white hover:bg-safari-gold hover:text-safari-dark transition-colors duration-300 rounded-sm"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function ExperiencesList() {
  const [activeFilter, setActiveFilter] = useState("All Properties");

  const filteredExperiences = activeFilter === "All Properties"
    ? experiencesData
    : experiencesData.filter(exp => exp.properties.includes(activeFilter));

  return (
    <section className="bg-safari-light py-16 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
            Tailor Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-10">
            Our Experiences
          </h2>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {allProperties.map((prop) => (
              <button
                key={prop}
                onClick={() => setActiveFilter(prop)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeFilter === prop
                    ? "bg-safari-dark text-white border-safari-dark shadow-lg"
                    : "bg-white text-gray-500 border-gray-200 hover:border-safari-gold hover:text-safari-dark"
                }`}
              >
                {prop}
              </button>
            ))}
          </div>
        </div>

        {/* Experiences List */}
        <div className="space-y-16 mt-16">
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row-reverse bg-white shadow-xl rounded-sm overflow-hidden group"
              >
                {/* Image / Slider Block */}
                <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[450px] overflow-hidden">
                  <ActivityImageSlider images={exp.images} title={exp.title} />
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-serif text-safari-dark mb-4">{exp.title}</h3>
                  <p className="text-gray-600 font-light text-base md:text-lg mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {exp.properties.map(prop => (
                      <div key={prop} className="bg-safari-light border border-safari-gold/20 text-safari-dark text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-sm flex items-center w-fit">
                        <MapPin className="w-3 h-3 mr-2 text-safari-gold" />
                        {prop}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-10">
                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-4 border-b pb-2">Includes</p>
                    {exp.included.map((item) => (
                      <div key={item} className="flex items-center text-sm text-safari-dark font-medium">
                        <CheckCircle className="w-4 h-4 text-safari-gold mr-3" /> {item}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-gray-100 gap-6 mt-auto">
                    <div className="flex items-center text-xs text-gray-400 uppercase tracking-widest font-bold">
                      <Clock className="w-4 h-4 mr-2" /> {exp.duration}
                    </div>
                    <Link
                      href={`/booking?experience=${exp.id}`}
                      className="w-full sm:w-auto px-8 py-4 bg-transparent border border-safari-dark text-safari-dark hover:bg-safari-dark hover:text-white text-xs font-bold uppercase tracking-widest text-center transition-all rounded-sm"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredExperiences.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-500 font-light"
            >
              No experiences found for this property.
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
