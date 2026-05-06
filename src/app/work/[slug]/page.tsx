import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateIn } from "@/components/AnimateIn";
import { StructuredData } from "@/components/StructuredData";
import { MDXContent } from "@/components/MDXContent";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButtons } from "@/components/ShareButtons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getCaseStudyBySlug } from "@/lib/mdx";
import caseStudiesData from "../../../../data/case-studies.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const jsonData = caseStudiesData.find((cs) => cs.slug === slug);
  if (!jsonData) return {};
  return {
    title: jsonData.title,
    description: jsonData.excerpt,
    alternates: { canonical: `https://www.ignitionnova.com/work/${slug}` },
    openGraph: {
      title: `${jsonData.title} | Ignition Nova Case Study`,
      description: jsonData.excerpt,
      url: `https://www.ignitionnova.com/work/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${jsonData.title} | Ignition Nova`,
      description: jsonData.excerpt,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const jsonData = caseStudiesData.find((cs) => cs.slug === slug);
  if (!jsonData) notFound();

  const mdxItem = getCaseStudyBySlug(slug);

  return (
    <>
      <ReadingProgress />
      <StructuredData
        type="case-study"
        data={{ title: jsonData.title, excerpt: jsonData.excerpt, slug: jsonData.slug }}
      />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        {jsonData.heroImage && (
          <img
            src={jsonData.heroImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/70 to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/work" },
              { label: jsonData.client },
            ]}
          />
          <AnimateIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-[10px] font-semibold text-white/90 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 uppercase tracking-widest">
                {jsonData.industry}
              </span>
              {jsonData.services.map((s) => (
                <span key={s} className="text-[10px] font-medium text-white/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/[0.06]">
                  {s}
                </span>
              ))}
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              {jsonData.title}
            </h1>
            <p className="text-white/50 text-xl font-light">{jsonData.excerpt}</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-8 relative z-10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-20">
            {jsonData.metrics.map((m, i) => (
              <AnimateIn key={m.label} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 text-center shadow-xl">
                  <p className="text-3xl font-bold gradient-text font-heading">{m.value}</p>
                  <p className="text-[10px] text-muted mt-2 font-medium uppercase tracking-wider">{m.label}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <article className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            {mdxItem ? (
              <MDXContent source={mdxItem.content} />
            ) : (
              <div className="prose prose-lg prose-slate prose-headings:font-heading prose-headings:text-primary prose-headings:tracking-tight prose-p:font-light prose-p:text-muted">
                <h2>The Challenge</h2>
                <p>
                  {jsonData.client} came to us facing significant challenges in their
                  digital presence. Operating in the competitive {jsonData.industry}{" "}
                  space, they needed a strategic partner who could deliver measurable
                  results—not just vanity metrics.
                </p>
                <h2>Our Approach</h2>
                <p>
                  We developed a comprehensive strategy leveraging{" "}
                  {jsonData.services.join(", ")} to address their core challenges. Our
                  team conducted extensive audits, identified high-impact
                  opportunities, and executed a phased rollout designed for maximum ROI.
                </p>
                <h2>The Results</h2>
                <p>
                  The impact was transformative. Within the first 90 days, we began
                  seeing significant improvements across all key metrics. By the 6-month
                  mark, {jsonData.client} had achieved industry-leading performance
                  benchmarks.
                </p>
              </div>
            )}
          </AnimateIn>

          <div className="mt-14 pt-8 border-t border-border/30">
            <ShareButtons title={jsonData.title} slug={slug} type="work" />
          </div>
        </div>
      </article>

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready for Similar <span className="gradient-text">Results?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Every project starts with a conversation. Let&apos;s discuss yours.
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
    </>
  );
}
