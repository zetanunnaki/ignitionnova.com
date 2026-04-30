"use client";

import { motion } from "framer-motion";
import { StructuredData } from "./StructuredData";

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We deep-dive into your current digital presence, competitors, and market opportunity. Every engagement starts with data, not assumptions.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "We build a phased, prioritized roadmap designed for maximum ROI. Quick wins first, then systematic long-term growth.",
  },
  {
    number: "03",
    title: "Execute & Optimize",
    description:
      "Our team implements at speed while running continuous experiments. Every action is measured, every result is reported.",
  },
  {
    number: "04",
    title: "Scale & Compound",
    description:
      "As wins compound, we scale what works and explore new channels. Your growth flywheel accelerates over time.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <StructuredData
        type="how-to"
        data={{
          name: "How Ignition Nova Delivers Digital Marketing Results",
          description:
            "Our proven 4-step methodology for transforming your digital presence and driving measurable business growth within 150 days.",
          steps: steps.map((s) => ({ name: s.title, text: s.description })),
        }}
      />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute inset-0 gradient-mesh" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Our Process</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">
            How We <span className="gradient-text">Deliver Results</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-[3.5rem] left-[3.5rem] right-[3.5rem] h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="relative z-10">
                  <div className="w-[4.5rem] h-[4.5rem] rounded-2xl gradient-accent flex items-center justify-center text-white font-heading font-bold text-xl mb-8 mx-auto md:mx-0 shadow-xl shadow-accent/20 group-hover:scale-110 group-hover:shadow-accent/30 transition-all duration-300">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-primary mb-3 text-center md:text-left group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed text-center md:text-left font-light">
                    {step.description}
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
