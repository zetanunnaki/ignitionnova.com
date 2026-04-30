"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  sparkles: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  monitor: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  chart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  pen: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  share: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  mail: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  ),
};

interface ServiceCardProps {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  number: string;
  subServices?: string[];
  featured?: boolean;
}

export function ServiceCard({
  slug,
  title,
  description,
  icon,
  number,
  subServices,
  featured,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/services/${slug}`}
        className={`group relative block h-full rounded-2xl p-8 lg:p-10 transition-all duration-500 overflow-hidden ${
          featured
            ? "glass-card border-accent/10"
            : "glass-card"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-accent-hot/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
              {iconMap[icon] || iconMap.sparkles}
            </div>
            <span className="text-5xl font-heading font-bold text-primary/[0.04] group-hover:text-accent/[0.08] transition-colors duration-500">
              {number}
            </span>
          </div>
          <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-6">{description}</p>

          {subServices && subServices.length > 0 && (
            <ul className="space-y-2 mb-8">
              {subServices.map((sub) => (
                <li key={sub} className="flex items-center gap-2.5 text-sm text-muted/80">
                  <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
                  {sub}
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-2 text-accent text-sm font-semibold">
            <span>Learn More</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="group-hover:translate-x-2 transition-transform duration-300"
            >
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
