"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    let lenis: InstanceType<typeof import("lenis").default> | undefined;

    (async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    })();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return null;
}
