import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Reveal } from "@/components/portfolio/ui"
import ProjectCard from "@/components/portfolio/ProjectCard"
import Dock from "@/components/portfolio/Dock"
import { PROJECTS } from "@/components/portfolio/data"

export const metadata: Metadata = {
  title: "All Projects | Priyank Tyagi",
  description: "Everything I've shipped — full-stack apps, AI pipelines, and research prototypes.",
}

export default function AllProjectsPage() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-background pb-16">
        <Reveal y={-6}>
          <section className="max-w-3xl mx-auto px-6 w-full py-8 md:py-10 flex flex-col gap-6 pt-16 md:pt-20">
            <Link
              href="/#projects"
              className="group/back inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-fit"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover/back:-translate-x-0.5" />
              Back
            </Link>

            <div className="flex flex-col gap-1.5">
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                All Projects
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Everything I&apos;ve shipped — full-stack apps, AI pipelines, and research prototypes.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-2">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.name} p={p} />
              ))}
            </div>
          </section>
        </Reveal>
      </main>
      <Dock />
    </>
  )
}
