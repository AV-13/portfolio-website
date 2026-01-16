"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { TiltCard, LineReveal, MagneticButton, ScrollScale } from "./effects";

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "SaaS Platform",
    description: "A comprehensive SaaS platform with real-time collaboration, AI-powered features, and integrated billing.",
    gradient: "from-accent-primary via-accent-secondary to-accent-tertiary",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Project Two",
    category: "3D Visualization",
    description: "Immersive 3D virtual tours using React Three Fiber for real estate and architectural visualization.",
    gradient: "from-accent-secondary via-accent-tertiary to-accent-primary",
    technologies: ["React", "Three.js", "Prisma", "Node.js"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Project Three",
    category: "AI Assistant",
    description: "AI-powered assistant with natural language processing and intelligent document analysis.",
    gradient: "from-accent-tertiary via-accent-primary to-accent-secondary",
    technologies: ["Next.js", "OpenAI", "Vercel AI", "MongoDB"],
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 4,
    title: "Project Four",
    category: "Property Booking",
    description: "Full-featured property booking system with availability management and secure payments.",
    gradient: "from-accent-primary to-accent-tertiary",
    technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
    links: {
      live: "#",
      github: "#",
    },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="works"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="mb-16">
          <LineReveal className="mb-4">
            <span className="text-sm tracking-[0.2em] uppercase text-accent-primary block">
              Portfolio
            </span>
          </LineReveal>
          <LineReveal delay={0.1} className="mb-4">
            <h2 className="font-outfit font-semibold text-4xl md:text-5xl text-white">
              Featured Works
            </h2>
          </LineReveal>
          <LineReveal delay={0.2}>
            <p className="text-white/40 text-lg max-w-2xl">
              Discover my latest work and creative solutions that bring ideas to life
            </p>
          </LineReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ScrollScale key={project.id} className="h-full">
              <TiltCard className="h-full" tiltAmount={8} glareEnable={true}>
                <div className="glass-card overflow-hidden h-full group cursor-pointer">
                  {/* Project visual area */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {/* Animated gradient background */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                      initial={{ opacity: 0.15 }}
                      whileHover={{ opacity: 0.3, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                    />

                    {/* Mesh pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />

                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />

                    {/* Project number with animation */}
                    <motion.span
                      className="absolute top-6 left-6 font-megrim text-7xl text-white/10"
                      whileHover={{ scale: 1.1, opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    >
                      0{project.id}
                    </motion.span>

                    {/* Hover overlay with links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-void/70 backdrop-blur-sm"
                    >
                      <MagneticButton strength={0.3}>
                        <a
                          href={project.links.live}
                          className="p-4 glass-card hover:bg-accent-primary/20 hover:border-accent-primary/50 transition-all"
                          data-cursor="pointer"
                          data-cursor-text="View"
                        >
                          <ExternalLink size={22} className="text-white" />
                        </a>
                      </MagneticButton>
                      <MagneticButton strength={0.3}>
                        <a
                          href={project.links.github}
                          className="p-4 glass-card hover:bg-accent-primary/20 hover:border-accent-primary/50 transition-all"
                          data-cursor="pointer"
                          data-cursor-text="Code"
                        >
                          <Github size={22} className="text-white" />
                        </a>
                      </MagneticButton>
                    </motion.div>

                    {/* Category badge */}
                    <motion.span
                      className="absolute bottom-4 left-4 px-4 py-2 glass-card text-xs text-white/90 font-medium"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>

                  {/* Project info */}
                  <div className="p-6">
                    <h3 className="font-outfit font-semibold text-xl text-white mb-2 group-hover:text-gradient transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm mb-4 line-clamp-2 group-hover:text-white/60 transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollScale>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <MagneticButton strength={0.15}>
            <a
              href="#"
              className="glass-button inline-flex items-center gap-2 text-white/80 hover:text-white"
              data-cursor="pointer"
            >
              View All Projects
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}