"use client"

import { useEffect, useRef, useState } from "react"

const skills = [
  {
    category: "AI/ML",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "Computer Vision", level: 80 },
      { name: "LLMs", level: 85 },
      { name: "NLP", level: 75 },
    ],
  },
  {
    category: "Backend & DevOps",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Node.js", level: 88 },
      { name: "PostgreSQL", level: 82 },
      { name: "Docker", level: 80 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
]

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const interval = setInterval(() => {
            setAnimatedLevel((prev) => {
              if (prev < level) return Math.min(prev + 1, level)
              clearInterval(interval)
              return level
            })
          }, 20)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-accent">{animatedLevel}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-300"
          style={{ width: `${animatedLevel}%` }}
        ></div>
      </div>
    </div>
  )
}

export default function TechnicalExpertise() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Technical Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive skill set across AI/ML, backend systems, and modern frontend technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-bold text-accent">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
