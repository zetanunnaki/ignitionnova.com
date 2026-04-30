import { Metadata } from "next";
import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { AnimateIn } from "@/components/AnimateIn";
import caseStudies from "../../../data/case-studies.json";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Data-backed case studies proving our impact. See how we drive 340% MQL increases, 2x organic traffic, and AI search dominance for our clients.",
  alternates: { canonical: "https://www.ignitionnova.com/work" },
  openGraph: {
    title: "Case Studies & Proven Results | Ignition Nova",
    description: "Data-backed case studies proving our impact. See how we drive 340% MQL increases, 2x organic traffic, and AI search dominance.",
    url: "https://www.ignitionnova.com/work",
  },
};

export default function WorkPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent-light text-xs font-semibold uppercase tracking-widest">Our Work</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Case Studies & <span className="gradient-text">Proven Results</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              We don&apos;t just promise results—we prove them. Every case study
              below includes real metrics, real timelines, and real business impact.
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} {...study} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Want Results <span className="gradient-text">Like These?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Let&apos;s talk about how we can create the next success story—yours.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              Start Your Project
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
