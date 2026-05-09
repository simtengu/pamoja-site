"use client";

import { motion } from "framer-motion";

export default function AboutCompany() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left - Map */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img 
              src="/images/about/africa-map.png"
              alt="Africa Map Location"
              className="w-full max-w-lg object-contain"
            />
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-8 leading-tight">
              About Pamoja Africa
            </h2>

            <p className="text-gray-600 font-light text-lg leading-relaxed mb-6">
              We are a charismatic collection of exclusive and intimate safari camps in the prime wildernesses of Tanzania. Our focus is on offering you access to the magic of the bush in a rich variety of ways.
            </p>
            <p className="text-gray-600 font-light text-lg leading-relaxed">
              We are delighted to connect you with nature and let nature touch you with our walking adventures, game drives, ballooning, farm tour in a remote area of africa get connected with community and let your senses celebrate the life.
            </p>

          </motion.div>

        </div>
            <div className="mt-12 flex flex-col items-center justify-center space-y-4">
              <img 
                src="/images/about/pamoja-plant.png" 
                alt="Pamoja Plant" 
                className="w-28 h-auto opacity-90"
              />
              <p className="font-luxury text-3xl lg:text-4xl text-safari-dark text-center leading-tight">
                Where Nature Meets Luxury
              </p>
            </div>
      </div>
    </section>
  );
}
