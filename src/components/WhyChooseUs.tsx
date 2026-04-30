"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Open Communication",
    description: "Full transparency at every stage. You get direct access to strategists — not account managers reading scripts.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Adaptable Service",
    description: "No rigid contracts or cookie-cutter packages. Our strategies flex with your business as market conditions change.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Real Value for Your Business",
    description: "We measure success in revenue generated, not vanity metrics. Every report connects activity to business outcomes.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Always Ahead for You",
    description: "We invest in R&D so you don't have to. GEO, AI search, privacy-first analytics — we master emerging channels before they go mainstream.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />
      <div className="absolute inset-0 dot-pattern opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">Why Ignition Nova</span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight leading-[1.1]"
            >
              We Don&apos;t Just Do Marketing.{" "}
              <span className="gradient-text">We Engineer Growth.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted leading-relaxed text-lg font-light"
            >
              A powerful online presence is essential for reaching your business
              goals. We combine data-driven strategy with technical excellence to
              build digital marketing systems that compound over time — bringing
              the right people to your business at the right time and converting
              visitors into loyal customers.
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-7 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-accent-hot/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
