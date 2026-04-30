import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import industries from "../../../data/industries.json";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "From SaaS and eCommerce to home services and professional services — we deliver digital marketing strategies tailored to your industry's unique challenges.",
  alternates: { canonical: "https://www.ignitionnova.com/industries" },
  openGraph: {
    title: "Industries We Serve | Ignition Nova",
    description:
      "Digital marketing strategies tailored to your industry. SaaS, eCommerce, finance, home services, and more.",
    url: "https://www.ignitionnova.com/industries",
  },
};

const iconMap: Record<string, React.ReactNode> = {
  code: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  cart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>,
  heart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  chart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
  briefcase: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  book: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
  coffee: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>,
  home: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>,
  wrench: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>,
  thermometer: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" /></svg>,
  zap: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  tree: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8" /><path d="M5 12l7-8 7 8" /><path d="M3 17l9-6 9 6" /></svg>,
  sparkles: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z" /></svg>,
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
};

export default function IndustriesPage() {
  const businessIndustries = industries.filter((_, i) => i < 8);
  const homeServices = industries.filter((_, i) => i >= 8);

  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent-light text-xs font-semibold uppercase tracking-widest">Industries</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Digital Marketing for{" "}
              <span className="gradient-text">Every Industry</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              We bring deep domain expertise to every engagement. Whether you&apos;re
              a SaaS startup or a local plumber, we tailor our strategies to your
              industry&apos;s unique challenges and opportunities.
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Business & Enterprise</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-12 tracking-tight">
              Business <span className="gradient-text">Industries</span>
            </h2>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessIndustries.map((ind) => (
              <AnimateIn key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group block glass-card rounded-2xl p-7 h-full card-hover"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                    {iconMap[ind.icon] || iconMap.sparkles}
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {ind.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-light mb-4 line-clamp-3">
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ind.metrics.map((m) => (
                      <span key={m} className="text-[10px] bg-accent/[0.04] text-muted px-2.5 py-1 rounded-full font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Home Services</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4 tracking-tight">
              Home Service <span className="gradient-text">Industries</span>
            </h2>
            <p className="text-muted text-lg font-light mb-12 max-w-2xl">
              Local businesses need local expertise. We help home service companies dominate
              their service areas with hyper-local SEO, Google LSAs, and lead generation systems.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {homeServices.map((ind) => (
              <AnimateIn key={ind.slug}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group block glass-card rounded-2xl p-7 h-full card-hover"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent mb-5 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-accent/10 transition-all duration-300">
                    {iconMap[ind.icon] || iconMap.wrench}
                  </div>
                  <h3 className="font-heading font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {ind.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-light mb-4 line-clamp-3">
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ind.metrics.map((m) => (
                      <span key={m} className="text-[10px] bg-accent/[0.04] text-muted px-2.5 py-1 rounded-full font-medium">
                        {m}
                      </span>
                    ))}
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Don&apos;t See Your <span className="gradient-text">Industry?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              We work across all verticals. Book a free strategy call and we&apos;ll
              show you how our methodology applies to your specific market.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              Book a Free Call
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
