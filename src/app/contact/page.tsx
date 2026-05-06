import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Ignition Nova. Book a free strategy call and discover how we can transform your digital marketing performance.",
  alternates: { canonical: "https://www.ignitionnova.com/contact" },
  openGraph: {
    title: "Contact Ignition Nova | Book a Free Strategy Call",
    description: "Get in touch with Ignition Nova. Book a free strategy call and discover how we can transform your digital marketing performance.",
    url: "https://www.ignitionnova.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-cyan/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-accent-light text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
              Have a Cool Project?{" "}
              <span className="gradient-text">Let&apos;s Talk.</span>
            </h1>
            <p className="text-white/50 text-xl max-w-2xl leading-relaxed font-light">
              We develop and create digital futures. Tell us about your project
              and we&apos;ll get back to you within 24 hours with a custom strategy
              outline.
            </p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32 relative">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3">
              <AnimateIn>
                <ContactForm />
              </AnimateIn>
            </div>

            <div className="lg:col-span-2">
              <AnimateIn>
                <div className="glass-card rounded-2xl p-7 border-accent/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/5 to-transparent rounded-bl-full" />
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-primary mb-3">
                      Free Strategy Call
                    </h3>
                    <p className="text-muted text-sm leading-relaxed font-light">
                      Not sure where to start? Book a free 30-minute strategy call
                      where we&apos;ll audit your current digital presence and
                      recommend the highest-impact starting point.
                    </p>
                  </div>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
