"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Trophy, Star, Users, Award, Code } from "lucide-react"

const education = [
  {
    period: "2023 – Present",
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology – Computer Science & Engineering",
    score: "CGPA: 8.55",
    icon: "🎓",
    current: true,
  },
  {
    period: "2022 – 2023",
    institution: "St. Joseph Sr. Sec. School",
    degree: "Intermediate (Class XII) – CBSE",
    score: "Percentage: 83.40%",
    icon: "🏫",
    current: false,
  },
  {
    period: "2020 – 2021",
    institution: "St. Joseph Sr. Sec. School",
    degree: "Matriculation (Class X) – CBSE",
    score: "Percentage: 89.30%",
    icon: "📚",
    current: false,
  },
]

const achievements = [
  {
    icon: Trophy,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10 border-yellow-400/20",
    title: "Hackathon Top 10",
    desc: "Secured a Top 10 position among 100+ teams in a Hackathon conducted by Lovely Professional University.",
    year: "2024",
  },
  {
    icon: Code,
    color: "text-blue-400",
    bg: "bg-blue-400/10 border-blue-400/20",
    title: "300+ DSA Challenges",
    desc: "Practiced and solved 300+ algorithmic challenges, strengthening core Data Structures and Algorithms.",
    year: "2024",
  },
  {
    icon: Star,
    color: "text-purple-400",
    bg: "bg-purple-400/10 border-purple-400/20",
    title: "1500 LeetCode Rating",
    desc: "Achieved a 1500 LeetCode contest rating, reflecting consistent performance in timed coding competitions.",
    year: "2024",
  },
  {
    icon: Users,
    color: "text-green-400",
    bg: "bg-green-400/10 border-green-400/20",
    title: "NGO Contribution",
    desc: "Contributed to skill development programs, teaching coding fundamentals to underprivileged youth.",
    year: "2024",
  },
]

export function EducationAchievementsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section ref={ref} id="education" className="py-24 relative overflow-hidden bg-muted/10">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-primary/4 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-secondary/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          
          {/* ── LEFT: EDUCATION ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65 }}
          >
            {/* Column header */}
            <div className="flex flex-col items-start gap-2 mb-12">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-2">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Academic Background
              </p>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground uppercase tracking-tight">
                Education
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 md:left-8 top-8 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

              <div className="space-y-0">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative flex gap-6 md:gap-8 pb-12 last:pb-0 group"
                  >
                    {/* Circle node on the line */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-2xl border-2 shadow-lg transition-all duration-300 ${
                        edu.current
                          ? "border-primary bg-primary/15 shadow-[0_0_15px_rgba(124,58,237,0.3)] animate-pulse-glow"
                          : "border-border/60 bg-card group-hover:border-primary/50"
                      }`}>
                        {edu.icon}
                      </div>
                      {/* Active dot */}
                      {edu.current && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-emerald-400 border-2 border-background animate-pulse" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="pt-2 md:pt-4 space-y-1.5">
                      <p className={`text-sm font-bold uppercase tracking-widest ${edu.current ? "text-primary" : "text-muted-foreground"}`}>
                        {edu.period}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                        {edu.institution}
                      </h3>
                      <p className="text-base text-muted-foreground">{edu.degree}</p>
                      <p className="text-sm font-semibold text-muted-foreground/70">{edu.score}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: ACHIEVEMENTS ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.65, delay: 0.1 }}
          >
            {/* Column header */}
            <div className="flex flex-col items-start gap-2 mb-12">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Milestones & Highlights
              </p>
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground uppercase tracking-tight">
                Achievements
              </h2>
            </div>

            {/* Achievements Compact Timeline */}
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-6 md:left-8 top-8 bottom-4 w-px bg-gradient-to-b from-yellow-400/50 via-yellow-400/20 to-transparent" />

              <div className="space-y-0">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                    className="relative flex gap-6 md:gap-8 pb-12 last:pb-0 group"
                  >
                    {/* Circle node on the line */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center border-2 border-border/60 ${item.bg} shadow-lg transition-all duration-300 group-hover:border-${item.color.split('-')[1]}/50 group-hover:scale-105`}>
                        <item.icon className={`w-5 h-5 md:w-7 md:h-7 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-2 md:pt-4 space-y-1.5">
                       <span className={`text-sm font-bold uppercase tracking-widest ${item.color}`}>
                         {item.year}
                       </span>
                       <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground leading-tight group-hover:text-primary transition-colors duration-200">
                         {item.title}
                       </h3>
                       <p className="text-base text-muted-foreground leading-relaxed pr-2">
                         {item.desc}
                       </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
