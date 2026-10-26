import type { DOMKeyframesDefinition } from "motion";

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

interface Entrance {
  frames: DOMKeyframesDefinition;
  duration: number;
  delay?: number;
}

export const motionVariants: Record<string, Entrance> = {
  reveal: { frames: { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] }, duration: 0.6 },
  service: { frames: { opacity: [0, 1], transform: ["translateY(32px)", "translateY(0px)"] }, duration: 0.65 },
  project: { frames: { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] }, duration: 0.65, delay: 0.12 },
  preview: { frames: { transform: ["scale(1.04)", "scale(1)"] }, duration: 0.85, delay: 0.12 },
  interface: { frames: { opacity: [0, 1], transform: ["translateY(18px) scale(0.96)", "translateY(0px) scale(1)"] }, duration: 0.7 },
  code: { frames: { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0px)"] }, duration: 0.6, delay: 0.18 },
  footer: { frames: { opacity: [0, 1], transform: ["translateY(12px)", "translateY(0px)"] }, duration: 0.5 },
  nav: { frames: { opacity: [0, 1], transform: ["translateY(-8px)", "translateY(0px)"] }, duration: 0.4 },
  first: { frames: { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0px)"] }, duration: 0.5 },
  highlight: { frames: { opacity: [0, 1], transform: ["translateY(22px)", "translateY(0px)"] }, duration: 0.6, delay: 0.15 },
  ink: { frames: { clipPath: ["inset(0 50% 0 50%)", "inset(0 -5% 0 -5%)"] }, duration: 0.6, delay: 0.15 },
  last: { frames: { opacity: [0, 1], transform: ["translateY(26px)", "translateY(0px)"] }, duration: 0.6, delay: 0.35 },
  supporting: { frames: { opacity: [0, 1], transform: ["translateY(18px)", "translateY(0px)"] }, duration: 0.5, delay: 0.65 },
  scene: { frames: { opacity: [0, 1], transform: ["translateY(32px) scale(0.96)", "translateY(0px) scale(1)"] }, duration: 0.7, delay: 0.85 },
  phone: { frames: { opacity: [0, 1], transform: ["translate(22px, 10px)", "translate(0px, 0px)"] }, duration: 0.55, delay: 1 },
  terminal: { frames: { opacity: [0, 1], transform: ["translateY(24px)", "translateY(0px)"] }, duration: 0.5, delay: 1.05 },
};
