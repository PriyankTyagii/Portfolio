"use client"

import { Trophy, BookOpen, Lightbulb, Cloud } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const achievements = [
  {
    icon: Trophy,
    title: "7x Hackathon Victories",
    subtitle: "National Level Champions",
    description: "Winner at IIT Cognizance - InnoWave and 7 additional national hackathons",
  },
  {
    icon: BookOpen,
    title: "Research Intern",
    subtitle: "IIT Roorkee",
    description: "AI-optimized blockchain solutions with 30% efficiency improvement",
  },
  {
    icon: Lightbulb,
    title: "2 Patent Applications",
    subtitle: "AI + IoT Innovation",
    description: "Filed patents for cutting-edge AI and IoT integrated solutions",
  },
  {
    icon: Cloud,
    title: "Google Cloud Champion",
    subtitle: "Arcade Champion Tier",
    description: "Achieved highest tier in Google Cloud Arcade program",
  },
]

export default function KeyAchievements() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(achievements.length).fill(false))
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          achievements.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
            }, index * 100)
          })
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Key Achievements</h2>
          <p className="text-lg text-muted-foreground">
            Backed by proven results and recognition from top institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className={`p-6 bg-card rounded-lg border border-border transition-all duration-500 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 ${
                  visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                <p className="text-sm text-accent mb-3">{achievement.subtitle}</p>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
