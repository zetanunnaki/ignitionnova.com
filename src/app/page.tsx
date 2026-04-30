import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Ignition Nova | Elite Digital Marketing Agency — SEO, GEO & Web Development",
  description:
    "We guarantee to significantly increase your organic traffic and lead generation within 150 days. From AI-powered search optimization to conversion rate engineering — we deliver measurable ROI.",
  alternates: {
    canonical: "https://www.ignitionnova.com",
  },
  openGraph: {
    title: "Ignition Nova | Elite Digital Marketing Agency",
    description:
      "We guarantee to significantly increase your organic traffic and lead generation within 150 days. SEO, GEO, Web Development & CRO experts.",
    url: "https://www.ignitionnova.com",
  },
};
import { StatsCounter } from "@/components/StatsCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { StructuredData } from "@/components/StructuredData";
import { PartnerLogos } from "@/components/PartnerLogos";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { FAQSection } from "@/components/FAQSection";
import { ProcessSection } from "@/components/ProcessSection";
import { TypeWriter } from "@/components/TypeWriter";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { ParticleField } from "@/components/ParticleField";
import services from "../../data/services.json";
import testimonials from "../../data/testimonials.json";
import caseStudies from "../../data/case-studies.json";

export default function HomePage() {
  return (
    <>
      <StructuredData type="website" />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <ParticleField />

        {/* Decorative orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[180px] animate-float" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent-hot/15 blur-[150px] animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[120px] animate-float" style={{ animationDelay: "6s" }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px"
          }} />
          {/* Orbiting dot */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-orbit">
              <div className="w-2 h-2 rounded-full bg-accent-light/60" />
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <AnimateIn>
                <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2.5 mb-10">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
                  </span>
                  <span className="text-white/70 text-sm font-medium">Now Accepting Q2 2026 Clients</span>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.1}>
                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8 tracking-tight">
                  Your Trusted Partner for{" "}
                  <TypeWriter />{" "}
                  Excellence
                </h1>
              </AnimateIn>

              <AnimateIn delay={0.2}>
                <p className="text-xl text-white/50 leading-relaxed mb-10 max-w-xl font-light">
                  We guarantee to significantly increase your organic traffic and
                  lead generation within <span className="text-white/80 font-medium">150 days</span>. From AI-powered search
                  optimization to conversion rate engineering — we deliver <span className="text-accent-light font-medium">measurable
                  ROI</span>, not just reports.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base"
                  >
                    <span>Start Growing Today</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    View Case Studies
                  </Link>
                </div>
              </AnimateIn>

              <AnimateIn delay={0.4}>
                <div className="flex items-center gap-8">
                  <div className="flex -space-x-3">
                    {["#6c5ce7", "#fd79a8", "#00cec9", "#fdcb6e"].map((color, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-[#0a0e1a] flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: color }}
                      >
                        {["AV", "MC", "PS", "DO"][i]}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fdcb6e" stroke="#fdcb6e" strokeWidth="0.5">
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-white/40 text-xs">Trusted by <span className="text-white/70">500+</span> companies</p>
                  </div>
                </div>
              </AnimateIn>
            </div>

            <AnimateIn delay={0.5} direction="right">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent/20 via-accent-hot/10 to-accent-cyan/20 blur-2xl opacity-60" />
                <div className="relative glass-card rounded-3xl p-10 lg:p-12 text-center">
                  <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-3 tracking-tight">
                    Free Strategy Call
                  </h3>
                  <p className="text-muted font-light mb-8 leading-relaxed">
                    Get a personalized growth roadmap for your business — no strings attached.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-base w-full"
                  >
                    Book Your Call
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Marquee */}
      <MarqueeTicker />

      {/* Partners */}
      <PartnerLogos />

      {/* Services */}
      <section className="py-32 relative" id="services">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">What We Do</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                Services Built for the{" "}
                <span className="gradient-text">2026 Landscape</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed">
                The digital marketing playbook has changed. AI search, zero-click
                results, and privacy-first tracking demand a new approach.
              </p>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stats */}
      <StatsCounter />

      {/* Process */}
      <ProcessSection />

      {/* Case Studies */}
      <section className="py-32 relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="text-accent text-xs font-semibold uppercase tracking-widest">Proof, Not Promises</span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">
                  Results That Speak
                </h2>
              </div>
              <Link
                href="/work"
                className="mt-6 md:mt-0 group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                View All Case Studies
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.slug} {...study} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* FAQ */}
      <FAQSection />

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-accent-hot/15 blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="animate-orbit" style={{ animationDuration: "30s" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-accent-light/40" />
            </div>
          </div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to Ignite Your{" "}
              <span className="gradient-text">Growth?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Let&apos;s discuss how we can transform your digital presence and
              drive measurable business results within 150 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-300"
              >
                Get Your Free Strategy Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
