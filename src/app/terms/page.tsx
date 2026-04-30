import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Ignition Nova's terms of service. Read our terms and conditions for using our website and services.",
  alternates: { canonical: "https://www.ignitionnova.com/terms" },
};

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-white/40 font-light">Last updated: April 19, 2026</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-heading prose-headings:text-primary prose-headings:tracking-tight prose-p:font-light prose-p:text-muted prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-li:text-muted prose-li:font-light">
          <AnimateIn>
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using the Ignition Nova website and services, you agree to
              be bound by these Terms of Service. If you do not agree with any part of
              these terms, please do not use our website or services.
            </p>

            <h2>Services</h2>
            <p>
              Ignition Nova provides digital marketing services including but not limited
              to: Generative Engine Optimization, Technical SEO, Web Development, and
              Data Analytics & CRO. Specific service terms, deliverables, and timelines
              are outlined in individual client agreements.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and
              software, is the property of Ignition Nova and is protected by copyright
              and intellectual property laws. You may not reproduce, distribute, or create
              derivative works without our express written permission.
            </p>

            <h2>Client Deliverables</h2>
            <p>
              Upon full payment, clients receive ownership of custom deliverables as
              specified in their service agreement. Ignition Nova retains the right to
              showcase anonymized results in case studies and marketing materials unless
              otherwise agreed in writing.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              While we strive for excellence in all our engagements, Ignition Nova
              provides marketing services on a best-effort basis. We do not guarantee
              specific rankings, traffic numbers, or conversion rates, as these depend
              on numerous factors outside our control.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate a service agreement with 30 days written notice.
              Upon termination, the client is responsible for payment of services rendered
              through the termination date.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with applicable
              law. Any disputes arising from these terms shall be resolved through
              arbitration.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:hello@ignitionnova.com">hello@ignitionnova.com</a>.
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
