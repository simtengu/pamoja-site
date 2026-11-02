"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowRight, Maximize2, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const GALLERY_MOMENTS = [
  {
    id: "01",
    src: "/images/rooms/hideaway-double-1.jpg",
    title: "Canopy Double Suite",
    property: "Tarangire Luxury Hideaway",
    location: "Tarangire",
    slug: "/accommodations",
    story: "Handcrafted timber architecture and billowed canvas tucked beneath ancient baobab trees."
  },
  {
    id: "02",
    src: "/images/rooms/serengeti-luxury-single.jpg",
    title: "Savanna Horizon Tent",
    property: "Pamoja Serengeti Luxury Camp",
    location: "Central Serengeti",
    slug: "/accommodations",
    story: "Uninterrupted views across the golden plains from your private timber veranda."
  },
  {
    id: "03",
    src: "/images/rooms/verdant-double.jpg",
    title: "Plantation Veranda Suite",
    property: "Pamoja Verdant Farm Villa",
    location: "Arusha",
    slug: "/accommodations",
    story: "Warm hardwood interiors paired with serene garden breezes and bespoke artisan furnishings."
  },
  {
    id: "04",
    src: "/images/pamoja-villa-2.jpeg",
    title: "Infinity Pool & Sanctuary",
    property: "Pamoja Farm Villas",
    location: "Karatu Highlands",
    slug: "/accommodations",
    story: "Still waters reflecting the lush Ngorongoro highlands after a day on safari."
  },
  {
    id: "05",
    src: "/images/rooms/migration-single.jpg",
    title: "Wilderness Canvas Retreat",
    property: "Pamoja Migration Camp",
    location: "Serengeti",
    slug: "/accommodations",
    story: "Wake to the sights and sounds of the Great Migration right beyond your tented deck."
  },
  {
    id: "06",
    src: "/images/rooms/farm-villa-double.jpg",
    title: "Honeymoon Canopy Room",
    property: "Pamoja Farm Villas",
    location: "Karatu Highlands",
    slug: "/accommodations",
    story: "Intimate four-poster elegance designed for unforgettable romantic escapes."
  },
  {
    id: "07",
    src: "/images/rooms/baobab-double.jpg",
    title: "Rift Valley Boutique Suite",
    property: "Manyara Baobab Lodge",
    location: "Lake Manyara",
    slug: "/accommodations",
    story: "Elevated comfort perched on the edge of the Great Rift Valley escarpment."
  },
  {
    id: "08",
    src: "/images/rooms/undercanvas-family.jpg",
    title: "Interconnecting Family Pavilion",
    property: "Migration Undercanvas",
    location: "Ndutu / Serengeti",
    slug: "/accommodations",
    story: "Expansive private dining and dual bedrooms crafted for shared family adventures."
  }
];

