"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Secure File Management System",
      description:
        "A comprehensive secure file storage platform featuring Two-Factor Authentication, encrypted file storage, and user access controls. Built with modern security practices and scalable architecture.",
      image: "/secure-file-management-dashboard-interface.jpg",
      technologies: ["React", "Node.js", "MongoDB", "JWT", "Encryption"],
      date: "April 2025",
      highlights: ["Two-Factor Authentication", "End-to-end Encryption", "Role-based Access Control"],
      githubUrl: "https://github.com/rishabhpandey30/os",
    },
    {
      title: "YouTube Trending Video Prediction",
      description:
        "Machine Learning-powered dashboard that analyzes and predicts YouTube video trends using advanced algorithms. Features data visualization and predictive analytics for content creators.",
      image: "/youtube-analytics-dashboard-with-charts-and-graphs.jpg",
      technologies: ["Python", "Machine Learning", "Pandas", "Linear Regression", "Matplotlib"],
      date: "December 2024",
      highlights: ["Predictive Analytics", "Data Visualization", "Trend Analysis"],
      githubUrl: "https://github.com/rishabhpandey30/youtube_analysis",
    },
    {
      title: "AI Workout Planner",
      description:
        "Intelligent fitness chatbot powered by Gemini API that creates personalized workout plans. Features conversational AI interface and adaptive fitness recommendations.",
      image: "/ai-fitness-app-interface-with-workout-plans.jpg",
      technologies: ["React", "Gemini API", "Node.js", "AI/ML", "Responsive Design"],
      date: "February 2025",
      highlights: ["AI-Powered Recommendations", "Personalized Plans", "Conversational Interface"],
      githubUrl: "https://github.com/rishabhpandey30/workout_Planner",
    },
    {
      title: "MERN Stack Daily Habit Tracker",
      description:
        "Full-stack web application to help users track daily habits, monitor progress, and build streaks. Features secure authentication, calendar visualization, and comprehensive progress analytics.",
      image: "/habit-tracker-journal.jpeg",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Mongoose"],
      date: "June 2025",
      highlights: ["User Authentication", "Calendar Visualization", "Streak Tracking"],
    },
    {
      title: "Nestlé Sales Dashboard",
      description:
        "Interactive Excel-based business intelligence dashboard analyzing real-world sales data from 2013-2014. Features dynamic visualizations, pivot tables, and comprehensive sales analytics across regions and products.",
      image: "/excel-dashboard-sales-analytics.jpg",
      technologies: ["Microsoft Excel", "Pivot Tables", "Power Pivot", "Data Analysis", "Business Intelligence"],
      date: "March 2025",
      highlights: ["Interactive Slicers & Timelines", "Regional Sales Analysis", "Top Performers Tracking"],
      githubUrl: "https://github.com/rishabhpandey30/nestle_dashboard",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A showcase of my recent work in full-stack development, AI, and data science
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.date}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                <CardDescription className="text-sm">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => project.githubUrl && window.open(project.githubUrl, "_blank")}
                    disabled={!project.githubUrl}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
