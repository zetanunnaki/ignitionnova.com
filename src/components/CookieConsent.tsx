"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-border p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-primary font-medium text-sm mb-1">
                We respect your privacy
              </p>
              <p className="text-muted text-xs leading-relaxed">
                We use only essential cookies for site functionality. No
                third-party tracking. Read our{" "}
                <a href="/privacy" className="text-accent hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="px-5 py-2.5 rounded-lg border border-border text-muted text-sm font-medium hover:bg-surface transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 rounded-lg gradient-accent text-white text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
