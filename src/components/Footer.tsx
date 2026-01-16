"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, MessageCircle, Mail, ArrowUp } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Works", href: "#works" },
    { name: "Contact", href: "#contact" },
  ],
  socials: [
    { name: "Email", href: "mailto:your@email.com", icon: Mail },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "WhatsApp", href: "https://wa.me/", icon: MessageCircle },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-void-200 to-void pointer-events-none" />

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Top section */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-outfit font-semibold text-2xl text-white mb-4">
              <span className="text-gradient">AUGUSTIN</span> VATHONNE
            </h3>
            <p className="text-white/40 text-sm mb-6 leading-relaxed">
              Full-Stack Developer crafting exceptional digital
              experiences with modern technologies.
            </p>
            <div className="flex gap-3">
              {footerLinks.socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass-card flex items-center justify-center hover:border-accent-primary/30 transition-all"
                >
                  <social.icon size={16} className="text-white/60 hover:text-accent-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium mb-6 tracking-[0.2em] text-white/40 uppercase">
              Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-medium mb-6 tracking-[0.2em] text-white/40 uppercase">
              Contact
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>augustinvathonne@gmail.com</li>
              <li>+1 234 567 890</li>
              <li>Your City, Country</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">
              {new Date().getFullYear()} All rights reserved.
            </p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 glass-card flex items-center justify-center hover:border-accent-primary/30 transition-all group"
            >
              <ArrowUp size={16} className="text-white/60 group-hover:text-accent-primary" />
            </motion.button>
          </div>
        </div>

        {/* Large Name watermark */}
        <div className="mt-16 overflow-hidden">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="font-outfit font-semibold text-[12vw] text-center leading-none select-none pointer-events-none text-white/[0.02]"
          >
            Augustin Vathonne
          </motion.h2>
        </div>
      </div>
    </footer>
  );
}
