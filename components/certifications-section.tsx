"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Download, ExternalLink, Award, ShieldCheck } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    title: "Oracle Cloud Infrastructure AI Foundations Associate",
    provider: "Oracle",
    year: "Sep 2025",
    description: "Oracle Cloud Infrastructure AI services, machine learning fundamentals, and cloud-based AI solutions.",
    image: "/oracel.png",
    logo: "/oracle-logo-red.jpg",
    skills: ["Cloud AI", "Machine Learning", "OCI Services", "AI Solutions"],
    credentialId: "102592317OCI25AICFA",
    verificationUrl:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=407A0AAF64E24118DE02F66032D97069573383911575314A0DBFD8CA3785A8DB",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1KM3HwL7onScvhQbmmuB2EG2j-H6q0yyD",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    iconBg: "bg-red-500/10",
  },
  {
    title: "Master Generative AI & Generative AI Tools",
    provider: "Udemy",
    year: "Aug 2025",
    description: "Comprehensive training on Generative AI concepts, applications, and mastery of various generative tools.",
    image: "/udemy-gen-ai.png",
    logo: "/udemy-logo.svg",
    skills: ["Generative AI", "AI Tools", "Prompt Engineering"],
    credentialId: "UC-12706f87-a1f0-4572-b3e7-9ee6b3aada9f",
    verificationUrl: "https://www.udemy.com/certificate/UC-12706f87-a1f0-4572-b3e7-9ee6b3aada9f/",
    downloadUrl: "https://drive.google.com/file/d/1F48SS470WOgQ6y11O7J3Ty5fT7BaL2aZ/view?usp=drive_link",
    color: "from-purple-500/20 to-violet-500/20",
    borderColor: "border-purple-500/30",
    iconBg: "bg-purple-500/10",
  },
  {
    title: "Mastering Data Structures & Algorithms",
    provider: "Board Infinity",
    year: "Jul 2025",
    description: "In-depth exploration of core data structures, algorithm design, and problem-solving techniques.",
    image: "/dsa.png",
    logo: "/boardinfinity-logo.svg",
    skills: ["Data Structures", "Algorithms", "Problem Solving"],
    credentialId: "",
    verificationUrl: "",
    downloadUrl: "https://drive.google.com/file/d/1Wn42ka2E-qSAceu1gbCtX_nGzLOO78Ed/view",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconBg: "bg-blue-500/10",
  },
  {
    title: "Cloud Computing Certification",
    provider: "NPTEL",
    year: "Apr 2025",
    description: "Fundamental and advanced concepts of Cloud Computing, virtualization, and distributed systems architecture.",
    image: "/nptel.png",
    logo: "/nptel-logo.svg",
    skills: ["Cloud Computing", "Distributed Systems", "Cloud Infrastructure"],
    credentialId: "NPTEL25CS11S1537302419",
    verificationUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S153730241904248133",
    downloadUrl: "https://drive.google.com/file/d/1YCvkghUBfRkK7FNPsYdpJea9K5SEGJ-W/view?usp=drive_link",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    iconBg: "bg-emerald-500/10",
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Coursera",
    year: "Sep 2024",
    description: "Comprehensive course covering network protocols, TCP/IP, routing, and network security fundamentals.",
    image: "/bits-and-bits.png",
    logo: "/coursera-logo-blue.jpg",
    skills: ["Network Protocols", "TCP/IP", "Routing", "Network Security"],
    credentialId: "J5E2I2XGW5JG",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/J5E2I2XGW5JG",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1XapJooUIktcCidIBBItqjr7NWAddq_1y",
    color: "from-sky-500/20 to-blue-500/20",
    borderColor: "border-sky-500/30",
    iconBg: "bg-sky-500/10",
  },
  {
    title: "Introduction to Hardware and Operating Systems",
    provider: "Coursera",
    year: "2024",
    description: "Foundational knowledge of computer hardware components, OS concepts, and system administration.",
    image: "/os.png",
    logo: "/coursera-logo-blue.jpg",
    skills: ["Hardware Architecture", "Operating Systems", "System Administration"],
    credentialId: "N1WDOLIRALB8",
    verificationUrl: "https://www.coursera.org/account/accomplishments/verify/N1WDOLIRALB8",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1BaM7xrJTRbWwiIHZGMzx4vJzpaa2rIfX",
    color: "from-amber-500/20 to-yellow-500/20",
    borderColor: "border-amber-500/30",
    iconBg: "bg-amber-500/10",
  },
]

const handleDownload = (downloadUrl: string, title: string) => {
  if (downloadUrl) {
    const link = document.createElement("a")
    link.href = downloadUrl
    link.download = `${title.replace(/\s+/g, "_")}_Certificate.pdf`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
export function CertificationsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="certifications" className="py-24 relative overflow-hidden bg-muted/10">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-secondary/5 blur-3xl" />
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
            <Award className="w-3.5 h-3.5" />
            Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold mt-2 mb-4 uppercase tracking-tight">
            Licenses & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
            Continuous learning through industry-recognized certifications and professional development
          </p>
        </motion.div>

        {/* Certs grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-3xl overflow-hidden glass-card border border-border/50 hover:border-border hover:shadow-[0_0_40px_rgba(124,58,237,0.08)] transition-all duration-500"
            >
              {/* Image Header wrapper */}
              <div className="relative aspect-[1.4] w-full bg-muted/20 overflow-hidden border-b border-border/40">
                <Image
                  src={cert.image || "/placeholder.svg"}
                  alt={`${cert.title} Certificate`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                />
                
                {/* Verified Badge (overlapping bottom right) */}
                <div className="absolute bottom-4 right-4 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-8 h-8 rounded-full bg-[#ef4444] text-white flex items-center justify-center shadow-lg shadow-red-500/20">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 md:p-8">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold leading-tight text-foreground mb-1.5 group-hover:text-primary transition-colors uppercase tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="text-[11px] font-black uppercase tracking-[0.15em] text-[#ef4444]">
                    {cert.provider}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {cert.description}
                </p>

                <div className="w-full h-px bg-border/60 my-5" />

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {cert.year}
                  </span>
                  
                  {/* Verification link icon */}
                  {cert.verificationUrl && (
                    <a 
                      href={cert.verificationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      title="Verify Certificate"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
