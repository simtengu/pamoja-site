"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Tent, Home as HomeIcon, Loader2, AlertCircle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Property } from "@/types/property";
import AOS from "aos";
import "aos/dist/aos.css";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getPropertyIcon(name: string) {
  const lower = name.toLowerCase();
  if (lower.includes("camp") || lower.includes("tent") || lower.includes("canvas")) {
    return <Tent className="w-5 h-5 mr-3 text-safari-gold" />;
  }
  return <HomeIcon className="w-5 h-5 mr-3 text-safari-gold" />;
}

function getPropertyType(name: string, amenities: string[]) {
  const lower = name.toLowerCase();
  const amenStr = amenities.join(" ").toLowerCase();
  if (lower.includes("mobile camp")) return "Mobile Camp";
  if (lower.includes("camp") || amenStr.includes("tented")) return "Tented Camp";
  if (lower.includes("lodge")) return "Lodge";
  if (lower.includes("villa")) return "Villa";
  return "Property";
}



// ─── Image Slider ────────────────────────────────────────────────────────────────

function ImageSlider({ photos, name }: { photos: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const slides = photos.slice(0, 4);

  // Graceful fallback: no photos
  if (slides.length === 0) {
    return (
      <div className="aspect-[4/3] w-full bg-safari-dark/10 rounded-sm flex items-center justify-center">
        <HomeIcon className="w-16 h-16 text-safari-dark/20" />
      </div>
    );
  }

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <div className="aspect-[4/3] w-full relative overflow-hidden rounded-sm">
      {/* Slides */}
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${name} — photo ${i + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Subtle dark overlay */}
      <div className="absolute inset-0 bg-safari-dark/15 pointer-events-none" />

      {/* Nav buttons — bottom-left (opposite the floating chip) */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-6 flex items-center gap-2 z-10">
          <button
            onClick={prev}
            aria-label="Previous image"
            className="w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-safari-gold hover:text-safari-dark text-safari-dark rounded-sm shadow-md transition-all duration-200"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={next}
            aria-label="Next image"
            className="w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-safari-gold hover:text-safari-dark text-safari-dark rounded-sm shadow-md transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function PropertyListicle() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialise AOS once on mount
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const q = query(
          collection(db, "properties"),
          where("isPublished", "==", true),
          orderBy("priority", "asc")
        );
        const snapshot = await getDocs(q);
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Property[];
        setProperties(docs);
      } catch (err) {
        console.error("Failed to fetch properties:", err);
        setError("Failed to load accommodations. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  // ── Loading state ──
  if (loading) {
    return (
      <section className="py-24 bg-safari-light px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[400px] gap-4">
          <Loader2 className="w-10 h-10 text-safari-gold animate-spin" />
          <p className="text-safari-dark/60 font-light tracking-wide uppercase text-xs">
            Loading accommodations&hellip;
          </p>
        </div>
      </section>
    );
  }

  // ── Error state ──
  if (error) {
    return (
      <section className="py-24 bg-safari-light px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
          <AlertCircle className="w-10 h-10 text-red-400" />
          <p className="text-gray-600 font-light">{error}</p>
        </div>
      </section>
    );
  }

  // ── Empty state ──
  if (properties.length === 0) {
    return (
      <section className="py-24 bg-safari-light px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[400px] gap-4 text-center">
          <HomeIcon className="w-10 h-10 text-safari-gold/50" />
          <p className="text-gray-500 font-light">No accommodations are available right now.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-safari-light px-4">
      <div className="max-w-7xl mx-auto space-y-32">

        {properties.map((property, index) => {
          const type = getPropertyType(property.name, property.amenities ?? []);
          const icon = getPropertyIcon(property.name);
          const linkId = property.slug || property.id;
          const visibleAmenities = (property.amenities ?? []).slice(0, 6);
          const extraCount = Math.max(0, (property.amenities ?? []).length - 6);
          const FALLBACK_DESCRIPTION =
            "Famous for tree-climbing lions, this lodge hugs the rift valley escarpment with stunning lake views. Immersed in mahogany forests, it offers a dramatic and romantic setting unlike any other in northern Tanzania.";
          const descriptionText = property.minDescription?.trim() || FALLBACK_DESCRIPTION;

          return (
            <div key={property.id} className="flex flex-col gap-12 lg:gap-20 items-center lg:flex-row">

              {/* ── Image Block ── */}
              <div
                className="w-full lg:w-3/5 relative rounded-sm shadow-2xl"
                data-aos="fade-right"
                data-aos-delay={index * 100}
              >
                <ImageSlider photos={property.photos ?? []} name={property.name} />

                {/* Floating Detail Chip — bottom-right, opposite the slider nav */}
                <div className="absolute bottom-6 right-6 lg:-right-8 bg-white/95 backdrop-blur-sm shadow-xl p-4 flex items-center gap-6 rounded-sm z-20">
                  <div className="flex flex-col">
                    <span className="text-safari-gold font-bold uppercase text-[10px] tracking-widest block mb-1">
                      Location
                    </span>
                    <span className="text-safari-dark font-serif font-bold text-sm line-clamp-1">
                      {property.region || property.address}
                    </span>
                  </div>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="flex flex-col">
                    <span className="text-safari-gold font-bold uppercase text-[10px] tracking-widest block mb-1">
                      Category
                    </span>
                    <span className="text-safari-dark font-serif font-bold flex items-center">
                      <span className="scale-75 origin-left -ml-1 line-clamp-1">{icon}</span>
                      {type}
                    </span>
                  </div>
                </div>
              </div>

              {/* ── Text Block ── */}
              <div
                className="w-full lg:w-2/5 flex flex-col justify-center"
                data-aos="fade-left"
                data-aos-delay={index * 100 + 150}
              >
                <span className="flex items-center text-safari-accent font-bold uppercase tracking-widest text-xs mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  {property.region || property.address}
                </span>

                <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-4 leading-tight">
                  {property.name}
                </h2>

                {property.slogan && (
                  <p className="text-safari-gold font-light italic text-base mb-4">
                    &ldquo;{property.slogan}&rdquo;
                  </p>
                )}

                {descriptionText && (
                  <p className="text-gray-600 font-light text-base leading-relaxed mb-6">
                    {descriptionText}
                  </p>
                )}

                {/* Amenities pills */}
                {visibleAmenities.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-10">
                    {visibleAmenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-safari-dark/80 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm"
                      >
                        <CheckCircle2 className="w-3 h-3 text-safari-gold flex-shrink-0" />
                        {amenity}
                      </span>
                    ))}
                    {extraCount > 0 && (
                      <span className="inline-flex items-center gap-1.5 bg-safari-gold/10 border border-safari-gold/30 text-safari-gold text-xs font-bold px-3 py-1.5 rounded-full">
                        +{extraCount} more
                      </span>
                    )}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/accommodations/${linkId}`}
                    className="group inline-flex items-center justify-center bg-safari-dark text-white hover:bg-safari-gold hover:text-safari-dark uppercase tracking-widest font-bold text-xs px-8 py-4 transition-all duration-300 rounded-sm"
                  >
                    Discover Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={`/booking?property=${encodeURIComponent(property.name)}`}
                    className="inline-flex items-center justify-center bg-transparent border border-gray-300 text-safari-dark hover:border-safari-dark uppercase tracking-widest font-bold text-xs px-8 py-4 transition-all duration-300 rounded-sm"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>

            </div>
          );
        })}

        {/* ── Tailor-Made CTA ── */}
        <div className="bg-safari-dark text-white p-12 md:p-20 text-center rounded-sm relative overflow-hidden mt-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-safari-gold opacity-10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-safari-accent opacity-10 blur-3xl rounded-full" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block">
              Not Sure Where To Start?
            </span>
            <h3 className="text-4xl md:text-5xl font-serif mb-8">
              Let Us Craft Your Ideal Safari
            </h3>
            <p className="text-gray-300 font-light text-lg mb-10">
              Our travel design team can handpick the perfect combination of lodges and camps to
              suit your dream itinerary and family requirements.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-safari-gold text-safari-dark hover:bg-white uppercase tracking-widest font-bold text-sm px-10 py-5 transition-all duration-300 rounded-sm shadow-xl"
            >
              Contact Travel Experts
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
