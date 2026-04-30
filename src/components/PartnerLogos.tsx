"use client";

import { motion } from "framer-motion";

const partners = [
  {
    name: "Google Premier Partner",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="28" fontSize="14" fontWeight="600" fontFamily="system-ui">Google</text>
        <text x="0" y="38" fontSize="7" fontFamily="system-ui">Premier Partner</text>
      </svg>
    ),
  },
  {
    name: "Meta Business Partner",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="28" fontSize="14" fontWeight="600" fontFamily="system-ui">Meta</text>
        <text x="0" y="38" fontSize="7" fontFamily="system-ui">Business Partner</text>
      </svg>
    ),
  },
  {
    name: "HubSpot Solutions",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="28" fontSize="14" fontWeight="600" fontFamily="system-ui">HubSpot</text>
        <text x="0" y="38" fontSize="7" fontFamily="system-ui">Solutions Partner</text>
      </svg>
    ),
  },
  {
    name: "Semrush Agency",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="28" fontSize="14" fontWeight="600" fontFamily="system-ui">Semrush</text>
        <text x="0" y="38" fontSize="7" fontFamily="system-ui">Agency Partner</text>
      </svg>
    ),
  },
  {
    name: "Shopify Plus",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="28" fontSize="14" fontWeight="600" fontFamily="system-ui">Shopify</text>
        <text x="0" y="38" fontSize="7" fontFamily="system-ui">Plus Partner</text>
      </svg>
    ),
  },
  {
    name: "Cloudflare",
    svg: (
      <svg viewBox="0 0 120 40" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="28" fontSize="14" fontWeight="600" fontFamily="system-ui">Cloudflare</text>
        <text x="0" y="38" fontSize="7" fontFamily="system-ui">Partner</text>
      </svg>
    ),
  },
];

export function PartnerLogos() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted text-xs uppercase tracking-[0.2em] font-semibold mb-12"
        >
          Trusted by Industry Leaders
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-center justify-center text-primary/20 hover:text-accent/60 transition-all duration-500 cursor-default"
            >
              {partner.svg}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
