import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateIn } from "@/components/AnimateIn";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import industries from "../../../../data/industries.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({ slug: ind.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};

  return {
    title: `${ind.title} Marketing`,
    description: ind.description,
    alternates: { canonical: `https://www.ignitionnova.com/industries/${slug}` },
    openGraph: {
      title: `${ind.title} Marketing | Ignition Nova`,
      description: ind.description,
      url: `https://www.ignitionnova.com/industries/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${ind.title} Marketing | Ignition Nova`,
      description: ind.description,
    },
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  const otherIndustries = industries.filter((i) => i.slug !== slug).slice(0, 6);

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
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: ind.shortTitle },
            ]}
          />
          <AnimateIn>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 mb-8 transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              All Industries
            </Link>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 max-w-4xl tracking-tight leading-[1.05]">
              Digital Marketing for{" "}
              <span className="gradient-text">{ind.title}</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              {ind.description}
            </p>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="flex flex-wrap gap-3 mt-10">
              {ind.metrics.map((m) => (
                <span
                  key={m}
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent bg-accent/10 border border-accent/20 px-5 py-2.5 rounded-full"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                  </svg>
                  {m}
                </span>
              ))}
            </div>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimateIn>
              <div className="glass-card rounded-3xl p-8 lg:p-10 h-full">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6 tracking-tight">
                  Industry Challenges
                </h2>
                <ul className="space-y-4">
                  {ind.challenges.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-muted text-sm leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400/50 mt-2 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 h-full border-accent/10">
                <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-bold text-primary mb-6 tracking-tight">
                  Our Solutions
                </h2>
                <ul className="space-y-4">
                  {ind.solutions.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-muted text-sm leading-relaxed font-light">
                      <div className="w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary tracking-tight">
                Services for <span className="gradient-text">{ind.shortTitle}</span>
              </h2>
              <p className="text-muted text-lg font-light mt-4">
                We tailor our full service suite to your industry&apos;s needs
              </p>
            </div>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Technical SEO & Core Web Vitals", href: "/services/technical-seo-core-web-vitals" },
              { label: "Generative Engine Optimization", href: "/services/generative-engine-optimization" },
              { label: "Paid Advertising & PPC", href: "/services/paid-advertising" },
              { label: "Web Development", href: "/services/high-performance-web-development" },
              { label: "Content Marketing", href: "/services/content-marketing" },
              { label: "Email Marketing & Automation", href: "/services/email-marketing" },
              { label: "Social Media Management", href: "/services/social-media-management" },
              { label: "Analytics & CRO", href: "/services/data-analytics-cro" },
            ].map((svc) => (
              <AnimateIn key={svc.label}>
                <Link
                  href={svc.href}
                  className="flex items-center gap-4 glass-card rounded-2xl p-5 group"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
                    {svc.label}
                  </span>
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready to Grow Your{" "}
              <span className="gradient-text">{ind.shortTitle} Business?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Book a free strategy call and discover how we can drive measurable
              results for your {ind.title.toLowerCase()} business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-300"
              >
                Book a Free Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
                </svg>
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full glass text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Packages
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-heading text-2xl font-bold text-primary mb-10 tracking-tight">
              Explore Other Industries
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-5">
            {otherIndustries.map((other) => (
              <AnimateIn key={other.slug}>
                <Link
                  href={`/industries/${other.slug}`}
                  className="block glass-card rounded-2xl p-7 group"
                >
                  <h3 className="font-heading font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {other.title}
                  </h3>
                  <p className="text-muted text-sm font-light mt-1 line-clamp-2">
                    {other.description}
                  </p>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
