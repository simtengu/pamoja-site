"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronLeft, ChevronRight, Maximize2, Tag, LayoutGrid } from "lucide-react";

// Image Data Structure
interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  accommodationId: string;
  accommodationName: string;
  tags: string[];
}

const galleryImages: GalleryImage[] = [
  // Pamoja Farm Villa
  { id: "pfv-1", url: "/images/pamoja-villa-1.jpeg", alt: "Farm Villa Exterior", accommodationId: "pamoja-farm-villa", accommodationName: "Pamoja Farm Villa", tags: ["Views", "Architecture"] },
  { id: "pfv-2", url: "/images/pvilla.jpeg", alt: "Farm Villa Garden", accommodationId: "pamoja-farm-villa", accommodationName: "Pamoja Farm Villa", tags: ["Views", "Nature"] },
  { id: "pfv-3", url: "/images/dining.jpeg", alt: "Farm Villa Dining", accommodationId: "pamoja-farm-villa", accommodationName: "Pamoja Farm Villa", tags: ["Food/Meals", "Room"] },
  
  // Tarangire Luxury Hideaway
  { id: "tlh-1", url: "/images/tarangire-1.jpeg", alt: "Tarangire Elephant View", accommodationId: "tarangire-luxury-hideaway", accommodationName: "Tarangire Luxury Hideaway", tags: ["Wildlife", "Views"] },
  { id: "tlh-2", url: "/images/tarangire-3.jpeg", alt: "Tarangire Suite Interior", accommodationId: "tarangire-luxury-hideaway", accommodationName: "Tarangire Luxury Hideaway", tags: ["Room", "SPA"] },
  { id: "tlh-3", url: "/images/tarangire-8.jpeg", alt: "Tarangire Pool sunset", accommodationId: "tarangire-luxury-hideaway", accommodationName: "Tarangire Luxury Hideaway", tags: ["Pool", "Views"] },
  
  // Manyara Baobab Lodge
  { id: "mbl-1", url: "/images/baobab-1.jpeg", alt: "Baobab Lodge Entrance", accommodationId: "manyara-baobab-lodge", accommodationName: "Manyara Baobab Lodge", tags: ["Views", "Architecture"] },
  { id: "mbl-2", url: "/images/baobab-4.jpeg", alt: "Manyara Pool deck", accommodationId: "manyara-baobab-lodge", accommodationName: "Manyara Baobab Lodge", tags: ["Pool", "Views"] },
  { id: "mbl-3", url: "/images/meal.jpeg", alt: "Manyara Gourmet Lunch", accommodationId: "manyara-baobab-lodge", accommodationName: "Manyara Baobab Lodge", tags: ["Food/Meals"] },

  // Pamoja Serengeti Luxury Camp
  { id: "pslc-1", url: "/images/serengeti-1.jpeg", alt: "Serengeti Camp Exterior", accommodationId: "pamoja-serengeti-luxury-camp", accommodationName: "Pamoja Serengeti Luxury Camp", tags: ["Nature", "Views"] },
  { id: "pslc-2", url: "/images/serengeti-2.jpeg", alt: "Serengeti Tent Interior", accommodationId: "pamoja-serengeti-luxury-camp", accommodationName: "Pamoja Serengeti Luxury Camp", tags: ["Room"] },
  { id: "pslc-3", url: "/images/serengeti-3.jpeg", alt: "Serengeti Lion View", accommodationId: "pamoja-serengeti-luxury-camp", accommodationName: "Pamoja Serengeti Luxury Camp", tags: ["Wildlife"] },

  // Pamoja Migration Camp
  { id: "pmc-1", url: "/images/migration-1.jpeg", alt: "Migration Camp Tents", accommodationId: "pamoja-migration-camp", accommodationName: "Pamoja Migration Camp", tags: ["Nature", "Wildlife"] },
  { id: "pmc-2", url: "/images/migration-2.jpeg", alt: "Migration Camp Breakfast", accommodationId: "pamoja-migration-camp", accommodationName: "Pamoja Migration Camp", tags: ["Food/Meals", "Nature"] },
  { id: "pmc-3", url: "/images/migration-3.jpeg", alt: "Migration Camp Plains", accommodationId: "pamoja-migration-camp", accommodationName: "Pamoja Migration Camp", tags: ["Views" , "Wildlife"] },

  // Mixed / General Luxury
  { id: "mix-1", url: "/images/massage.jpg", alt: "Luxury Wellness SPA", accommodationId: "any", accommodationName: "Wellness", tags: ["SPA", "Health"] },
];

const accommodationsList = [
  { id: "all", name: "All Accommodations" },
  { id: "pamoja-farm-villa", name: "Pamoja Farm Villa" },
  { id: "tarangire-luxury-hideaway", name: "Tarangire Luxury Hideaway" },
  { id: "manyara-baobab-lodge", name: "Manyara Baobab Lodge" },
  { id: "pamoja-serengeti-luxury-camp", name: "Serengeti Luxury Camp" },
  { id: "pamoja-migration-camp", name: "Pamoja Migration Camp" }
];

const allTags = ["Food/Meals", "SPA", "Room", "Pool", "Wildlife", "Views", "Nature", "Architecture"];

