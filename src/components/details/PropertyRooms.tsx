"use client";

import { useState } from "react";
import { Users, BedSingle, Wine, Home } from "lucide-react";
import { Room } from "@/types/room";
import RoomDetailsModal from "./RoomDetailsModal";

export default function PropertyRooms({ 
  rooms, 
  propertyName,
  typesMap,
  standardsMap
}: { 
  rooms?: Room[];
  propertyName?: string;
  typesMap?: Record<string, string>;
  standardsMap?: Record<string, string>;
}) {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  if (!rooms || rooms.length === 0) {
    return (
      <div className="border-t border-gray-100 pt-16">
        <h2 className="text-3xl font-serif text-safari-dark mb-10">Available Room Types</h2>
        <p className="text-gray-500 font-light italic">No room information is currently available for this property.</p>
      </div>
    );
  }

  return (
    <div className="border-t border-gray-100 pt-16">
      <h2 className="text-3xl font-serif text-safari-dark mb-10">Available Room Types</h2>
      
      <div className="space-y-12">
        {rooms.map((room) => {
          const img = room.photos && room.photos.length > 0 ? room.photos[0] : "/images/placeholder.jpeg";
            
          return (
            <div key={room.id} className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 border border-gray-100 rounded-sm overflow-hidden p-6 hover:shadow-xl transition-shadow">
              
              <div className="w-full md:w-1/3 aspect-[4/3] relative rounded-sm overflow-hidden group shrink-0">
                <img 
                  src={img} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s]"
                />
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-serif text-safari-dark mb-4">{room.name}</h3>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-500 font-bold uppercase tracking-wider mb-6">
                  {room.numberOfPeople && (
                    <span className="flex items-center"><Users className="w-4 h-4 mr-2 text-safari-accent" /> Up to {room.numberOfPeople}</span>
                  )}
                  {room.beds && (
                    <span className="flex items-center"><BedSingle className="w-4 h-4 mr-2 text-safari-accent" /> {room.beds}</span>
                  )}
                  {room.standard && (
                    <span className="flex items-center"><Wine className="w-4 h-4 mr-2 text-safari-accent" /> {standardsMap?.[room.standard] || room.standard} Standard</span>
                  )}
                  {room.type && (
                    <span className="flex items-center"><Home className="w-4 h-4 mr-2 text-safari-accent" /> {typesMap?.[room.type] || room.type}</span>
                  )}
                </div>

                <div className="flex justify-between items-center mt-auto border-t border-gray-200 pt-6">
                  <span className="text-xl font-serif text-safari-dark">
                    ${room.price} <span className="text-sm font-sans font-light text-gray-500">/ night</span>
                  </span>
                  <button 
                    onClick={() => setSelectedRoom(room)}
                    className="text-xs uppercase tracking-widest font-bold text-safari-dark border border-safari-dark hover:bg-safari-dark hover:text-white transition-colors px-6 py-3 rounded-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {selectedRoom && (
        <RoomDetailsModal 
          room={selectedRoom} 
          isOpen={true} 
          onClose={() => setSelectedRoom(null)} 
          propertyName={propertyName || "Property"} 
          typesMap={typesMap}
          standardsMap={standardsMap}
        />
      )}
    </div>
  );
}
