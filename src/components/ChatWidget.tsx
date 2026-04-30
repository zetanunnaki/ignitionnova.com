"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", damping: 25 }}
            className="absolute bottom-18 left-0 w-80 rounded-3xl shadow-2xl overflow-hidden border border-white/[0.06]"
          >
            <div className="relative gradient-bg p-7 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 -right-10 w-[150px] h-[150px] rounded-full bg-accent/20 blur-[60px]" />
              </div>
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-white text-lg">
                  Need Help?
                </h3>
                <p className="text-white/50 text-sm mt-1 font-light">
                  Our team typically responds within 2 hours.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 space-y-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-3.5 rounded-2xl hover:bg-accent/[0.03] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
                    Send a Message
                  </p>
                  <p className="text-xs text-muted font-light">Fill out our contact form</p>
                </div>
              </Link>
              <a
                href="mailto:hello@ignitionnova.com"
                className="flex items-center gap-3 p-3.5 rounded-2xl hover:bg-accent/[0.03] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
                    Email Us Directly
                  </p>
                  <p className="text-xs text-muted font-light">hello@ignitionnova.com</p>
                </div>
              </a>
              <Link
                href="/resources"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 p-3.5 rounded-2xl hover:bg-accent/[0.03] transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/10 to-accent-hot/5 border border-accent/10 flex items-center justify-center text-accent">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors duration-300">
                    Free Resources
                  </p>
                  <p className="text-xs text-muted font-light">Download guides & tools</p>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 ${
          open
            ? "bg-primary text-white rotate-0"
            : "gradient-accent text-white animate-pulse-glow"
        }`}
        aria-label="Toggle help menu"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
