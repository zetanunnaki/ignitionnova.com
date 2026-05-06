import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimateIn } from "@/components/AnimateIn";
import { StructuredData } from "@/components/StructuredData";
import { MDXContent } from "@/components/MDXContent";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ShareButtons } from "@/components/ShareButtons";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getInsights, getInsightBySlug } from "@/lib/mdx";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const insights = getInsights();
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsightBySlug(slug);
  if (!item) return { title: "Insight" };
  return {
    title: item.frontMatter.title,
    description: item.frontMatter.description,
    alternates: { canonical: `https://www.ignitionnova.com/insights/${slug}` },
    openGraph: {
      title: `${item.frontMatter.title} | Ignition Nova`,
      description: item.frontMatter.description,
      url: `https://www.ignitionnova.com/insights/${slug}`,
      type: "article",
      publishedTime: item.frontMatter.date,
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.frontMatter.title} | Ignition Nova`,
      description: item.frontMatter.description,
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const item = getInsightBySlug(slug);
  if (!item) notFound();

  const fm = item.frontMatter;
  const allInsights = getInsights();
  const related = allInsights
    .filter((i) => i.slug !== slug)
    .filter((i) => i.frontMatter.category === fm.category)
    .slice(0, 2);

  return (
    <>
      <ReadingProgress />
      <StructuredData
        type="speakable-article"
        data={{
          title: fm.title,
          description: fm.description,
          date: fm.date,
          authorName: fm.author || "Ignition Nova Team",
          slug,
        }}
      />

      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <img
          src={`/images/insights/${slug}.png`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060810] via-[#060810]/70 to-transparent" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-hot/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Insights", href: "/insights" },
              { label: fm.title as string },
            ]}
          />
          <AnimateIn delay={0.1}>
            {fm.category && (
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold text-accent-light bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                {fm.category}
              </span>
            )}
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2 mb-6 leading-tight tracking-tight">
              {fm.title}
            </h1>
            <div className="flex items-center gap-3 text-white/40 text-sm font-light">
              <span>
                {new Date(fm.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
              <span className="w-1 h-1 bg-white/20 rounded-full" />
              <span>{item.readingTime}</span>
              {fm.author && (
                <>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span>{fm.author as string}</span>
                </>
              )}
            </div>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <article className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <MDXContent source={item.content} />
          </AnimateIn>

          <div className="mt-14 pt-8 border-t border-border/30 flex items-center justify-between">
            <ShareButtons title={fm.title} slug={slug} type="insights" />
            <Link
              href="/insights"
              className="text-accent text-sm font-medium hover:underline"
            >
              Browse All Insights
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-24 relative">
          <div className="absolute inset-0 gradient-mesh" />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-2xl font-bold text-primary mb-10 tracking-tight">
              Related Insights
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/insights/${post.slug}`}
                  className="group block glass-card rounded-3xl overflow-hidden card-hover"
                >
                  <div className="h-36 relative overflow-hidden">
                    <div className="absolute inset-0 gradient-bg" />
                    <img
                      src={`/images/insights/${post.slug}.png`}
                      alt={`Cover image for ${post.frontMatter.title}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-darker)]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-3 text-[10px] text-muted mb-3 font-medium uppercase tracking-wider">
                      <span>
                        {new Date(post.frontMatter.date).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="w-1 h-1 bg-accent/40 rounded-full" />
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="font-heading font-bold text-primary group-hover:text-accent transition-colors duration-300 leading-tight">
                      {post.frontMatter.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Want These Strategies <span className="gradient-text">Applied?</span>
            </h2>
            <p className="text-white/40 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
              Our team can implement everything discussed in this article—and more.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-primary font-bold text-lg hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              Book a Strategy Call
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