export default function LegacyGallery() {
  const [selectedAcc, setSelectedAcc] = useState("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Filtering Logic
  const filteredImages = useMemo(() => {
    return galleryImages.filter(img => {
      const matchAcc = selectedAcc === "all" || img.accommodationId === selectedAcc;
      const matchTags = selectedTags.length === 0 || selectedTags.every(tag => img.tags.includes(tag));
      return matchAcc && matchTags;
    });
  }, [selectedAcc, selectedTags]);

  const currentImage = modalIndex !== null ? filteredImages[modalIndex] : null;

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const nextImage = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-safari-light pb-24">
      {/* Short Hero for Navbar Contrast */}
      <section className="relative h-[40vh] w-full overflow-hidden bg-safari-dark">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src="/images/migration-1.jpeg" className="w-full h-full object-cover opacity-60" alt="Pamoja Gallery" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-safari-dark/30"></div>
        </motion.div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-white text-4xl md:text-7xl font-serif mb-4 uppercase tracking-widest"
          >
            Legacy Gallery
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            className="h-[2px] bg-safari-gold mb-6"
          />
          <motion.p className="text-gray-300 font-light max-w-xl mx-auto italic">This is the legacy design for the gallery, preserved for future data structure updates.</motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-safari-light rounded-full text-safari-dark">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-safari-dark">Accommodation</h3>
                <select 
                   value={selectedAcc}
                   onChange={(e) => setSelectedAcc(e.target.value)}
                   className="bg-transparent border-none outline-none text-safari-accent font-serif text-lg py-1 cursor-pointer min-w-[200px]"
                >
                  {accommodationsList.map(acc => (
                    <option key={acc.id} value={acc.id} className="text-safari-dark">{acc.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="h-px w-full md:w-px md:h-12 bg-gray-100 hidden md:block"></div>

            <div className="flex flex-wrap items-center gap-6">
               <div className="flex items-center gap-3 text-safari-dark font-bold uppercase text-xs tracking-widest">
                  <Filter className="w-4 h-4 text-safari-gold" /> Filter by Tags:
               </div>
               <div className="flex flex-wrap gap-2">
                  {allTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagToggle(tag)}
                      className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest transition-all duration-300 border
                        ${selectedTags.includes(tag) 
                          ? "bg-safari-dark text-white border-safari-dark" 
                          : "bg-white text-gray-500 border-gray-100 hover:border-safari-accent"}
                      `}
                    >
                      {tag}
                    </button>
                  ))}
               </div>
               {selectedTags.length > 0 && (
                 <button 
                   onClick={() => setSelectedTags([])}
                   className="text-[10px] uppercase font-bold text-red-500 hover:underline flex items-center"
                 >
                   Clear filters
                 </button>
               )}
            </div>
          </div>
          
          <div className="text-[10px] uppercase text-gray-400 font-bold tracking-[0.2em] mb-4">
             Showing {filteredImages.length} results
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/5] bg-gray-200 group cursor-pointer overflow-hidden shadow-xl rounded-sm"
                onClick={() => setModalIndex(index)}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                  <span className="text-safari-gold text-[10px] uppercase font-bold tracking-widest mb-2 block">{img.accommodationName}</span>
                  <h4 className="text-white text-xl font-serif mb-4">{img.alt}</h4>
                  <div className="flex flex-wrap gap-2">
                    {img.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-white/10 text-[9px] uppercase font-bold text-gray-300 rounded-sm">{tag}</span>
                    ))}
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform">
                     <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-24">
            <LayoutGrid className="w-16 h-16 text-gray-200 mx-auto mb-6" />
            <p className="text-gray-400 font-serif text-2xl italic">No luxury moments found with these filters.</p>
            <button onClick={() => {setSelectedAcc("all"); setSelectedTags([])}} className="mt-6 text-safari-gold hover:underline font-bold uppercase text-xs tracking-widest">Reset All Filters</button>
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalIndex !== null && currentImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setModalIndex(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[110]"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative w-full h-full max-w-5xl mx-auto flex flex-col justify-center gap-6">
              
              <div className="relative w-full h-[60vh] md:h-[75vh]">
                 <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentImage.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      src={currentImage.url} 
                      className="w-full h-full object-contain"
                      alt={currentImage.alt} 
                    />
                 </AnimatePresence>
              </div>

              <div className="text-center">
                 <span className="text-safari-gold text-xs uppercase font-bold tracking-widest">{currentImage.accommodationName}</span>
                 <h2 className="text-white text-2xl md:text-3xl font-serif mt-2 mb-4">{currentImage.alt}</h2>
                 <div className="flex justify-center gap-3">
                    {currentImage.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 text-[10px] uppercase font-bold text-gray-400 rounded-sm items-center flex gap-2">
                        <Tag className="w-3 h-3 text-safari-gold" /> {tag}
                      </span>
                    ))}
                 </div>
              </div>

              {/* Navigation */}
              <button 
                onClick={prevImage}
                className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 p-4 text-white hover:text-safari-gold transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 p-4 text-white hover:text-safari-gold transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest text-center mt-4">
                 {modalIndex + 1} / {filteredImages.length}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
