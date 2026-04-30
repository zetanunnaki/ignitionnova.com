"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  title: string;
  company: string;
  quote: string;
  metric: string;
  index: number;
}

export function TestimonialCard({
  name,
  title,
  company,
  quote,
  metric,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="bg-white rounded-2xl p-8 border border-border hover:shadow-lg hover:border-accent/20 transition-all group"
    >
      <div className="flex items-center gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#f59e0b"
            stroke="#f59e0b"
            strokeWidth="1"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
      </div>
      <blockquote className="text-primary/80 text-sm leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <p className="font-heading font-semibold text-sm text-primary">{name}</p>
          <p className="text-muted text-xs">
            {title}, {company}
          </p>
        </div>
        <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1.5 rounded-full">
          {metric}
        </span>
      </div>
    </motion.div>
  );
}
