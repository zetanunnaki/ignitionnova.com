"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  metrics: { value: string; label: string }[];
  excerpt: string;
  heroImage?: string;
  index: number;
}

export function CaseStudyCard({
  slug,
  title,
  client,
  industry,
  services,
  metrics,
  excerpt,
  heroImage,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/work/${slug}`}
        className="group relative block h-full glass-card rounded-3xl overflow-hidden card-hover"
      >
        <div className="h-52 relative overflow-hidden">
          <div className="absolute inset-0 gradient-bg" />
          {heroImage && (
            <img
              src={heroImage}
              alt={`${client} case study`}
              width={1536}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#060810]/80 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-6 flex items-center gap-3">
            <span className="text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
              {industry}
            </span>
          </div>
          <div className="absolute top-5 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10m0 0L9 4m4 4L9 12" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-7">
          <p className="text-[10px] font-semibold text-accent uppercase tracking-[0.2em] mb-3">
            {client}
          </p>
          <h3 className="font-heading font-bold text-lg text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
            {title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-6 font-light">{excerpt}</p>

          <div className="grid grid-cols-2 gap-3 mb-5">
            {metrics.slice(0, 2).map((m) => (
              <div
                key={m.label}
                className="bg-accent/[0.04] rounded-2xl p-4 text-center border border-accent/[0.06]"
              >
                <p className="text-xl font-bold gradient-text font-heading">{m.value}</p>
                <p className="text-[10px] text-muted mt-1 font-medium uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {services.map((s) => (
              <span
                key={s}
                className="text-[10px] text-muted bg-surface/80 px-3 py-1.5 rounded-full font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
