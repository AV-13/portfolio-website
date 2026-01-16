"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TiltCard, LineReveal, ScrollScale } from "./effects";

const services = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building complete web applications from front to back using Next.js, React, Node.js, TypeScript, PostgreSQL, and RESTful APIs.",
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    gradient: "from-accent-primary to-accent-secondary",
  },
  {
    number: "02",
    title: "UI/UX Design & Frontend",
    description:
      "Creating beautiful, intuitive interfaces with pixel-perfect attention to detail. From wireframes in Figma to polished, animated experiences.",
    technologies: ["Figma", "Tailwind CSS", "Framer Motion", "Design Systems"],
    gradient: "from-accent-secondary to-accent-tertiary",
  },
  {
    number: "03",
    title: "SaaS Platform Development",
    description:
      "Developing scalable SaaS products with subscription management, Stripe integration, multi-tenant architecture, and secure authentication.",
    technologies: ["Stripe", "Auth.js", "Multi-tenant", "Subscriptions"],
    gradient: "from-accent-tertiary to-accent-primary",
  },
  {
    number: "04",
    title: "API & System Architecture",
    description:
      "Designing robust, scalable backend systems with optimized databases, secure APIs, and performance-focused architecture.",
    technologies: ["PostgreSQL", "Prisma", "MongoDB", "REST APIs", "Security"],
    gradient: "from-accent-primary via-accent-secondary to-accent-tertiary",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="mb-16">
          <LineReveal className="mb-4">
            <span className="text-sm tracking-[0.2em] uppercase text-accent-primary block">
              What I Do
            </span>
          </LineReveal>
          <LineReveal delay={0.1} className="mb-4">
            <h2 className="font-outfit font-semibold text-4xl md:text-5xl text-white">
              My Expertise
            </h2>
          </LineReveal>
          <LineReveal delay={0.2}>
            <p className="text-slate-400 text-lg max-w-2xl">
              Specialized in building modern web experiences with cutting-edge technologies
            </p>
          </LineReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <ScrollScale
              key={service.number}
              className="h-full"
            >
              <TiltCard className="h-full" glareEnable={true}>
                <div className="glass-card p-8 h-full group cursor-pointer">
                  {/* Number with gradient */}
                  <div className="flex items-start justify-between mb-6">
                    <span className={`font-megrim text-5xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500`}>
                      {service.number}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 45 }}
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10 transition-all duration-300"
                    >
                      <span className="text-white/30 group-hover:text-accent-primary transition-colors duration-300">
                        →
                      </span>
                    </motion.div>
                  </div>

                  <h3 className="font-outfit font-semibold text-xl text-white mb-4 group-hover:text-gradient transition-all duration-500">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 mb-6 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="tech-tag text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Hover gradient line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-px bg-gradient-to-r ${service.gradient}`}
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </TiltCard>
            </ScrollScale>
          ))}
        </div>
      </div>
    </section>
  );
}
