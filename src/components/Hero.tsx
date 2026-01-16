"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import { CharReveal, MagneticButton, ParallaxSection } from "./effects";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background - crisp and scaling up on scroll */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: springScale, y: springY }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/glassyObj.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Animated gradient orbs - kept subtle */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-multiply">
        <ParallaxSection speed={0.3} className="absolute top-1/4 left-1/4">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="w-[400px] h-[400px] bg-accent-primary/20 rounded-full blur-[120px]"
          />
        </ParallaxSection>
        <ParallaxSection speed={0.5} className="absolute bottom-1/4 right-1/4">
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-[500px] h-[500px] bg-accent-tertiary/20 rounded-full blur-[120px]"
          />
        </ParallaxSection>
      </div>

      {/* Content with scroll fade and scale */}
      <motion.div
        style={{ opacity, y: springY, scale: textScale }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 text-sm tracking-[0.4em] uppercase text-void/60 font-medium"
          >
            Hi! I&apos;m
          </motion.p>

          {/* Main title with character reveal */}
          <motion.h1
            variants={itemVariants}
            className="font-outfit font-semibold text-5xl md:text-7xl lg:text-8xl mb-8 text-void overflow-hidden"
          >
            <CharReveal delay={0.5} staggerDelay={0.03}>
              Augustin Vathonne
            </CharReveal>
          </motion.h1>

          {/* Role badge with glass effect - Darker for contrast */}
          <motion.div variants={itemVariants} className="mb-10">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 glass-card text-lg md:text-xl font-light tracking-widest text-void/90 uppercase border-void/10 bg-void/5"
            >
              Fullstack Developer
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base md:text-lg text-void/70 leading-relaxed mb-12 font-medium"
          >
            Crafting fast, scalable, and immersive digital experiences with
            <span className="text-sky-600 font-bold"> Next.js</span>,
            <span className="text-indigo-600 font-bold"> Node.js</span> &
            <span className="text-amber-600 font-bold"> Three.js</span>
          </motion.p>

          {/* CTA Buttons with magnetic effect */}
          <motion.div variants={itemVariants} className="flex gap-4 flex-wrap justify-center">
            <MagneticButton strength={0.2}>
              <a
                href="#about"
                className="gradient-button text-void font-bold inline-flex items-center gap-2 shadow-lg shadow-accent-primary/20"
                data-cursor="pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Discover More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </a>
            </MagneticButton>

            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                className="glass-button text-void/80 hover:text-accent-primary border-void/10 bg-void/5 hover:bg-void/10"
                data-cursor="pointer"
              >
                Get in Touch
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator with line animation - Dark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-void/60 font-medium">scroll</span>
        <div className="relative h-16 w-px">
          <div className="absolute inset-0 bg-void/10" />
          <motion.div
            animate={{ scaleY: [0, 1, 0], y: ["0%", "0%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-accent-primary to-transparent origin-top"
            style={{ height: "50%" }}
          />
        </div>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-void/60"
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent z-[5]" />
    </section>
  );
}
