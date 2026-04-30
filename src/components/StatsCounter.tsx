"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import siteData from "../../data/site.json";

function useCounter(end: number, duration: number, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

function StatItem({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(numericValue, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="text-center relative"
    >
      <p className="text-5xl md:text-6xl font-bold font-heading gradient-text mb-3 tabular-nums">
        {count}
        {suffix}
      </p>
      <p className="text-white/40 text-sm font-medium">{label}</p>
    </motion.div>
  );
}

export function StatsCounter() {
  return (
    <section className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[#060810]" />
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-[150px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-accent-hot/10 blur-[120px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {siteData.stats.map((stat, i) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
