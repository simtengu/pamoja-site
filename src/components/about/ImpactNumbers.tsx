"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  desc: string;
}

const stats: StatItem[] = [
  { value: 10000, suffix: "+", label: "Guests Hosted", desc: "Lives touched by the Pamoja experience" },
  { value: 120, suffix: "+", label: "Local Employees", desc: "Tanzanian families supported year-round" },
  { value: 50000, suffix: "+", label: "Acres Protected", desc: "Wildlife habitat under our stewardship" },
  { value: 2400, suffix: "", label: "Tonnes CO₂ Offset", desc: "Annual carbon reduction across all camps" },
  { value: 30, suffix: "+", label: "Patrol Units Supported", desc: "Anti-poaching missions co-funded annually" },
  { value: 15, suffix: "", label: "Community Projects", desc: "Schools, clinics & water wells funded" },
];

function useCountUp(target: number, duration = 2000, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, active, index }: { stat: StatItem; active: boolean; index: number }) {
  const count = useCountUp(stat.value, 2000, active);

  const formatted =
    stat.value >= 1000
      ? count.toLocaleString()
      : count.toString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative border border-white/10 p-8 group hover:border-safari-gold/50 transition-colors duration-500"
    >
      {/* Gold corner accent */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-safari-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-safari-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <p className="text-5xl md:text-6xl font-serif text-safari-gold mb-3 tabular-nums">
        {formatted}
        <span className="text-3xl">{stat.suffix}</span>
      </p>
      <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-3">{stat.label}</h3>
      <p className="text-gray-400 font-light text-sm leading-relaxed">{stat.desc}</p>
    </motion.div>
  );
}

export default function ImpactNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-safari-dark px-4 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-safari-gold blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-safari-accent blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-safari-gold tracking-[0.25em] font-bold uppercase text-xs mb-4 block">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Two Decades of Meaningful Change
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto">
            Behind every sunrise game drive is a commitment to something larger — the land, the wildlife, and the people of Tanzania.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={active} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
