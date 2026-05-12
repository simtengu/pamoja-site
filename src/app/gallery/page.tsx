"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, X, ChevronLeft, ChevronRight, Maximize2, LayoutGrid, Loader2 } from "lucide-react";
import { fetchProperties } from "@/lib/api/bookingService";
import { Property } from "@/types/property";

// Transformed Image Structure
interface GalleryItem {
  id: string;
  url: string;
  propertyName: string;
  propertyId: string;
}

export default function GalleryPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPropId, setSelectedPropId] = useState("");
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchProperties();
        setProperties(data);
        if (data.length > 0) {
          setSelectedPropId(data[0].id);
        }
      } catch (error) {
        console.error("Error fetching properties for gallery:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Get items for the selected property only
  const filteredItems = useMemo(() => {
    const prop = properties.find(p => p.id === selectedPropId);
    if (!prop || !prop.photos || !Array.isArray(prop.photos)) return [];
    
    return prop.photos.map((photoUrl, idx) => ({
      id: `${prop.id}-${idx}`,
      url: photoUrl,
      propertyName: prop.name,
      propertyId: prop.id,
    }));
  }, [properties, selectedPropId]);

  const currentItem = modalIndex !== null ? filteredItems[modalIndex] : null;

  const nextImage = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (modalIndex !== null) {
      setModalIndex((modalIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <main className="min-h-screen bg-safari-light pb-24">
      {/* Short Hero for Navbar Contrast */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-safari-dark">
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
            className="text-white text-4xl md:text-7xl font-serif mb-4 tracking-widest"
          >
            Media Gallery
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            className="h-[2px] bg-safari-gold mb-6"
          />
          <motion.p className="text-gray-300 font-light max-w-xl mx-auto italic">A window into the soul of Pamoja Africa luxury and wildlife.</motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-safari-light rounded-full text-safari-dark">
                <LayoutGrid className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-safari-dark">Filter by Property</h3>
                <select 
                   value={selectedPropId}
                   onChange={(e) => setSelectedPropId(e.target.value)}
                   className="bg-transparent border-none outline-none text-safari-accent font-serif text-lg py-1 cursor-pointer min-w-[200px]"
                >
                  {properties.map(prop => (
                    <option key={prop.id} value={prop.id} className="text-safari-dark">{prop.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-[10px] uppercase text-gray-400 font-bold tracking-[0.2em]">
               Showing {filteredItems.length} images
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-12 h-12 text-safari-gold animate-spin" />
            <p className="text-safari-dark/50 font-serif italic">Loading luxury moments...</p>
          </div>
        ) : (
          <>
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-[4/5] bg-gray-200 group cursor-pointer overflow-hidden shadow-xl rounded-sm"
                  >
                    <img 
                      src={item.url} 
                      alt={item.propertyName} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                    />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                      <span className="text-safari-gold text-[10px] uppercase font-bold tracking-widest mb-2 block">Property</span>
                      <h4 className="text-white text-xl font-serif mb-4">{item.propertyName}</h4>
                      
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalIndex(index);
                        }}
                        className="w-12 h-12 bg-white/20 hover:bg-safari-gold/80 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 self-center mb-12 transform translate-y-4 group-hover:translate-y-0"
                      >
                         <Maximize2 className="w-5 h-5 text-white" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
              <div className="text-center py-24">
                <LayoutGrid className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                <p className="text-gray-400 font-serif text-2xl italic">No photos available for this property yet.</p>
              </div>
            )}
          </>
        )}
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {modalIndex !== null && currentItem && (
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
                      key={currentItem.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      src={currentItem.url} 
                      className="w-full h-full object-contain"
                      alt={currentItem.propertyName} 
                    />
                 </AnimatePresence>
              </div>

              <div className="text-center">
                 <span className="text-safari-gold text-xs uppercase font-bold tracking-widest">Property</span>
                 <h2 className="text-white text-2xl md:text-3xl font-serif mt-2 mb-4">{currentItem.propertyName}</h2>
              </div>

              {/* Navigation */}
              <button 
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 p-4 text-white hover:text-safari-gold transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button 
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 p-4 text-white hover:text-safari-gold transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-10 h-10" />
              </button>

              <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest text-center mt-4">
                 {modalIndex + 1} / {filteredItems.length}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
