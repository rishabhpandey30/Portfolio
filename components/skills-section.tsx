"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Terminal } from "lucide-react"

type Skill = {
  name: string
  icon: string  // full URL
}

type Category = {
  title: string
  titleColor: string
  cardClass: string
  skills: Skill[]
}

// Using devicons CDN (most reliable, largest coverage)
const DI = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

// simpleicons CDN for any gaps
const SI = (slug: string, hex = "888888") =>
  `https://cdn.simpleicons.org/${slug}/${hex}`

const skillCategories: Category[] = [
  {
    title: "Languages",
    titleColor: "text-amber-700",
    cardClass:
      "bg-gradient-to-br from-amber-50 via-yellow-50/80 to-card border border-amber-200/60",
    skills: [
      { name: "Java",       icon: DI("java") },
      { name: "Python",     icon: DI("python") },
      { name: "C++",        icon: DI("cplusplus") },
      { name: "JavaScript", icon: DI("javascript") },
      { name: "TypeScript", icon: DI("typescript") },
    ],
  },
  {
    title: "Frontend & UI",
    titleColor: "text-stone-600",
    cardClass:
      "bg-gradient-to-br from-stone-100 via-stone-50/80 to-card border border-stone-200/60",
    skills: [
      { name: "React",    icon: DI("react") },
      { name: "Next.js",  icon: DI("nextjs", "original") },
      { name: "HTML5",    icon: DI("html5") },
      { name: "CSS3",     icon: DI("css3") },
      { name: "Tailwind", icon: SI("tailwindcss", "0EA5E9") },
    ],
  },
  {
    title: "Backend & Database",
    titleColor: "text-green-700",
    cardClass:
      "bg-gradient-to-br from-green-50 via-emerald-50/80 to-card border border-green-200/60",
    skills: [
      { name: "Node.js",   icon: DI("nodejs") },
      { name: "Express",   icon: SI("express", "000000") },
      { name: "MongoDB",   icon: DI("mongodb") },
      { name: "MySQL",     icon: DI("mysql") },
    ],
  },
  {
    title: "Data & Analytics",
    titleColor: "text-primary",
    cardClass:
      "bg-gradient-to-br from-amber-50/80 via-orange-50/60 to-card border border-amber-200/40",
    skills: [
      { name: "Pandas",     icon: DI("pandas") },
      { name: "NumPy",      icon: DI("numpy") },
      { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
      { name: "Power BI",   icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
      { name: "Scikit",     icon: SI("scikitlearn", "F7931E") },
    ],
  },
]

function SkillIcon({ skill, delay }: { skill: Skill; delay: number }) {
  const initials = skill.name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.38, ease: "backOut" }}
      whileHover={{ scale: 1.1, y: -8 }}
      className="flex flex-col items-center gap-3 cursor-default group"
    >
      {/* Icon tile */}
      <div className="w-16 h-16 rounded-2xl bg-white/70 border border-border flex items-center justify-center shadow-sm group-hover:border-primary/40 group-hover:bg-white group-hover:shadow-[0_0_16px_rgba(200,169,126,0.25)] group-hover:-rotate-3 transition-all duration-300">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={skill.icon}
          alt={skill.name}
          width={36}
          height={36}
          className="object-contain select-none"
          onError={(e) => {
            const el = e.currentTarget
            el.style.display = "none"
            const fallback = el.nextElementSibling as HTMLElement | null
            if (fallback) fallback.style.display = "flex"
          }}
        />
        <span
          className="hidden w-full h-full items-center justify-center text-xs font-black text-foreground/40"
          aria-hidden
        >
          {initials}
        </span>
      </div>

      {/* Label */}
      <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight max-w-[68px]">
        {skill.name}
      </span>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="skills" className="py-28 relative overflow-hidden bg-muted/5">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(oklch(0.118 0.008 60) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-badge">
            <Terminal className="w-3.5 h-3.5" />
            What I work with
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">
            Skills &amp; <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            A comprehensive overview of my technical skills and core competencies
          </p>
        </motion.div>

        {/* 2×2 cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: catIdx * 0.1 }}
              className={`relative rounded-2xl px-8 py-8 ${cat.cardClass} backdrop-blur-sm overflow-hidden group hover:scale-[1.015] transition-transform duration-300 min-h-[210px] hover:shadow-[0_4px_24px_rgba(200,169,126,0.15)]`}
            >
              {/* Top edge highlight on hover */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(200,169,126,0.35), transparent)",
                }}
              />

              {/* Category title */}
              <h3 className={`text-sm font-heading font-black uppercase tracking-[0.25em] mb-7 ${cat.titleColor}`}>
                {cat.title}
              </h3>

              {/* Icons row */}
              <div className="flex flex-wrap gap-x-7 gap-y-5">
                {cat.skills.map((skill, i) => (
                  <SkillIcon
                    key={i}
                    skill={skill}
                    delay={catIdx * 0.08 + i * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
