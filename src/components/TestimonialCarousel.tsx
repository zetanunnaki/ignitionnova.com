"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateIn } from "./AnimateIn";
import { StructuredData } from "./StructuredData";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  metric: string;
  rating?: number;
  datePublished?: string;
}

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section className="relative py-32 overflow-hidden">
      {testimonials.map((t, i) => (
        <StructuredData
          key={i}
          type="review"
          data={{
            name: t.name,
            title: t.title,
            quote: t.quote,
            rating: t.rating || 5,
            datePublished: t.datePublished || "2025-01-01",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[#060810]" />
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-hot/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Client Testimonials</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction * -80, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-dark rounded-3xl p-10 md:p-16 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-1.5 mb-10">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#fdcb6e" stroke="#fdcb6e" strokeWidth="0.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-white/90 text-xl md:text-2xl leading-relaxed font-light mb-12">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 rounded-2xl gradient-accent flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-accent/20">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white">{t.name}</p>
                      <p className="text-white/40 text-sm font-light">{t.title}, {t.company}</p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-accent bg-accent/10 border border-accent/20 px-5 py-2.5 rounded-full">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                    </svg>
                    {t.metric}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
            </button>

            <div className="flex items-center gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    i === active ? "bg-accent w-10" : "bg-white/15 w-2 hover:bg-white/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
