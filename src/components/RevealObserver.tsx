"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Marks photos and sketches as shown the first time they scroll into view.
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-shown]), .sketch:not([data-shown])");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => (el.dataset.shown = "true"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.shown = "true";
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
