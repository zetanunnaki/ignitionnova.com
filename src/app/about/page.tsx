import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { StatsCounter } from "@/components/StatsCounter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ignition Nova is an elite digital marketing agency. We're SEO engineers, data scientists, and growth strategists who believe in measurable results over vanity metrics.",
  alternates: { canonical: "https://www.ignitionnova.com/about" },
  openGraph: {
    title: "About Ignition Nova | Elite Digital Marketing Agency",
    description: "Ignition Nova is an elite digital marketing agency. SEO engineers, data scientists, and growth strategists delivering measurable results.",
    url: "https://www.ignitionnova.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent-light text-xs font-semibold uppercase tracking-widest">About Us</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 max-w-3xl tracking-tight leading-[1.05]">
              We&apos;re Not Another{" "}
              <span className="gradient-text">Marketing Agency</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              We&apos;re a team of engineers, data scientists, and strategists
              who build digital marketing systems that compound. No fluff.
              No vanity metrics. Just revenue.
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">Our Mission</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight">
                Make Digital Marketing <span className="gradient-text">Accountable</span>
              </h2>
              <div className="space-y-5 text-muted leading-relaxed font-light text-lg">
                <p>
                  The marketing industry has a credibility problem. Too many agencies
                  sell vague promises, deliver vanity metrics, and hide behind
                  jargon. We started Ignition Nova because we believed there had to
                  be a better way.
                </p>
                <p>
                  Our approach is simple: treat marketing like engineering. Every
                  strategy has a hypothesis. Every tactic has a measurement plan.
                  Every report connects activity to revenue. If we can&apos;t
                  measure it, we don&apos;t do it.
                </p>
                <p>
                  This philosophy has earned us a 98% client retention rate and a
                  portfolio of case studies with real, verifiable metrics. We
                  don&apos;t just promise results — we prove them.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: "target", label: "Data-Driven", desc: "Every decision backed by evidence" },
                  { icon: "shield", label: "Transparent", desc: "Full visibility into our work" },
                  { icon: "zap", label: "Technical", desc: "Engineers, not just marketers" },
                  { icon: "trending", label: "Results-First", desc: "Revenue over vanity metrics" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-2xl p-7 group hover:border-accent/20"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ValueIcon name={item.icon} />
                    </div>
                    <h3 className="font-heading font-bold text-primary mb-1 group-hover:text-accent transition-colors duration-300">
                      {item.label}
                    </h3>
                    <p className="text-muted text-sm font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Want to Work <span className="gradient-text">With Us?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              We&apos;re selective about the clients we take on — because we
              commit fully to every engagement. Let&apos;s see if we&apos;re a fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              Start the Conversation
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

function ValueIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    target: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
      </svg>
    ),
    shield: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    zap: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    trending: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  };
  return <>{icons[name]}</>;
}
