"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    // Convert Google Drive sharing link to direct download link
    const directDownloadUrl = "https://drive.google.com/file/d/1fvRa3FD2J49NR_eRNO6IfekNV-UUC_67/view?usp=drive_link"

    // Create a temporary link element and trigger download
    const link = document.createElement("a")
    link.href = directDownloadUrl
    link.download = "Rishabh_Pandey_CV.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
            <Image
              src="/rishabh-pandey-photo.png"
              alt="Rishabh Pandey - Professional Photo"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">Rishabh</span> <span className="text-primary">Pandey</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              Aspiring Software Developer | MERN Stack Developer
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Building scalable full-stack applications and exploring AI-powered solutions
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={scrollToAbout}>
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent" onClick={downloadCV}>
              Download CV
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
