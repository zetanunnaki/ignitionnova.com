"use client";

import Link from "next/link";
import { useState } from "react";
import siteData from "../../data/site.json";

const footerLinks = {
  services: [
    { href: "/services/generative-engine-optimization", label: "GEO & AI Search" },
    { href: "/services/technical-seo-core-web-vitals", label: "Technical SEO" },
    { href: "/services/paid-advertising", label: "Paid Ads & PPC" },
    { href: "/services/high-performance-web-development", label: "Web Development" },
    { href: "/services/content-marketing", label: "Content Marketing" },
    { href: "/services/social-media-management", label: "Social Media" },
    { href: "/services/email-marketing", label: "Email Marketing" },
    { href: "/services/data-analytics-cro", label: "Analytics & CRO" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/industries", label: "Industries" },
    { href: "/work", label: "Case Studies" },
    { href: "/insights", label: "Insights" },
    { href: "/pricing", label: "Packages" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#060810] text-white overflow-hidden">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[180px]" />
        <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-accent-hot/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 pb-16 border-b border-white/[0.06]">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <div className="relative">
                <div className="w-11 h-11 rounded-xl gradient-accent flex items-center justify-center font-heading font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300">
                  IN
                </div>
                <div className="absolute inset-0 rounded-xl gradient-accent opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                Ignition Nova
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-8 font-light">
              Your trusted partner for digital marketing excellence. We guarantee
              results that move the needle.
            </p>
            <div className="flex items-center gap-3">
              {[
                { label: "Facebook", href: siteData.social.facebook, icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { label: "Twitter", href: siteData.social.twitter, icon: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { label: "Instagram", href: siteData.social.instagram, icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" },
                { label: "LinkedIn", href: siteData.social.linkedin, icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white hover:bg-accent/20 hover:border-accent/30 transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-accent-light transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-accent-light transition-colors duration-300 font-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-white/60 mb-8">
              Newsletter
            </h4>
            <p className="text-white/40 text-sm mb-6 font-light leading-relaxed">
              Get the latest insights on SEO, GEO, and digital marketing delivered
              to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-success text-sm font-medium">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 glass rounded-xl text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-accent/40 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="btn-primary w-full px-4 py-3 rounded-xl text-white text-sm font-semibold"
                >
                  <span>Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm font-light">
            &copy; {new Date().getFullYear()} Ignition Nova Digital Marketing Agency. All
            rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-white/25 text-sm hover:text-white/50 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/25 text-sm hover:text-white/50 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
