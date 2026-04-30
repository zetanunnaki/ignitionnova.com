"use client";

import { motion } from "framer-motion";

const items = [
  "500+ Projects Delivered",
  "98% Client Retention",
  "150% Avg. Traffic Increase",
  "100/100 Lighthouse Scores",
  "AI Search Pioneers",
  "Google Premier Partner",
  "12+ Years Experience",
  "Zero-Cookie Analytics",
];

export function MarqueeTicker() {
  return (
    <div className="relative overflow-hidden py-5 bg-[#060810] border-y border-white/[0.04]">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-hot/5" />
      <motion.div
        className="flex gap-12 whitespace-nowrap relative"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-white/50 text-sm font-medium tracking-wide">
            <span className="w-1.5 h-1.5 bg-accent/60 rounded-full" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
