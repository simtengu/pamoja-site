"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Baby, Leaf, CreditCard, HeartPulse } from "lucide-react";

const policies = [
  {
    id: "booking",
    icon: <CreditCard className="w-6 h-6 text-safari-gold" />,
    title: "Booking & Cancellation",
    content: (
      <div className="space-y-4 text-gray-600 font-light leading-relaxed">
        <p>
          To secure your reservation at any Pamoja Africa property, a 30% non-refundable deposit is required at the time of booking. The remaining balance must be settled 60 days prior to your arrival date.
        </p>
        <p>
          Cancellations made up to 61 days before arrival forfeit the deposit. Cancellations made between 60 and 31 days prior incur a 50% cancellation fee. Cancellations made 30 days or less before arrival, as well as no-shows, will be charged 100% of the total booking cost. We strongly recommend purchasing comprehensive travel insurance.
        </p>
      </div>
    )
  },
  {
    id: "checkin",
    icon: <Clock className="w-6 h-6 text-safari-gold" />,
    title: "Check-in & Check-out",
    content: (
      <div className="space-y-4 text-gray-600 font-light leading-relaxed">
        <p>
          <strong>Check-in time:</strong> 14:00 (2:00 PM) onwards.<br/>
          <strong>Check-out time:</strong> By 10:00 AM.
        </p>
        <p>
          We understand that flight schedules dictate travel times. Should you require an early check-in or late check-out, please coordinate with our reservations team in advance. While we cannot guarantee availability without an extra night booked, we will do our utmost to accommodate your schedule and provide access to main camp facilities.
        </p>
      </div>
    )
  },
  {
    id: "child",
    icon: <Baby className="w-6 h-6 text-safari-gold" />,
    title: "Child Policy",
    content: (
      <div className="space-y-4 text-gray-600 font-light leading-relaxed">
        <p>
          Pamoja Africa welcomes families to experience the wonders of Tanzania together. For our unfenced wilderness camps (Serengeti, Tarangire), we accept children aged 6 years and older. At our enclosed properties (Pamoja Farm Villas, Pamoja Verdant), children of all ages are welcome.
        </p>
        <p>
          Children under 12 sharing a room with adults benefit from a 50% discount on the adult sharing rate. Babysitting services can be arranged at select properties with prior notice for a nominal fee.
        </p>
      </div>
    )
  },
  {
    id: "health",
    icon: <HeartPulse className="w-6 h-6 text-safari-gold" />,
    title: "Health & Safety",
    content: (
      <div className="space-y-4 text-gray-600 font-light leading-relaxed">
        <p>
          Your well-being is our highest priority. All our remote camps are equipped with comprehensive first aid kits, and our senior staff are trained in emergency medical response. We have established protocols for emergency evacuation via Flying Doctors (AMREF) should the need arise.
        </p>
        <p>
          Because our luxury camps are unfenced to allow wildlife to roam freely, guests must adhere to all safety briefings provided upon arrival. Walking unaccompanied around the camp after sunset is strictly prohibited; Maasai escorts are always available to accompany you to and from your tent.
        </p>
      </div>
    )
  },
  {
    id: "environment",
    icon: <Leaf className="w-6 h-6 text-safari-gold" />,
    title: "Environmental & Sustainability",
    content: (
      <div className="space-y-4 text-gray-600 font-light leading-relaxed">
        <p>
          As custodians of these pristine environments, Pamoja Africa operates under a strict "leave no trace" ethos. Our mobile and semi-permanent camps utilize solar power, advanced water filtration and recycling systems, and strict waste management protocols.
        </p>
        <p>
          We prohibit the use of single-use plastics across all properties. We kindly request our guests to support these initiatives by utilizing the provided refillable water bottles and conserving water and power where possible during their stay.
        </p>
      </div>
    )
  },
  {
    id: "privacy",
    icon: <Shield className="w-6 h-6 text-safari-gold" />,
    title: "Privacy & Data Protection",
    content: (
      <div className="space-y-4 text-gray-600 font-light leading-relaxed">
        <p>
          We respect your privacy and are committed to protecting your personal data. Any personal information collected during your booking process or stay is used exclusively to enhance your experience and fulfill our hospitality obligations. 
        </p>
        <p>
          Pamoja Africa will never sell or share your personal information with third parties for marketing purposes. For a complete overview of our data protection measures, please contact our administrative office.
        </p>
      </div>
    )
  }
];

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-safari-light">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/about/luxury-nature.jpg" 
            alt="Pamoja Policies" 
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-safari-gold font-sans tracking-[0.2em] font-bold uppercase text-xs mb-4 block"
          >
            Our Standards
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-tight"
          >
            Guest Policies
          </motion.h1>
        </div>
      </section>

      {/* Policies Content */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">
              To ensure a seamless, secure, and harmonious experience for all our guests, and to protect the pristine environments we call home, we kindly ask you to review our core policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 rounded-sm shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                  <div className="p-3 bg-safari-light rounded-full">
                    {policy.icon}
                  </div>
                  <h2 className="text-2xl font-serif text-safari-dark">
                    {policy.title}
                  </h2>
                </div>
                {policy.content}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
