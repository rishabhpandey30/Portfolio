"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion"
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Image from "next/image"

const ROLES = [
  "MERN Stack Developer",
  "Full-Stack Engineer",
  "AI & ML Enthusiast",
  "Data Science Explorer",
]

function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span className="cursor-blink text-primary ml-0.5">|</span>
    </span>
  )
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 })
  const rotateX = useTransform(springY, [-300, 300], [8, -8])
  const rotateY = useTransform(springX, [-300, 300], [-8, 8])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top - rect.height / 2)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadCV = () => {
    const link = document.createElement("a")
    link.href = "https://drive.google.com/file/d/1gccwCSqIzdwqmurkTXY_wRABo_Rcs_p1/view?usp=drive_link"
    link.download = "Rishabh_Pandey_CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden stars-bg"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/8 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/8 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-primary/5 blur-2xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <FloatingParticles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-center gap-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
            <motion.div variants={itemVariants}>
              <span className="section-badge">
                <Sparkles className="w-3.5 h-3.5" />
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="font-heading text-5xl flex flex-col sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none mb-6">
                <span className="text-foreground inline-block hover:scale-[1.02] transition-transform duration-500 cursor-default">RISHABH</span>
                <span className="gradient-text glow-text inline-block hover:scale-[1.02] transition-transform duration-500 cursor-default">PANDEY</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="text-xl sm:text-2xl text-muted-foreground h-8 font-medium mb-3">
              <TypewriterText />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building scalable full-stack applications and exploring
              AI-powered solutions that bridge creativity with analytical thinking.
            </motion.p>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex gap-3 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/rishabhpandey30", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/rishabh-pandey-78r0", label: "LinkedIn" },
                { icon: Mail, href: "mailto:rishabhpandey3011@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_theme(colors.primary/40%)]"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToProjects}
                className="relative group px-8 py-3.5 rounded-xl font-semibold text-base overflow-hidden gradient-border text-white"
                style={{ background: "linear-gradient(135deg, oklch(0.55 0.26 264), oklch(0.6 0.25 300))" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={downloadCV}
                className="px-8 py-3.5 rounded-xl font-semibold text-base glass-card flex items-center gap-2 justify-center border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Profile Image with 3D tilt */}
          <motion.div variants={itemVariants} className="relative flex-shrink-0">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative"
            >
              {/* Orbit rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-primary/15" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[380px] h-[380px] sm:w-[460px] sm:h-[460px] rounded-full border border-secondary/10" />
              </div>

              {/* Orbiting dots */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/80 glow-primary"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{ transformOrigin: "50% 100%" }}
                  />
                </div>
              </div>

              {/* Profile image */}
              <div className="relative mx-auto w-56 h-[16rem] sm:w-72 sm:h-[20rem] lg:w-80 lg:h-[22rem]">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse-glow blur-2xl" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-primary/30 shadow-2xl bg-card">
                  <Image
                    src="/rishabh-pandey-photo.png"
                    alt="Rishabh Pandey - Software Developer"
                    fill
                    priority
                    className="object-cover object-top hover:scale-[1.05] transition-transform duration-700"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-2xl glass-card border border-primary/30 text-xs font-bold text-foreground flex items-center gap-2"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to work
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          {[
            { value: "8+", label: "Projects Built" },
            { value: "6+", label: "Certifications" },
            { value: "2+", label: "Years Coding" },
            { value: "MERN", label: "Primary Stack" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center group cursor-default">
              <p className="text-3xl sm:text-4xl font-extrabold gradient-text group-hover:glow-text transition-all">
                {value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium tracking-widest uppercase opacity-60">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  )
}
