import { Metadata } from "next";
import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { getInsights } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Insights & Content Hub",
  description:
    "Expert insights on SEO, Generative Engine Optimization, web performance, CRO, and digital marketing strategy for 2026 and beyond.",
  alternates: { canonical: "https://www.ignitionnova.com/insights" },
  openGraph: {
    title: "Expert Digital Marketing Insights | Ignition Nova",
    description: "Actionable strategies, technical deep-dives, and industry analysis on SEO, GEO, web performance, CRO, and digital marketing.",
    url: "https://www.ignitionnova.com/insights",
  },
};

const categoryColors: Record<string, string> = {
  Strategy: "bg-accent/10 text-accent border border-accent/20",
  Technical: "bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20",
  Industry: "bg-success/10 text-success border border-success/20",
};

export default function InsightsPage() {
  const insights = getInsights();

  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent-light text-xs font-semibold uppercase tracking-widest">Insights & Content Hub</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Expert Insights for{" "}
              <span className="gradient-text">Digital Leaders</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              Actionable strategies, technical deep-dives, and industry analysis
              from the team that practices what it preaches.
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((post, i) => {
              const fm = post.frontMatter;
              return (
                <AnimateIn key={post.slug} delay={i * 0.08}>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group block glass-card rounded-3xl overflow-hidden card-hover h-full"
                  >
                    <div className="h-52 relative overflow-hidden">
                      <div className="absolute inset-0 gradient-bg" />
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent-hot/10" />
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-accent/20 blur-[80px] group-hover:bg-accent/30 transition-all duration-700" />
                      </div>
                      <div className="absolute bottom-5 left-6">
                        <span
                          className={`text-[10px] font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm ${
                            categoryColors[fm.category || "Strategy"] ||
                            categoryColors.Strategy
                          }`}
                        >
                          {fm.category || "Strategy"}
                        </span>
                      </div>
                    </div>
                    <div className="p-7">
                      <div className="flex items-center gap-3 text-[10px] text-muted mb-4 font-medium uppercase tracking-wider">
                        <span>
                          {new Date(fm.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                          })}
                        </span>
                        <span className="w-1 h-1 bg-accent/40 rounded-full" />
                        <span>{post.readingTime}</span>
                      </div>
                      <h2 className="font-heading font-bold text-lg text-primary mb-3 group-hover:text-accent transition-colors duration-300 leading-tight">
                        {fm.title}
                      </h2>
                      <p className="text-muted text-sm leading-relaxed font-light">
                        {fm.description}
                      </p>
                    </div>
                  </Link>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
