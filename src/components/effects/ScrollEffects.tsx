"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

// Effet de mise à l'échelle qui réagit au scroll entrant et sortant
export function ScrollScale({ children, className = "" }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale de 0.7 à 1 quand il entre, et de 1 à 0.7 quand il sort par le haut
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div ref={ref} style={{ scale: springScale, opacity, y: springY }} className={className}>
      {children}
    </motion.div>
  );
}

// Révélation réversible (se cache quand on scroll up)
export function ScrollReveal({ children, className = "" }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

// Tracé de chemin fluide
export function ScrollDrawPath({
  d,
  viewBox = "0 0 1200 3000",
  className = "",
  strokeColor = "#0aff9d",
  strokeWidth = 20,
}: {
  d: string;
  viewBox?: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  return (
    <div ref={ref} className={`absolute inset-0 pointer-events-none ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox={viewBox}
        fill="none"
        preserveAspectRatio="xMidYMin slice"
      >
        <path
          d={d}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeOpacity="0.05"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <motion.path
          d={d}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}