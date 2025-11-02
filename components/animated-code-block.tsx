"use client"

import { useEffect, useState } from "react"

const codeLines = [
  "const developer = {",
  '  name: "Priyank Tyagi",',
  '  role: "Full-Stack Developer",',
  '  expertise: ["AI/ML", "Blockchain", "SaaS"],',
  "  hackathons: 7,",
  '  research: "IIT Roorkee",',
  "  patents: 2",
  "};",
]

export default function AnimatedCodeBlock() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        setDisplayedLines((prev) => [...prev, codeLines[currentLine]])
        currentLine++
      } else {
        setIsComplete(true)
        clearInterval(interval)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-muted rounded-lg p-6 border border-border overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-accent"></div>
        <div className="w-3 h-3 rounded-full bg-accent/60"></div>
        <div className="w-3 h-3 rounded-full bg-accent/30"></div>
      </div>

      <pre className="font-mono text-sm text-muted-foreground overflow-x-auto">
        <code>
          {displayedLines.map((line, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-left-4 duration-500"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <span className="text-accent/60 inline-block w-8 text-right mr-4">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground">{line}</span>
            </div>
          ))}
          {displayedLines.length > 0 && !isComplete && (
            <div className="animate-pulse">
              <span className="text-accent inline-block w-2 h-5 ml-1 bg-accent"></span>
            </div>
          )}
        </code>
      </pre>
    </div>
  )
}
