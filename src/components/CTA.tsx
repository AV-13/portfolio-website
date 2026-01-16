"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LineReveal, ScrollScale } from "./effects";

const marqueeTexts = [
  "Let's Create Together",
  "Digital Excellence",
  "Innovation Driven",
  "Premium Quality",
  "Future Ready",
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-void-100 to-void pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-primary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Marquee */}
      <div className="mb-20 overflow-hidden relative">
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map((text, index) => (
            <span
              key={index}
              className="font-outfit font-semibold text-5xl md:text-7xl lg:text-8xl mx-8 text-white/[0.03]"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <LineReveal className="mb-4" once={false}>
              <span className="text-sm tracking-[0.2em] uppercase text-accent-primary block">
                Start a Project
              </span>
            </LineReveal>
            <LineReveal delay={0.1} className="mb-6" once={false}>
              <h2 className="font-outfit font-semibold text-4xl md:text-5xl lg:text-6xl text-white">
                Let&apos;s Build Something
                <span className="text-gradient"> Amazing</span>
              </h2>
            </LineReveal>
            <LineReveal delay={0.2} className="mb-8" once={false}>
              <p className="text-white/40 text-lg leading-relaxed">
                Have a project in mind? I&apos;d love to hear about it. Whether you need
                a full-stack application, a stunning UI, or a complete digital
                transformation, let&apos;s make it happen.
              </p>
            </LineReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="gradient-button text-white"
              >
                <span className="flex items-center gap-2">
                  Start a Project
                  <span>→</span>
                </span>
              </a>
              <a
                href="mailto:your@email.com"
                className="glass-button text-white/80 hover:text-white"
              >
                Say Hello
              </a>
            </motion.div>
          </div>

          <ScrollScale>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Response Time", value: "< 24h", gradient: "from-accent-primary to-accent-primary/60" },
                { label: "Projects Delivered", value: "15+", gradient: "from-accent-primary/80 to-accent-primary/40" },
                { label: "Client Satisfaction", value: "100%", gradient: "from-accent-primary/60 to-accent-primary/20" },
                { label: "Years Experience", value: "3+", gradient: "from-accent-primary/40 to-transparent" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-6 text-center group hover:border-white/20 transition-all"
                >
                  <span className={`block font-outfit font-semibold text-3xl bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/40 uppercase tracking-wider">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </ScrollScale>
        </div>
      </div>

      {/* Second Marquee - opposite direction */}
      <div className="mt-20 overflow-hidden">
        <motion.div
          animate={{ x: [-1500, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...marqueeTexts, ...marqueeTexts, ...marqueeTexts].map((text, index) => (
            <span
              key={index}
              className="font-megrim text-5xl md:text-7xl lg:text-8xl mx-8 text-white/[0.02]"
            >
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
