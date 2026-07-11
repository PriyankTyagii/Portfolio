"use client"

import {
  Code2,
  FileCode2,
  Atom,
  Triangle,
  Zap,
  Hexagon,
  Wind,
  Database,
  Leaf,
  Server,
  Flame,
  Container,
  Ship,
  Cloud,
  CloudCog,
  GitBranch,
  Sparkles,
  Bot,
  Cpu,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { TECH_GROUPS } from "./data"

const ICONS: Record<string, LucideIcon> = {
  LangChain: Workflow,
  "RAG / Vector DBs": Database,
  "OpenAI API": Sparkles,
  HuggingFace: Bot,
  PyTorch: Flame,
  TensorFlow: Cpu,
  TypeScript: FileCode2,
  Python: Code2,
  "Next.js": Triangle,
  React: Atom,
  FastAPI: Zap,
  "Node.js": Hexagon,
  "Tailwind CSS": Wind,
  PostgreSQL: Database,
  MongoDB: Leaf,
  Redis: Server,
  Firebase: Flame,
  Docker: Container,
  Kubernetes: Ship,
  AWS: Cloud,
  GCP: CloudCog,
  "GitHub Actions": GitBranch,
}

const TOOLS = TECH_GROUPS.flatMap((g) => g.items)

export default function Skills() {
  return (
    <section
      className="max-w-3xl mx-auto px-6 w-full py-8 md:py-10 flex flex-col gap-6 border-t border-border"
      id="stack"
    >
      <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">My Toolkit</h2>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent z-10" />

        <div className="group flex gap-3 overflow-hidden p-2">
          <div className="flex shrink-0 items-center gap-3 animate-marquee group-hover:[animation-play-state:paused]" style={{ "--duration": "34s", "--gap": "0.75rem" } as React.CSSProperties}>
            {[...TOOLS, ...TOOLS].map((t, i) => {
              const Icon = ICONS[t.name] ?? Code2
              return (
                <div
                  key={`${t.name}-${i}`}
                  className="flex items-center gap-2 rounded-xl border border-border bg-transparent dark:bg-zinc-950 px-4 py-2 text-sm font-medium text-foreground shadow-sm whitespace-nowrap"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" style={{ color: t.color }} />
                  <span>{t.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
