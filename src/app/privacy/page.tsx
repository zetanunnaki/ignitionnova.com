import { Metadata } from "next";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Ignition Nova's privacy policy. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.ignitionnova.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#060810]" />
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[180px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
          <AnimateIn>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-white/40 font-light">Last updated: April 19, 2026</p>
          </AnimateIn>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 prose prose-lg prose-slate prose-headings:font-heading prose-headings:text-primary prose-headings:tracking-tight prose-p:font-light prose-p:text-muted prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-li:text-muted prose-li:font-light">
          <AnimateIn>
            <h2>Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you fill out a
              contact form, subscribe to our newsletter, download a resource, or communicate
              with us. This may include your name, email address, company name, phone number,
              and any message content you provide.
            </p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Data Storage & Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal
              information. Form submissions are processed through Formspree, which maintains
              its own privacy and security standards. We do not store sensitive payment
              information on our servers.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our website may use third-party analytics services to help us understand
              website usage. These services may collect information about your use of our
              website through cookies and similar technologies. We use privacy-respecting
              analytics tools that comply with GDPR and CCPA requirements.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Data portability where applicable</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website uses only essential cookies required for site functionality. We do
              not use third-party tracking cookies or sell your data to advertisers.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:hello@ignitionnova.com">hello@ignitionnova.com</a>.
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
