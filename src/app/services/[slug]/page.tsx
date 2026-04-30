import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateIn } from "@/components/AnimateIn";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import services from "../../../../data/services.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `https://www.ignitionnova.com/services/${slug}` },
    openGraph: {
      title: `${service.title} | Ignition Nova`,
      description: service.description,
      url: `https://www.ignitionnova.com/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Ignition Nova`,
      description: service.description,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <StructuredData
        type="service"
        data={{ title: service.title, description: service.description, slug: service.slug, definition: service.definition }}
      />
      {"definition" in service && (
        <StructuredData
          type="defined-term"
          data={{ name: service.title, description: service.definition }}
        />
      )}

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
              { label: "Services", href: "/services" },
              { label: service.shortTitle },
            ]}
          />
          <AnimateIn>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-white/70 mb-8 transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5m0 0l7 7m-7-7l7-7" />
              </svg>
              All Services
            </Link>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent-light text-xs font-semibold uppercase tracking-widest">{service.number}. {service.shortTitle}</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 max-w-4xl tracking-tight leading-[1.05]">
              {service.title}
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              {service.description}
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {"definition" in service && (
              <AnimateIn>
                <div className="glass-card rounded-3xl p-8 lg:p-10 flex items-start gap-6 border-accent/10">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-primary mb-4 tracking-tight">
                      What Is {service.title}?
                    </h2>
                    <p className="text-muted leading-relaxed text-lg font-light">
                      {service.definition}
                    </p>
                    {"statistics" in service && (
                      <ul className="mt-6 space-y-3">
                        {(service.statistics as string[]).map((stat, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted text-sm">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
                            </svg>
                            <span>{stat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </AnimateIn>
            )}

            <AnimateIn>
              <div className="glass-card rounded-3xl p-8 lg:p-10 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4 tracking-tight">
                    The Problem
                  </h2>
                  <p className="text-muted leading-relaxed text-lg font-light">
                    {service.problem}
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-warning/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4 tracking-tight">
                    What&apos;s at Stake
                  </h2>
                  <p className="text-muted leading-relaxed text-lg font-light">
                    {service.agitation}
                  </p>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <div className="glass-card rounded-3xl p-8 lg:p-10 flex items-start gap-6 border-accent/10">
                <div className="w-14 h-14 rounded-2xl bg-success/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold text-primary mb-4 tracking-tight">
                    Our Solution
                  </h2>
                  <p className="text-muted leading-relaxed text-lg font-light">
                    {service.solution}
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Deliverables</span>
            </div>
            <h2 className="font-heading text-4xl font-bold text-primary mb-12 tracking-tight">
              What You <span className="gradient-text">Get</span>
            </h2>
          </AnimateIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {service.deliverables.map((d, i) => (
              <AnimateIn key={d} delay={i * 0.05}>
                <div className="flex items-center gap-4 glass-card rounded-2xl p-6 group">
                  <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-primary">{d}</span>
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
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Book a free strategy call and discover how our {service.shortTitle}{" "}
              services can transform your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              Get in Touch
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m0 0l-7-7m7 7l-7 7" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <h2 className="font-heading text-2xl font-bold text-primary mb-10 tracking-tight">
              Explore Our Other Services
            </h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-5">
            {otherServices.map((s) => (
              <AnimateIn key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block glass-card rounded-2xl p-7 group"
                >
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">{s.number}</span>
                  <h3 className="font-heading font-bold text-primary mt-2 group-hover:text-accent transition-colors duration-300">
                    {s.shortTitle}
                  </h3>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
