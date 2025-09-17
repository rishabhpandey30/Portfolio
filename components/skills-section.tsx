import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 85 },
        { name: "Java", level: 74 },
        
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "REST APIs", level: 70 },
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Git", level: 85 },
        { name: "Tableau", level: 75 },
        { name: "MS Excel", level: 90 },
      ],
    },
    {
      title: "Core Competencies",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Debugging", level: 90 },
        { name: "Data Analysis", level: 85 },
        { name: "Team Collaboration", level: 88 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            A comprehensive overview of my technical skills and competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
