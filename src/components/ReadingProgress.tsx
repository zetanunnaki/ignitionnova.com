"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const pct = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      setProgress(pct);
      scaleX.set(pct);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scaleX]);

  if (progress < 0.02) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-1 gradient-accent origin-left"
      style={{ scaleX }}
    />
  );
}
