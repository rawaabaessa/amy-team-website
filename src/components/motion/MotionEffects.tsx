"use client";

import { useEffect, useRef } from "react";
import { animate } from "motion/mini";
import { useLocale } from "next-intl";
import { MOTION_EASE, motionVariants } from "./motionVariants";

/** Progressive enhancement: server HTML stays visible without JS or Motion. */
export function MotionEffects() {
  const locale = useLocale();
  const marker = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = marker.current?.closest("#home");
    if (!root) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const cleanups = new Set<() => void>();
    let observer: IntersectionObserver | undefined;

    function play(element: HTMLElement, extraDelay = 0) {
      const variant = motionVariants[element.dataset.motion ?? "reveal"];
      if (!variant) return;
      // Transforms compose with Tailwind's individual rotate/scale properties.
      // Restore only our properties, leaving the original device styling intact.
      const properties = Object.keys(variant.frames).map((key) =>
        key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`),
      );
      const original = properties.map((property) => element.style.getPropertyValue(property));
      const restore = () => properties.forEach((property, i) => {
        if (original[i]) element.style.setProperty(property, original[i]);
        else element.style.removeProperty(property);
      });
      try {
        const controls = animate(element, variant.frames, {
          duration: variant.duration,
          delay: (variant.delay ?? 0) + extraDelay,
          ease: MOTION_EASE,
        });
        const cleanup = () => { controls.cancel(); restore(); };
        cleanups.add(cleanup);
        void controls.then(() => { cleanup(); cleanups.delete(cleanup); });
      } catch {
        restore();
      }
    }

    function stop() {
      observer?.disconnect();
      cleanups.forEach((cleanup) => cleanup());
      cleanups.clear();
    }

    if (!preference.matches) {
      root.querySelectorAll<HTMLElement>("[data-entrance]").forEach((element) => play(element));
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver((entries) => {
          let visibleCard = 0;
          entries.filter((entry) => entry.isIntersecting).forEach((entry) => {
            const element = entry.target as HTMLElement;
            observer?.unobserve(element);
            // Stagger only cards visible together, not the entire mobile column.
            play(element, element.dataset.motion === "service" ? visibleCard++ * 0.1 : 0);
          });
        }, { threshold: 0.12 });
        root.querySelectorAll<HTMLElement>("[data-motion]:not([data-entrance])").forEach((element) => observer?.observe(element));
      }
    }
    // Changing the OS preference mid-animation immediately restores static content.
    preference.addEventListener("change", stop);
    return () => { stop(); preference.removeEventListener("change", stop); };
  }, [locale]);

  return <span ref={marker} hidden aria-hidden="true" />;
}
