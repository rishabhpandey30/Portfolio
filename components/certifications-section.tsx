"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"
import Image from "next/image"

export function CertificationsSection() {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure AI Foundations Associate",
      provider: "Oracle",
      year: "Sep 2025",
      description:
        "Oracle Cloud Infrastructure AI services, machine learning fundamentals, and cloud-based AI solutions.",
      logo: "/oracle-logo-red.jpg",
      skills: ["Cloud AI", "Machine Learning", "OCI Services", "AI Solutions"],
      credentialId: "102592317OCI25AICFA",
      verificationUrl:
        "https://catalog-education.oracle.com/pls/certview/sharebadge?id=407A0AAF64E24118DE02F66032D97069573383911575314A0DBFD8CA3785A8DB",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1KM3HwL7onScvhQbmmuB2EG2j-H6q0yyD",
    },
    {
      title: "Master Generative AI & Generative AI Tools",
      provider: "Udemy",
      year: "Aug 2025",
      description:
        "Comprehensive training on Generative AI concepts, applications, and mastery of various generative tools for real-world problems.",
      logo: "/udemy-logo.svg",
      skills: ["Generative AI", "AI Tools", "Prompt Engineering"],
      credentialId: "UC-12706f87-a1f0-4572-b3e7-9ee6b3aada9f",
      verificationUrl: "https://www.udemy.com/certificate/UC-12706f87-a1f0-4572-b3e7-9ee6b3aada9f/",
      downloadUrl: "https://drive.google.com/file/d/1F48SS470WOgQ6y11O7J3Ty5fT7BaL2aZ/view?usp=drive_link",
    },
    {
      title: "Mastering Data Structures & Algorithms",
      provider: "Board Infinity",
      year: "Jul 2025",
      description:
        "In-depth exploration of core data structures, algorithm design, and problem-solving techniques for software development.",
      logo: "/boardinfinity-logo.svg",
      skills: ["Data Structures", "Algorithms", "Problem Solving"],
      credentialId: "",
      verificationUrl: "",
      downloadUrl: "https://drive.google.com/file/d/1Wn42ka2E-qSAceu1gbCtX_nGzLOO78Ed/view",
    },
    {
      title: "Cloud Computing Certification",
      provider: "NPTEL",
      year: "Apr 2025",
      description:
        "Fundamental and advanced concepts of Cloud Computing, virtualization, and distributed systems architecture.",
      logo: "/nptel-logo.svg",
      skills: ["Cloud Computing", "Distributed Systems", "Cloud Infrastructure"],
      credentialId: "NPTEL25CS11S1537302419",
      verificationUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS11S153730241904248133",
      downloadUrl: "https://drive.google.com/file/d/1YCvkghUBfRkK7FNPsYdpJea9K5SEGJ-W/view?usp=drive_link",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      provider: "Coursera",
      year: "Sep 2024",
      description:
        "Comprehensive course covering network protocols, TCP/IP, routing, and network security fundamentals.",
      logo: "/coursera-logo-blue.jpg",
      skills: ["Network Protocols", "TCP/IP", "Routing", "Network Security"],
      credentialId: "J5E2I2XGW5JG",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/J5E2I2XGW5JG",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1XapJooUIktcCidIBBItqjr7NWAddq_1y",
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      provider: "Coursera",
      year: "2024",
      description:
        "Foundational knowledge of computer hardware components, operating system concepts, and system administration.",
      logo: "/coursera-logo-blue.jpg",
      skills: ["Hardware Architecture", "Operating Systems", "System Administration", "Troubleshooting"],
      credentialId: "N1WDOLIRALB8",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/N1WDOLIRALB8",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1BaM7xrJTRbWwiIHZGMzx4vJzpaa2rIfX",
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

  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Certifications & Courses</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Continuous learning through industry-recognized certifications and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 relative">
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.provider} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors text-balance">
                  {cert.title}
                </CardTitle>
                <div className="flex items-center justify-center gap-2">
                  <Badge variant="secondary" className="font-medium">
                    {cert.provider}
                  </Badge>
                  <Badge variant="outline">{cert.year}</Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Skills Gained:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 space-y-2">
                  <p className="text-xs text-muted-foreground">Credential ID: {cert.credentialId}</p>

                  <div className="flex gap-2">
                    {cert.verificationUrl ? (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 bg-transparent"
                        onClick={() => window.open(cert.verificationUrl, "_blank")}
                      >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Verify
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        Verify
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="flex-1"
                      onClick={() => (cert.downloadUrl ? handleDownload(cert.downloadUrl, cert.title) : undefined)}
                      disabled={!cert.downloadUrl}
                    >
                      <Download className="w-3 h-3 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                I'm committed to staying current with industry trends and technologies. Currently pursuing additional
                certifications in cloud computing and advanced machine learning.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
