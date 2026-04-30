import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { PricingCards } from "@/components/PricingCards";
import { ComparisonTable } from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for our digital marketing services. From Growth Starter to Enterprise — find the plan that fits your ambition.",
  alternates: { canonical: "https://www.ignitionnova.com/pricing" },
  openGraph: {
    title: "Pricing | Ignition Nova Digital Marketing",
    description: "Transparent pricing for our digital marketing services. From Growth Starter to Enterprise — find the plan that fits your ambition.",
    url: "https://www.ignitionnova.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent-light text-xs font-semibold uppercase tracking-widest">Pricing</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Transparent Pricing,{" "}
              <span className="gradient-text">Measurable ROI</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              No hidden fees. No long-term lock-ins. Every plan includes full
              reporting and a dedicated strategist. Cancel anytime with 30 days
              notice.
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <PricingCards />
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">Compare</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">
                Compare <span className="gradient-text">Plans</span>
              </h2>
              <p className="text-muted text-lg font-light">
                See exactly what&apos;s included in each plan
              </p>
            </div>
          </AnimateIn>
          <div className="glass-card rounded-3xl overflow-hidden">
            <ComparisonTable />
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl font-bold text-primary tracking-tight">
                Pricing <span className="gradient-text">FAQ</span>
              </h2>
            </div>
          </AnimateIn>
          <div className="space-y-5">
            {[
              {
                q: "Are there any setup fees?",
                a: "No setup fees. The first month includes our comprehensive audit and strategy development at no additional cost.",
              },
              {
                q: "What's included in the monthly reports?",
                a: "Full visibility into every metric that matters: traffic, rankings, conversions, revenue attribution, and experiment results. We connect marketing activity directly to business outcomes.",
              },
              {
                q: "Can I switch plans?",
                a: "Absolutely. Scale up or down at any time. Most clients start with Starter or Growth and upgrade within 3 months as they see results compound.",
              },
              {
                q: "Do you require long-term contracts?",
                a: "No. We work on a month-to-month basis with 30 days notice to cancel. We earn your business every month — if we're not delivering value, you should be free to leave.",
              },
            ].map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-7">
                  <h3 className="font-heading font-bold text-primary mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed font-light">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

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
              Not Sure Which <span className="gradient-text">Plan Fits?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Book a free strategy call. We&apos;ll assess your needs and recommend
              the right starting point — no pressure, no pitch deck.
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
