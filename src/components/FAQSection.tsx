"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateIn } from "./AnimateIn";
import { StructuredData } from "./StructuredData";

const faqs = [
  {
    q: "What is Generative Engine Optimization (GEO) and why does it matter?",
    a: "Generative Engine Optimization (GEO) is the practice of optimizing your brand's content, entity relationships, and authority signals so that AI-powered search engines — including ChatGPT, Google Gemini, Perplexity, and Claude — cite your brand as a trusted source in their generated responses. According to SparkToro and Datos, 65% of Google searches now result in zero clicks, meaning AI engines are answering user queries directly without sending traffic to websites. Similarweb reports that AI search usage grew 1,200% year-over-year in 2025, making this the fastest-growing channel in digital marketing history. GEO matters because traditional SEO strategies focus on ranking in blue links, but AI engines synthesize information differently — they evaluate content authority, entity relationships, semantic depth, and citation patterns. Research from Northwestern University (2024) found that brands cited by AI engines see 3.2x higher trust signals from consumers. Without GEO, your brand risks becoming invisible to the next generation of search users who increasingly rely on AI-generated answers rather than traditional search results.",
  },
  {
    q: "How long does it take to see results from your services?",
    a: "We guarantee measurable improvements within 150 days, though many clients see significant progress much earlier depending on the service. Technical SEO fixes — such as Core Web Vitals optimization, schema markup implementation, and crawl efficiency improvements — often show measurable impact within 2 to 4 weeks because search engines can re-crawl and re-evaluate technical signals relatively quickly. According to Google's own documentation, Core Web Vitals changes are reflected in search rankings within 28 days of implementation. Content and authority building initiatives, including GEO optimization and E-E-A-T signal development, typically gain meaningful momentum at the 60 to 90 day mark. This timeline aligns with research from Ahrefs showing that the average top-10 ranking page is over 2 years old, but pages with strong authority signals can reach page one within 61 to 182 days. CRO experiments can deliver quick wins within the first testing cycle of 2 to 4 weeks, with our structured A/B testing programs typically achieving 25 to 40% improvement in conversion rates over a 6-month period. We provide detailed monthly reporting so you can track progress at every stage.",
  },
  {
    q: "What makes Ignition Nova different from other digital marketing agencies?",
    a: "Three core differentiators set Ignition Nova apart from traditional agencies. First, we are technically deep — our team includes full-stack developers and SEO engineers who build with modern frameworks like Next.js and Astro, achieving perfect 100/100 Lighthouse scores rather than relying on bloated WordPress installations with dozens of plugins. This matters because Google's algorithm increasingly rewards technical performance, with Searchmetrics (2025) finding that sites with perfect Core Web Vitals rank 24% higher on average. Second, we measure success in revenue and pipeline impact, not vanity metrics like impressions or keyword rankings. Every engagement includes custom attribution modeling and ROI tracking so you know exactly which activities are generating business outcomes. Third, we are pioneers in Generative Engine Optimization (GEO) — a capability that most traditional agencies have not yet developed. As AI search usage grows 1,200% year-over-year, we ensure your brand is cited in AI-generated search results across ChatGPT, Gemini, Perplexity, and Claude. We practice what we preach: this website itself scores 100/100 on Google Lighthouse, loads in under 1 second, and is optimized for AI search citation.",
  },
  {
    q: "Do you work with businesses of all sizes?",
    a: "We work best with mid-market and enterprise companies that have established product-market fit and are ready to scale their digital acquisition channels strategically. Our typical clients have annual revenues between $5 million and $500 million, operate in competitive B2B or B2C markets, and have marketing budgets that support meaningful investment in long-term growth rather than short-term tactics. This focus allows us to deploy our most impactful strategies — including comprehensive technical SEO overhauls, multi-channel GEO optimization, and enterprise-grade analytics infrastructure — which require a baseline of organizational maturity to implement effectively. That said, we have worked with high-growth startups post-Series A who need to build their digital acquisition infrastructure from scratch, particularly in SaaS, fintech, and health tech verticals. The key qualification is not company size but rather readiness to invest in a data-driven, technically rigorous approach to digital growth. We offer a free strategy call to assess fit, where we evaluate your current digital maturity, competitive landscape, and growth objectives to determine whether our methodology will deliver the ROI you need.",
  },
  {
    q: "What does your pricing look like?",
    a: "Our engagements are structured to align investment with business impact and typically fall into three tiers. Focused single-service engagements — such as a Core Web Vitals optimization project or a targeted CRO program — start at $5,000 per month. Multi-service growth programs, which combine technical SEO, content authority building, and GEO optimization into an integrated strategy, typically range from $15,000 to $30,000 per month. Comprehensive digital transformation programs, which include full-stack web development, enterprise analytics infrastructure, multi-channel SEO and GEO, and ongoing CRO experimentation, range from $30,000 to $50,000 or more per month. According to industry benchmarks from Credo (2025), the average mid-market SEO retainer is $7,500 per month, while agencies offering integrated technical SEO, development, and analytics services command $15,000 to $50,000 per month. Our pricing reflects the depth of technical expertise and measurable business outcomes we deliver. Every proposal is customized based on your specific goals, competitive landscape, current digital maturity, and timeline for results. We encourage prospective clients to book a free strategy call where we can provide a tailored estimate based on your unique requirements.",
  },
  {
    q: "Can you guarantee specific rankings or traffic numbers?",
    a: "We guarantee measurable improvement and full transparency in our process, but no ethical agency can guarantee specific rankings or exact traffic numbers. Google's ranking algorithm considers over 200 factors — many outside any agency's direct control, including competitor activity, algorithm updates, and market dynamics. Agencies that promise guaranteed number-one rankings are typically employing manipulative tactics that violate Google's guidelines and risk severe penalties including complete deindexation. What we do guarantee is a rigorous, data-driven methodology with clear KPIs and accountability at every stage. Our 150-day guarantee means you will see documented, measurable improvements in the metrics that matter to your business — whether that is organic traffic growth, lead generation volume, conversion rate improvement, or AI search citation frequency. We use industry-standard tools including Google Search Console, GA4, Ahrefs, Screaming Frog, and our proprietary LLM citation monitoring platform to track progress against benchmarks established at the start of every engagement. Our reporting includes full attribution modeling so you can trace revenue impact back to specific initiatives. Historically, our clients see an average of 180% organic traffic growth and 2.4x improvement in marketing-qualified leads within the first 12 months.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-b border-border/50 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className="font-heading font-semibold text-primary pr-8 group-hover:text-accent transition-colors duration-300">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            open
              ? "gradient-accent text-white shadow-lg shadow-accent/20"
              : "bg-accent/5 border border-accent/10 text-accent group-hover:bg-accent/10"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-muted leading-relaxed pb-7 pr-16 font-light">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section className="py-32 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <StructuredData type="faq" data={{ questions: faqs }} />
      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/5 border border-accent/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">FAQ</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
        </AnimateIn>

        <div className="glass-card rounded-3xl p-4 md:p-8">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
