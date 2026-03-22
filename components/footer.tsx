"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const navLinks = ["About", "Skills", "Projects", "Certifications", "Contact"]

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/rishabhpandey30",
    label: "GitHub",
    color: "hover:text-gray-300 hover:border-gray-400/40",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/rishabh-pandey-78r0",
    label: "LinkedIn",
    color: "hover:text-blue-400 hover:border-blue-400/40",
  },
  {
    icon: Mail,
    href: "mailto:rishabhpandey3011@gmail.com",
    label: "Email",
    color: "hover:text-red-400 hover:border-red-400/40",
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black gradient-text">RP</span>
              <span className="text-lg font-bold text-foreground">Rishabh Pandey</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Aspiring Software Developer passionate about building innovative solutions and exploring the intersection of technology and creativity.
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-full glass-card border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300 ${color}`}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Quick Links</h3>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1.5 transform"
                >
                  → {link}
                </button>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="space-y-4">
            <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Status</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-foreground font-medium">Open to opportunities</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>📍 India</p>
                <p>💼 MERN Stack Developer</p>
                <p>🎓 Computer Science Student</p>
              </div>
              <a
                href="mailto:rishabhpandey3011@gmail.com"
                className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-xl text-xs font-semibold border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-200"
              >
                <Mail className="w-3 h-3" />
                Say Hello
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            © {currentYear} Rishabh Pandey. Made with
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            Back to top
            <div className="w-6 h-6 rounded-full border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
              <ArrowUp className="w-3 h-3" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
