import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech.) in Computer Science",
      institution: "Lovely Professional University, Punjab",
      period: "2023 – 2027",
      grade: "CGPA: 8.47",
      status: "In Progress",
      description:
        "Comprehensive computer science program covering software engineering, data structures, algorithms, database systems, and emerging technologies.",
    },
    {
      degree: "CBSE (Class XII)",
      institution: "St. Joseph Sr. Sec. School, India",
      period: "2022 – 2023",
      grade: "Percentage: 83.40%",
      status: "Completed",
      description: "Higher secondary education with focus on Mathematics, Physics, Chemistry, and Computer Science.",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{edu.degree}</CardTitle>
                      <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-2">
                    <Badge variant={edu.status === "In Progress" ? "default" : "secondary"}>{edu.status}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="font-medium">
                    {edu.grade}
                  </Badge>
                </div>

                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
