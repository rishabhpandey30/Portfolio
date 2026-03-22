import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, Users } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "MERN stack expertise with React and Node.js",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Exploring predictive models and data analysis",
    },
    {
      icon: Database,
      title: "Data Visualization",
      description: "Creating insights through data storytelling",
    },
    {
      icon: Users,
      title: "Social Impact",
      description: "Contributing to NGO skill development programs",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Passionate about creating innovative solutions that bridge functionality and user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I am Rishabh Pandey, a passionate software developer and MERN stack enthusiast focused on building
              scalable and efficient full-stack applications using React and Node.js. I have a strong interest in Data
              Science and Machine Learning, and I enjoy using these technologies to create intelligent and user-friendly
              solutions.
            </p>

            <p className="text-lg leading-relaxed">
              I have worked on projects ranging from real-time data analysis to interactive web applications, which have
              helped me develop strong problem-solving, debugging, and development skills. I am always eager to learn
              and experiment with emerging technologies, continuously expanding my technical expertise.
            </p>

            <p className="text-lg leading-relaxed">
              My goal is to create seamless and impactful digital experiences by combining creativity with analytical
              thinking, building applications that are both innovative and practical.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
