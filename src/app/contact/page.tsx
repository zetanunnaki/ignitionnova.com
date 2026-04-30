import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";
import { ContactForm } from "@/components/ContactForm";
import siteData from "../../../data/site.json";

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

const contactInfo = [
  {
    number: "01",
    label: "Phone",
    value: siteData.phone,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Address",
    value: siteData.address,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Email",
    value: siteData.email,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

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
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <AnimateIn key={info.label} delay={i * 0.1}>
                    <div className="flex items-start gap-5 glass-card rounded-2xl p-7 group">
                      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-1.5">
                          {info.number}. {info.label}
                        </p>
                        <p className="text-primary font-medium">{info.value}</p>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>

              <AnimateIn delay={0.4}>
                <div className="mt-8 glass-card rounded-2xl p-7 border-accent/10 relative overflow-hidden">
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
