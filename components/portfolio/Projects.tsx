"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "./ui"
import ProjectCard from "./ProjectCard"
import { PROJECTS } from "./data"

export default function Projects() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }, [])

  useEffect(() => {
    updateArrows()
    const el = scrollerRef.current
    if (!el) return
    el.addEventListener("scroll", updateArrows, { passive: true })
    window.addEventListener("resize", updateArrows)
    return () => {
      el.removeEventListener("scroll", updateArrows)
      window.removeEventListener("resize", updateArrows)
    }
  }, [updateArrows])

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const amount = (card?.offsetWidth ?? 300) + 20
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  return (
    <Reveal y={-6}>
      <section
        className="max-w-3xl mx-auto w-full py-8 md:py-10 flex flex-col gap-6 border-t border-border"
        id="projects"
      >
        <div className="flex flex-col gap-1.5 px-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Projects</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Everything I&apos;ve shipped — most are live, go break them. Swipe or scroll for more →
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-px-6 px-6 pb-2"
            style={{ maskImage: "linear-gradient(to right, transparent, black 24px, black calc(100% - 24px), transparent)" }}
          >
            {PROJECTS.map((p) => (
              <div key={p.name} className="snap-start shrink-0 w-[78%] sm:w-[300px]">
                <ProjectCard p={p} />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            className="hidden sm:flex absolute left-2 top-[35%] -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 backdrop-blur shadow-sm text-foreground transition-all hover:bg-card disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            className="hidden sm:flex absolute right-2 top-[35%] -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full border border-border bg-card/90 backdrop-blur shadow-sm text-foreground transition-all hover:bg-card disabled:opacity-0 disabled:pointer-events-none"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6">
          <Link
            href="/projects"
            className="group/see inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border bg-foreground text-background px-5 py-2.5 text-sm font-semibold shadow-sm transition-all hover:opacity-90 hover:shadow-md hover:-translate-y-0.5 w-fit"
          >
            See all projects
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/see:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </Reveal>
  )
}
