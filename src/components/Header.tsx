"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { href: "/services/generative-engine-optimization", label: "GEO & AI Search" },
  { href: "/services/technical-seo-core-web-vitals", label: "Technical SEO" },
  { href: "/services/paid-advertising", label: "Paid Ads & PPC" },
  { href: "/services/high-performance-web-development", label: "Web Development" },
  { href: "/services/content-marketing", label: "Content Marketing" },
  { href: "/services/social-media-management", label: "Social Media" },
  { href: "/services/email-marketing", label: "Email Marketing" },
  { href: "/services/data-analytics-cro", label: "Analytics & CRO" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Case Studies" },
  { href: "/insights", label: "Insights" },
  { href: "/pricing", label: "Packages" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_30px_rgba(0,0,0,0.04)] border-b border-white/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center font-heading font-bold text-white text-lg group-hover:scale-110 transition-transform duration-300">
              IN
            </div>
            <div className="absolute inset-0 rounded-xl gradient-accent opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
          </div>
          <span
            className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            Ignition Nova
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href} className="relative">
              {link.dropdown ? (
                <div ref={dropdownRef}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 flex items-center gap-1 ${
                      scrolled
                        ? "text-primary/70 hover:text-primary hover:bg-surface"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}>
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-black/10 border border-border/30 overflow-hidden"
                      >
                        <div className="p-2">
                          <Link
                            href="/services"
                            onClick={() => setServicesOpen(false)}
                            className="block px-4 py-2.5 text-sm font-semibold text-primary rounded-xl hover:bg-surface transition-colors"
                          >
                            All Services
                          </Link>
                          <div className="h-px bg-border/30 my-1" />
                          {services.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2.5 text-sm text-muted rounded-xl hover:bg-surface hover:text-primary transition-colors"
                            >
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 ${
                    scrolled
                      ? "text-primary/70 hover:text-primary hover:bg-surface"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-semibold"
          >
            <span>Book a Call</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-4 h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "opacity-0 translate-x-4" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-primary" : "bg-white"
              } ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <ul className="px-6 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-primary/70 font-medium hover:text-accent hover:bg-surface transition-all"
                      >
                        {link.label}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-6 space-y-1 pb-2">
                              <Link
                                href="/services"
                                onClick={() => setMobileOpen(false)}
                                className="block py-2 px-4 rounded-xl text-sm font-medium text-primary/70 hover:text-accent hover:bg-surface transition-all"
                              >
                                All Services
                              </Link>
                              {services.map((s) => (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block py-2 px-4 rounded-xl text-sm text-muted hover:text-accent hover:bg-surface transition-all"
                                >
                                  {s.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 px-4 rounded-xl text-primary/70 font-medium hover:text-accent hover:bg-surface transition-all"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 rounded-full gradient-accent text-white font-semibold"
                >
                  Book a Call
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
