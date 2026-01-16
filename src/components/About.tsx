"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { LineReveal, BlurReveal, ScrollScale } from "./effects";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  const stats = [
    { number: 3, suffix: "+", label: "Years Experience" },
    { number: 15, suffix: "+", label: "Projects Completed" },
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Framer Motion",
    "Three.js",
    "Figma",
    "MongoDB",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <ScrollScale>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Title and Description */}
            <div>
              <div className="mb-8">
                <LineReveal className="mb-4" once={false}>
                  <span className="text-sm tracking-[0.2em] uppercase text-accent-primary block">
                    About Me
                  </span>
                </LineReveal>
                <LineReveal delay={0.1} once={false}>
                  <h2 className="font-outfit font-semibold text-4xl md:text-5xl text-white">
                    My Short Story
                  </h2>
                </LineReveal>
              </div>

              <div className="space-y-6 mb-8">
                <LineReveal delay={0.2} once={false}>
                  <p className="text-xl text-slate-300 leading-relaxed">
                    Driving measurable growth and engagement through thoughtful design
                    and engineering.
                  </p>
                </LineReveal>

                <LineReveal delay={0.3} once={false}>
                  <p className="text-slate-400 leading-relaxed">
                    I focus on understanding user goals and business objectives to create
                    solutions that deliver real impact. Whether it&apos;s improving
                    engagement, increasing retention, or driving conversions, I approach
                    every project with a results-driven mindset.
                  </p>
                </LineReveal>
              </div>

              <LineReveal delay={0.4} once={false}>
                <a
                  href="#works"
                  className="inline-flex items-center gap-2 text-accent-primary hover:text-white transition-colors group"
                >
                  <span>View My Work</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </LineReveal>
            </div>

            {/* Right - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-8 text-center"
                >
                  <span className="block font-outfit font-semibold text-5xl md:text-6xl text-white mb-2">
                    {isInView && <AnimatedNumber to={stat.number} />}
                    {stat.suffix}
                  </span>
                  <span className="text-sm text-slate-400 tracking-wider uppercase">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollScale>

        {/* Technologies */}
        <div className="mt-20">
          <LineReveal delay={0.5} className="mb-6" once={false}>
            <h3 className="text-sm text-slate-400 tracking-[0.2em] uppercase">
              Technologies I Work With
            </h3>
          </LineReveal>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <BlurReveal
                key={tech}
                delay={0.6 + index * 0.03}
                className="inline-block"
                once={false}
              >
                <span className="tech-tag">
                  {tech}
                </span>
              </BlurReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({ to }: { to: number }) {
  const [current, setCurrent] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: false });

  useEffect(() => {
    if (!isInView) {
      setCurrent(0); // Reset for reversibility
      return;
    }

    const duration = 2000;
    const steps = 60;
    const increment = to / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      if (step >= steps) {
        setCurrent(to);
        clearInterval(timer);
      } else {
        setCurrent(Math.round(increment * step));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [to, isInView]);

  return <span ref={nodeRef}>{current}</span>;
}
