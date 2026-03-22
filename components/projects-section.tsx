"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Layers, Calendar, ChevronRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "LeaveSync",
    description:
      "A leave management system to streamline employee leave requests, approvals, and tracking. Enhances workflow efficiency through automation and transparent record management.",
    image: "/leavesync_cover.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    date: "March 2026",
    highlights: [
      "Online Leave Request and Approval System",
      "Real-time Leave Balance Tracking",
      "Admin Dashboard with Analytical Insights",
    ],
    githubUrl: "https://github.com/rishabhpandey30/LeaveSync",
    featured: true,
  },
  {
    title: "FinTracker",
    description:
      "A personal finance management web app that enables users to track expenses, manage budgets, and analyze spending patterns with real-time data processing.",
    image: "/fintracker_cover.png",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Data Visualization"],
    date: "January 2026",
    highlights: [
      "Expense and Income Tracking",
      "Budget Planning with Alerts",
      "Interactive Data Visualization",
    ],
    githubUrl: "https://github.com/rishabhpandey30/FinTracker",
    featured: true,
  },
  {
    title: "Uber Ride Analytics Dashboard",
    description:
      "An interactive Power BI dashboard analyzing Uber ride data, uncovering trends and providing actionable insights for business decision-making.",
    image: "/uber_dashboard_cover.png",
    technologies: ["Power BI", "Data Analysis", "Data Visualization", "Business Intelligence"],
    date: "December 2025",
    highlights: [
      "Ride Data Analysis (Trips, Distance, Fare)",
      "Geographical Analysis of Ride Locations",
      "KPI Metrics (Total Rides, Revenue, Average Fare)",
    ],
    githubUrl: "https://github.com/rishabhpandey30/Uber_Dashboard",
    featured: false,
  },
  
  {
    title: "YouTube Trending Video Prediction",
    description:
      "ML-powered dashboard that analyzes and predicts YouTube video trends using advanced algorithms, with data visualization and predictive analytics.",
    image: "/youtube-analytics-dashboard-with-charts-and-graphs.jpg",
    technologies: ["Python", "Machine Learning", "Pandas", "Linear Regression", "Matplotlib"],
    date: "October 2025",
    highlights: ["Predictive Analytics", "Data Visualization", "Trend Analysis"],
    githubUrl: "https://github.com/rishabhpandey30/youtube_analysis",
    featured: false,
  },
  {
    title: "MERN Stack Daily Habit Tracker",
    description:
      "Full-stack app to help users track daily habits, monitor progress, and build streaks with calendar visualization and comprehensive analytics.",
    image: "/habit-tracker-journal.jpeg",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
    date: "June 2025",
    highlights: ["User Authentication", "Calendar Visualization", "Streak Tracking"],
    githubUrl: "https://github.com/rishabhpandey30/Daily-Habit-Tracker",
    featured: false,
  },

  {
    title: "Nestlé Sales Dashboard",
    description:
      "Interactive Excel-based BI dashboard analyzing real-world sales data from 2013–2014 with dynamic visualizations and comprehensive regional analytics.",
    image: "/excel-dashboard-sales-analytics.jpg",
    technologies: ["Microsoft Excel", "Pivot Tables", "Power Pivot", "Data Analysis"],
    date: "March 2025",
    highlights: ["Interactive Slicers & Timelines", "Regional Sales Analysis", "Top Performers Tracking"],
    githubUrl: "https://github.com/rishabhpandey30/nestle_dashboard",
    featured: false,
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(124,58,237,0.3)] flex flex-col"
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full text-[10px] font-bold bg-primary/90 text-white uppercase tracking-wider">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent" />

        {/* Date badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          {project.date}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 space-y-3">
        <h3 className="font-heading font-bold text-xl leading-tight group-hover:text-primary transition-colors uppercase tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Key features */}
        <div className="space-y-1">
          {project.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <ChevronRight className="w-3 h-3 mt-0.5 text-primary shrink-0" />
              {h}
            </div>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="pt-1 flex gap-2">
          {project.githubUrl ? (
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold border border-border hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition-all duration-200"
            >
              <Github className="w-4 h-4" />
              Code
            </motion.a>
          ) : (
            <button
              disabled
              className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-semibold border border-border/40 text-muted-foreground/40 cursor-not-allowed"
            >
              <Github className="w-4 h-4" />
              Code
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="projects" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-0 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-badge">
            <Layers className="w-3.5 h-3.5" />
            What I've built
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            A showcase of my recent work in full-stack development, AI, and data science
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="https://github.com/rishabhpandey30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-border/50 text-sm font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
