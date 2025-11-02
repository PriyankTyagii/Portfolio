"use client"

import { Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "AgroLogi Technologies",
    location: "Remote",
    duration: "Sept 2024 - Present",
    highlights: [
      "Building AI-integrated SaaS platforms for agriculture technology",
      "Built secure FastAPI backend integrating Firebase Auth, Firestore, and ResNet for intelligent plant disease detection",
      "Designed multi-tenant SaaS farm management platform with RBAC, AI model integration, and multilingual support using Next.js",
    ],
  },
  {
    title: "Research Intern",
    company: "Indian Institute of Technology (IIT) Roorkee",
    location: "Roorkee, Uttarakhand, India",
    duration: "April 2024 - Sept 2024",
    highlights: [
      "Research focused on AI-optimized blockchain solutions and hardware acceleration",
      "Developed AI-optimized blockchain solutions improving transaction efficiency by 30% through real-time data processing",
      "Implemented AES encryption protocols for distributed ledger systems ensuring 99.9% data integrity",
      "Programmed Xilinx ZedBoard FPGA for hardware-accelerated cryptographic operations, achieving 50% speed improvement",
    ],
  },
  {
    title: "Backend Developer",
    company: "Prodesk IT",
    location: "Remote",
    duration: "June 2023 - July 2023",
    highlights: [
      "Backend development and API design",
      "Developed RESTful APIs and backend services",
      "Worked with modern backend technologies and databases",
    ],
  },
  {
    title: "AI & Cloud Intern",
    company: "Edunet Foundation",
    location: "Remote",
    duration: "July 2022 - August 2022",
    highlights: [
      "AI/ML pipeline development and cloud computing",
      "Built ML pipeline processing 10,000+ records with 92% accuracy using advanced feature engineering",
      "Developed LLM-powered AI chatbot and optimized distributed AI models reducing response time by 40%",
    ],
  },
]

export default function Experience() {
  const [visibleExperiences, setVisibleExperiences] = useState<boolean[]>(new Array(experiences.length).fill(false))
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          experiences.forEach((_, index) => {
            setTimeout(() => {
              setVisibleExperiences((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 100)
          })
        }
      },
      { threshold: 0.05 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Experience & Research</h2>
          <p className="text-lg text-muted-foreground">
            Building impactful solutions through hands-on experience and research
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 transition-all duration-500 ${
                visibleExperiences[index] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
              {/* Timeline line */}
              {index < experiences.length - 1 && <div className="absolute left-1.5 top-8 w-0.5 h-32 bg-border"></div>}

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {exp.location}
                </div>
                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex gap-3">
                      <span className="text-accent mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