export default function HomeGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [isPaused, setIsPaused] = useState(false);

  const handleNextActive = useCallback(() => {
    setActiveIndex((prev) => (prev === GALLERY_MOMENTS.length - 1 ? 0 : prev + 1));
  }, []);

  const handlePrevActive = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? GALLERY_MOMENTS.length - 1 : prev - 1));
  }, []);

  const handleNextLightbox = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev < 0) return -1;
      return prev === GALLERY_MOMENTS.length - 1 ? 0 : prev + 1;
    });
  }, []);

  const handlePrevLightbox = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev < 0) return -1;
      return prev === 0 ? GALLERY_MOMENTS.length - 1 : prev - 1;
    });
  }, []);

  // Gentle auto-advance when user isn't hovering or in lightbox
  useEffect(() => {
    if (isPaused || lightboxIndex >= 0) return;
    const timer = setInterval(() => {
      handleNextActive();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, lightboxIndex, handleNextActive]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex >= 0) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex < 0) return;
      if (e.key === "Escape") setLightboxIndex(-1);
      if (e.key === "ArrowRight") handleNextLightbox();
      if (e.key === "ArrowLeft") handlePrevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNextLightbox, handlePrevLightbox]);

  const activeMoment = GALLERY_MOMENTS[activeIndex];

  return (
    <section
      className="py-24 md:py-32 bg-safari-light px-4 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto">
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-safari-gold"></span>
              <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs">
                Our Stays In Pictures
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-safari-dark leading-[1.1] mb-4">
              Moments Captured
            </h2>
            <p className="text-gray-600 font-light text-base sm:text-lg leading-relaxed">
              An intimate look inside our lodges, villas, and mobile camps across Northern Tanzania—where wild horizons meet handcrafted comfort.
            </p>
          </div>

          {/* Right Controls & Counter */}
          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-6 border-t lg:border-t-0 border-safari-dark/10 pt-6 lg:pt-0">
            <div className="flex items-baseline gap-2 font-serif">
              <span className="text-3xl md:text-4xl text-safari-dark font-normal">
                {activeMoment.id}
              </span>
              <span className="text-sm text-gray-400">/ 0{GALLERY_MOMENTS.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevActive}
                aria-label="Previous moment"
                className="w-11 h-11 rounded-full border border-safari-dark/20 flex items-center justify-center text-safari-dark hover:bg-safari-dark hover:text-white hover:border-safari-dark transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextActive}
                aria-label="Next moment"
                className="w-11 h-11 rounded-full border border-safari-dark/20 flex items-center justify-center text-safari-dark hover:bg-safari-dark hover:text-white hover:border-safari-dark transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-safari-dark hover:text-safari-gold transition-colors py-2 border-b border-safari-dark/30 hover:border-safari-gold"
            >
              <span>Full Archive</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Desktop Interactive Expanding Accordion Panorama */}
        <div className="hidden lg:flex h-[580px] w-full gap-3">
          {GALLERY_MOMENTS.map((item, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => {
                  if (isActive) {
                    setLightboxIndex(idx);
                  } else {
                    setActiveIndex(idx);
                  }
                }}
                className={`relative h-full overflow-hidden rounded-sm cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isActive ? "flex-[5.5] shadow-2xl" : "flex-[0.85] opacity-85 hover:opacity-100"
                }`}
              >
                <img
                  src={item.src}
                  alt={`${item.property} — ${item.title}`}
                  className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                    isActive ? "scale-100" : "scale-110"
                  }`}
                />

                {/* Subtle Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/85 via-black/20 to-black/10"
                      : "bg-safari-dark/55 hover:bg-safari-dark/35"
                  }`}
                />

                {/* Collapsed Vertical Spine Label */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-between py-8 transition-opacity duration-300 ${
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                  }`}
                >
                  <span className="text-safari-gold font-serif text-lg tracking-wider">
                    {item.id}
                  </span>
                  <span
                    className="text-white/90 text-[11px] font-bold uppercase tracking-[0.25em] whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                  >
                    {item.property}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40"></span>
                </div>

                {/* Active Expanded Editorial Stage */}
                <div
                  className={`absolute inset-0 p-8 xl:p-10 flex flex-col justify-between transition-all duration-500 ${
                    isActive
                      ? "opacity-100 translate-y-0 delay-150"
                      : "opacity-0 translate-y-4 pointer-events-none"
                  }`}
                >
                  {/* Top Bar inside active frame */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-black/45 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm border border-white/15">
                      <MapPin className="w-3 h-3 text-safari-gold" />
                      {item.location}
                    </span>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxIndex(idx);
                      }}
                      aria-label={`Inspect ${item.title} in full screen`}
                      className="w-10 h-10 rounded-full bg-black/45 backdrop-blur-md border border-white/20 text-white hover:bg-safari-gold hover:text-safari-dark hover:border-safari-gold flex items-center justify-center transition-all duration-300"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Editorial Caption inside active frame */}
                  <div className="max-w-xl">
                    <div className="flex items-center gap-3">
                      <span className="text-safari-gold font-serif italic text-xl">
                        {item.id}
                      </span>
                      <span className="w-6 h-[1px] bg-safari-gold/60"></span>
                      <span className="text-white text-sm xl:text-base font-serif tracking-wide">
                        {item.property}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet Featured Stage + Filmstrip */}
        <div className="lg:hidden flex flex-col gap-4">
          <div
            onClick={() => setLightboxIndex(activeIndex)}
            className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-sm overflow-hidden shadow-xl cursor-pointer group"
          >
            <img
              key={activeMoment.id}
              src={activeMoment.src}
              alt={activeMoment.property}
              className="w-full h-full object-cover animate-[fadeIn_0.4s_ease-out]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                  <MapPin className="w-3 h-3 text-safari-gold" />
                  {activeMoment.location}
                </span>
                <span className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-safari-gold font-serif italic text-lg">
                  {activeMoment.id}
                </span>
                <span className="w-5 h-[1px] bg-safari-gold/60"></span>
                <span className="text-white text-sm sm:text-base font-serif tracking-wide">
                  {activeMoment.property}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Thumbnail Filmstrip */}
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
            {GALLERY_MOMENTS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`relative aspect-square rounded-sm overflow-hidden transition-all ${
                    isActive
                      ? "ring-2 ring-safari-gold ring-offset-2 ring-offset-safari-light opacity-100"
                      : "opacity-55 hover:opacity-90"
                  }`}
                >
                  <img
                    src={item.src}
                    alt={item.property}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxIndex >= 0 && (
        <div
          onClick={() => setLightboxIndex(-1)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
        >
          <button
            onClick={() => setLightboxIndex(-1)}
            className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white transition-colors p-2 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-9 h-9" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevLightbox();
            }}
            className="absolute left-4 md:left-8 z-[110] text-white/70 hover:text-white bg-white/10 hover:bg-safari-gold hover:text-safari-dark w-12 h-12 flex items-center justify-center rounded-full transition-all focus:outline-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextLightbox();
            }}
            className="absolute right-4 md:right-8 z-[110] text-white/70 hover:text-white bg-white/10 hover:bg-safari-gold hover:text-safari-dark w-12 h-12 flex items-center justify-center rounded-full transition-all focus:outline-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl flex flex-col items-center justify-center select-none"
          >
            <img
              key={lightboxIndex}
              src={GALLERY_MOMENTS[lightboxIndex].src}
              alt={GALLERY_MOMENTS[lightboxIndex].property}
              className="max-w-full max-h-[80vh] object-contain shadow-2xl rounded-sm"
            />
            <div className="mt-6 text-center">
              <span className="text-safari-gold text-[11px] font-bold uppercase tracking-[0.25em] block">
                {GALLERY_MOMENTS[lightboxIndex].property} — {GALLERY_MOMENTS[lightboxIndex].location}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
