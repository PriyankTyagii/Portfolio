"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "./ui"
import ProjectCard from "./ProjectCard"
import { PROJECTS } from "./data"

export default function Projects() {
  const featured = PROJECTS.slice(0, 2)

  return (
    <Reveal y={-6}>
      <section
        className="max-w-3xl mx-auto px-6 w-full py-8 md:py-10 flex flex-col gap-6 border-t border-border"
        id="projects"
      >
        <div className="flex flex-col gap-1.5">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Featured Projects</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A few things I&apos;ve shipped — most are live, go break them.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-2">
          {featured.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>

        <Link
          href="/projects"
          className="group/see inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-foreground text-background px-4 py-2 text-sm font-semibold shadow-sm transition-opacity hover:opacity-90 w-fit"
        >
          See all projects
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/see:translate-x-0.5" />
        </Link>
      </section>
    </Reveal>
  )
}
