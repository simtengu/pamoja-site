"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for custom icons in Leaflet with Next.js
const createCustomIcon = () => {
  return new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
};

export default function MapClient() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const locations = [
    { name: "Pamoja Serengeti Luxury Camp", pos: [-2.3333, 34.8333], desc: "Deep in the Serengeti." },
    { name: "Pamoja Migration Camp", pos: [-2.1111, 35.1234], desc: "Mobile tented luxury." },
    { name: "Migration Undercanvas", pos: [-1.8888, 35.2525], desc: "Authentic remote wilderness." },
    { name: "Pamoja Farm Villa", pos: [-3.3000, 35.6666], desc: "Karatu Highlands." },
    { name: "Manyara Baobab Lodge", pos: [-3.3833, 35.8333], desc: "Overlooking Lake Manyara." },
    { name: "Tarangire Luxury Hideaway", pos: [-3.8333, 36.0000], desc: "Set among ancient Baobab trees." },
    { name: "Pamoja Verdant Farm Villa", pos: [-3.3666, 36.6833], desc: "Arusha Headquarters." },
  ];

  // Center on Northern Tanzania
  const centerPosition: [number, number] = [-3.0000, 35.5000];

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Check if the container already has a map initialized (failsafe for Fast Refresh)
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Explicitly clean up any stray _leaflet_id just in case
    const container = mapContainerRef.current;
    if ((container as any)._leaflet_id) {
      (container as any)._leaflet_id = null;
    }

    // Initialize Map
    const map = L.map(container, {
      center: centerPosition,
      zoom: 7,
      scrollWheelZoom: false,
    });
    
    mapInstanceRef.current = map;

    // Add TileLayer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add Markers & Popups
    const customIcon = createCustomIcon();
    locations.forEach(loc => {
      const popupContent = `
        <div class="font-serif font-bold text-[#1f2937] pb-1 border-b border-gray-200 mb-2">
          ${loc.name}
        </div>
        <div class="text-gray-500 font-light text-xs">
          ${loc.desc}
        </div>
      `;

      L.marker(loc.pos as [number, number], { icon: customIcon })
        .addTo(map)
        .bindPopup(popupContent);
    });

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Run once on mount

  return (
    <div className="w-full h-full z-10 rounded-sm overflow-hidden">
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
    </div>
  );
}
