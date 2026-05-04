"use client";

// Icons removed as per user request

export default function StickyBookingWidget({ propertyName }: { propertyName?: string }) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate navigation
    window.location.href = `/booking?property=${encodeURIComponent(propertyName || "Pamoja Farm Villa")}`;
  };

  return (
    <div className="sticky top-24 bg-white shadow-[0_15px_60px_rgba(0,0,0,0.08)] rounded-sm border border-gray-100 p-8 z-30">
      
      <h4 className="font-serif text-lg md:text-xl mb-6 text-safari-dark">Check Availability</h4>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              Check-in *
            </label>
            <input type="date" required className="w-full border border-gray-200 p-3 text-sm focus:border-safari-accent focus:ring-1 focus:ring-safari-accent outline-none transition-all rounded-sm text-gray-700 bg-gray-50" />
          </div>
          <div className="flex flex-col">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              Check-out *
            </label>
            <input type="date" required className="w-full border border-gray-200 p-3 text-sm focus:border-safari-accent focus:ring-1 focus:ring-safari-accent outline-none transition-all rounded-sm text-gray-700 bg-gray-50" />
          </div>
        </div>

        {/* Guests */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              Adults *
            </label>
            <input type="number" min="1" defaultValue="1" required className="w-full border border-gray-200 p-3 text-sm focus:border-safari-accent focus:ring-1 focus:ring-safari-accent outline-none transition-all rounded-sm text-gray-700 bg-gray-50" />
          </div>
          <div className="flex flex-col">
            <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">
              Kids
            </label>
            <input type="number" min="0" defaultValue="0" className="w-full border border-gray-200 p-3 text-sm focus:border-safari-accent focus:ring-1 focus:ring-safari-accent outline-none transition-all rounded-sm text-gray-700 bg-gray-50" />
          </div>
        </div>

        <button type="submit" className="w-full bg-safari-dark text-white font-bold uppercase tracking-widest py-4 mt-4 hover:bg-safari-gold hover:text-safari-dark transition-colors duration-300 rounded-sm">
          Check Availability
        </button>

      </form>

      <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
        You won't be charged yet.<br/>Taxes and extra fees may apply.
      </p>

    </div>
  );
}
