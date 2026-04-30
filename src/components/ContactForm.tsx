"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setFormState("sent");
      formRef.current?.reset();
    } catch {
      setFormState("error");
    }
  };

  if (formState === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card rounded-3xl p-14 text-center"
      >
        <div className="w-18 h-18 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-8">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-heading font-bold text-2xl text-primary mb-3">Message Sent!</h3>
        <p className="text-muted font-light">We&apos;ll get back to you within 24 hours.</p>
      </motion.div>
    );
  }

  const inputClasses = "w-full px-5 py-4 rounded-2xl border border-border/50 bg-white/60 backdrop-blur-sm text-primary text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all duration-300 placeholder:text-muted/50";

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 lg:p-10 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClasses}
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClasses}
            placeholder="john@company.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className={inputClasses}
            placeholder="Acme Inc."
          />
        </div>
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
            Monthly Budget
          </label>
          <select id="budget" name="budget" className={inputClasses}>
            <option value="">Select range</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="$50,000+">$50,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="service" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
          Service of Interest
        </label>
        <select id="service" name="service" className={inputClasses}>
          <option value="">Select a service</option>
          <option value="Generative Engine Optimization">GEO & AI Search</option>
          <option value="Technical SEO & Core Web Vitals">Technical SEO</option>
          <option value="Paid Advertising & PPC">Paid Ads & PPC</option>
          <option value="High-Performance Web Development">Web Development</option>
          <option value="Content Marketing">Content Marketing</option>
          <option value="Social Media Management">Social Media</option>
          <option value="Email Marketing">Email Marketing</option>
          <option value="Data Analytics & CRO">Analytics & CRO</option>
          <option value="Comprehensive Strategy">Comprehensive Strategy</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-primary uppercase tracking-wider mb-3">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClasses} resize-none`}
          placeholder="Describe your goals, challenges, and timeline..."
        />
      </div>
      <button
        type="submit"
        disabled={formState === "sending"}
        className="btn-primary w-full py-4 rounded-2xl text-white font-semibold text-sm disabled:opacity-50"
      >
        <span>{formState === "sending" ? "Sending..." : "Send Message"}</span>
      </button>
      {formState === "error" && (
        <p className="text-accent-hot text-sm text-center font-medium">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
