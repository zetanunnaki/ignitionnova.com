"use client";

import { useState } from "react";
import { AnimateIn } from "@/components/AnimateIn";

const resources = [
  {
    title: "2026 SEO Audit Checklist",
    description:
      "87-point technical SEO checklist covering Core Web Vitals, crawlability, indexation, schema markup, and AI search readiness. The same checklist our team uses on every client engagement.",
    category: "Checklist",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    title: "2026 Digital Marketing Playbook",
    description:
      "A comprehensive guide to building a high-performing digital marketing strategy for 2026. Covers GEO, privacy-first analytics, AI content strategy, and conversion optimization.",
    category: "Guide",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: "GEO Readiness Assessment",
    description:
      "A self-assessment tool to evaluate how prepared your brand is for AI-powered search. Score your content authority, entity optimization, and semantic coverage.",
    category: "Assessment",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" />
      </svg>
    ),
  },
  {
    title: "CRO Experiment Template Kit",
    description:
      "Battle-tested templates for planning, executing, and documenting A/B tests. Includes hypothesis frameworks, statistical significance calculators, and executive reporting templates.",
    category: "Template",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

function ResourceCard({
  resource,
  index,
}: {
  resource: (typeof resources)[0];
  index: number;
}) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimateIn delay={index * 0.1}>
      <div className="glass-card rounded-3xl p-8 lg:p-10 h-full flex flex-col group relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.02] to-accent-hot/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
            {resource.icon}
          </div>
          <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-3 block">
            {resource.category}
          </span>
          <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors duration-300">
            {resource.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-8 flex-1 font-light">
            {resource.description}
          </p>

          {submitted ? (
            <div className="bg-success/10 rounded-2xl p-5 text-center border border-success/20">
              <div className="flex items-center justify-center gap-2 text-success text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Check your email for the download link!
              </div>
            </div>
          ) : showForm ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white/60 backdrop-blur-sm text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-muted/50"
              />
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-white/60 backdrop-blur-sm text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all placeholder:text-muted/50"
              />
              <button
                type="submit"
                className="btn-primary w-full py-3 rounded-xl text-white text-sm font-semibold"
              >
                <span>Get Free Access</span>
              </button>
            </form>
          ) : (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-3.5 rounded-2xl border-2 border-accent/20 text-accent font-semibold text-sm hover:bg-accent hover:text-white hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300"
            >
              Download Free
            </button>
          )}
        </div>
      </div>
    </AnimateIn>
  );
}

export default function ResourcesPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent-light text-xs font-semibold uppercase tracking-widest">Free Resources</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Tools & <span className="gradient-text">Lead Magnets</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              Free tools, templates, and guides built by our team. No fluff—just
              the same frameworks we use with our clients.
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource, i) => (
              <ResourceCard key={resource.title} resource={resource} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
