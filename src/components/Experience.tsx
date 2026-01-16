"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollDrawPath, ScrollReveal } from "./effects";

const experiences = [
  {
    company: "Company Name",
    position: "Full Stack Developer",
    type: "Full-time",
    period: "Jan 2024 - Present",
    description:
      "Building scalable web applications and SaaS platforms with modern technologies. Leading frontend architecture and implementing real-time features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },
  {
    company: "Previous Company",
    position: "Full Stack Engineer",
    type: "Part-time",
    period: "Jun 2023 - Dec 2023",
    description:
      "Developed AI-powered SaaS solutions with real-time collaboration features, integrated billing systems, and comprehensive documentation.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    company: "Tech Startup",
    position: "Frontend Developer",
    type: "Full-time",
    period: "Feb 2022 - May 2023",
    description:
      "Created immersive 3D web experiences and virtual tours using React Three Fiber. Optimized performance for complex 3D scenes.",
    technologies: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    company: "Digital Agency",
    position: "Frontend Developer",
    type: "Full-time",
    period: "Aug 2021 - Jan 2022",
    description:
      "Built responsive web applications with focus on accessibility and performance. Implemented design systems and reusable component libraries.",
    technologies: ["React", "TypeScript", "Styled Components"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  // Path data extracted from the target website
  const pathD = "M0.478149 0.14624C179.389 584.988 1024.24 241.063 1203.16 488.791C1382.07 736.519 591.549 555.192 685.399 850.592C754.827 1069.12 1251.74 767.219 1254.66 995.312C1257.47 1214.38 748.65 1128.11 748.65 1392.87C748.65 1678.93 1318.81 1483.96 1318.81 1754.67C1318.81 1978.88 826.875 1777.46 819.13 2001.55C811.613 2219.04 1126.15 2122.45 1318.81 2242.46C1511.48 2362.48 902.26 3183.15 902.26 3183.15";

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden min-h-[200vh]"
    >
      {/* Scroll Path Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30 md:opacity-100">
        <ScrollDrawPath
          d={pathD}
          width={1200}
          height={3000}
          viewBox="0 0 1200 3000"
          strokeWidth={15}
          strokeColor="#0aff9d" // accent-primary
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal>
          <div className="mb-24 text-center">
            <span className="text-sm tracking-[0.2em] uppercase text-accent-primary mb-4 block">
              Career
            </span>
            <h2 className="font-outfit font-semibold text-4xl md:text-5xl text-white">
              Experience
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative space-y-32">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.company + exp.period} className="relative">
              <div
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse text-right" : ""
                }`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 glass-card p-8 hover:border-accent-primary/30 transition-colors duration-500`}>
                  <div className={`flex items-center gap-3 mb-4 flex-wrap ${index % 2 === 0 ? "justify-end" : ""}`}>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                      {exp.type}
                    </span>
                    <span className="text-sm text-white/40">{exp.period}</span>
                  </div>

                  <h3 className="font-outfit font-semibold text-2xl text-white mb-2">{exp.position}</h3>
                  <p className="text-accent-primary font-medium mb-6 text-lg">{exp.company}</p>
                  <p className="text-white/60 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spacer for alignment with the curvy line if needed, or visual connector */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
