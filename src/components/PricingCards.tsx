"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import pricing from "../../data/pricing.json";

export function PricingCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
      {pricing.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -8 }}
          className={`rounded-3xl p-7 lg:p-8 h-full flex flex-col relative overflow-hidden transition-all duration-500 ${
            plan.highlighted
              ? "glass-card border-accent/20 shadow-xl shadow-accent/10"
              : "glass-card"
          }`}
        >
          {plan.highlighted && (
            <>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full" />
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="gradient-accent text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-accent/20">
                  Most Popular
                </span>
              </div>
            </>
          )}

          <div className="relative z-10 mb-6">
            <h3 className="font-heading font-bold text-lg text-primary mb-1">
              {plan.name}
            </h3>
            <p className="text-muted text-xs mb-5 font-light">{plan.description}</p>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-heading font-bold gradient-text">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-muted text-sm font-light">{plan.period}</span>
              )}
            </div>

            <div className="space-y-2 text-xs text-muted">
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                <span>{plan.hours}/month</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                <span>{plan.support}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" /></svg>
                <span>{plan.meetings}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                <span>{plan.term}</span>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-border/30 mb-6" />

          <ul className="space-y-3 mb-8 flex-1 relative z-10">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5">
                <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-xs text-muted font-light">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={`relative z-10 block w-full text-center py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 ${
              plan.highlighted
                ? "btn-primary text-white"
                : "border-2 border-accent/20 text-accent hover:bg-accent hover:text-white hover:border-accent hover:shadow-lg hover:shadow-accent/20"
            }`}
          >
            <span>{plan.cta}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
