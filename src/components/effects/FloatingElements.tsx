"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Blob that follows mouse cursor
export function MouseFollowBlob() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 50 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 300);
      mouseY.set(e.clientY - 300);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-0"
    >
      <div className="w-full h-full rounded-full bg-gradient-to-r from-accent-primary/20 via-accent-primary/10 to-transparent blur-[100px]" />
    </motion.div>
  );
}

// Floating orbs with random motion
interface FloatingOrbProps {
  size?: number;
  color?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingOrb({
  size = 200,
  color = "accent-primary",
  delay = 0,
  duration = 20,
  className = "",
}: FloatingOrbProps) {
  return (
    <motion.div
      animate={{
        y: [0, -30, 0, 30, 0],
        x: [0, 20, 0, -20, 0],
        scale: [1, 1.1, 1, 0.9, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute pointer-events-none ${className}`}
      style={{ width: size, height: size }}
    >
      <div className={`w-full h-full rounded-full bg-${color}/10 blur-[80px]`} />
    </motion.div>
  );
}

// Grain overlay for texture
export function GrainOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03]">
      <svg className="w-full h-full">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}

// Grid background
export function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
      <div
        className="w-full h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />
    </div>
  );
}

// Animated gradient background
export function AnimatedGradientBg() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(10, 255, 157, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, rgba(10, 255, 157, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(10, 255, 157, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(10, 255, 157, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(10, 255, 157, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="w-full h-full"
      />
    </div>
  );
}

// Floating particles
export function FloatingParticles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 5,
      }))
    );
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
