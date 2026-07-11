"use client"

import { Github, ExternalLink } from "lucide-react"
import { PROJECTS } from "./data"

export type Project = (typeof PROJECTS)[number]

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700">
      <span className="border-beam" aria-hidden />

      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        {p.thumb ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={p.thumb}
            alt={`${p.name} preview`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-zinc-400 dark:text-zinc-600" aria-hidden>
            <span className="text-xs font-mono">{p.index}</span>
            <span className="text-sm font-semibold">{p.name}</span>
          </div>
        )}
        <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-full border border-border bg-white/80 dark:bg-zinc-950/80 backdrop-blur px-2 py-0.5 text-[10px] font-semibold text-foreground">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent }} />
          {p.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-foreground text-base tracking-tight">{p.name}</h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4 min-h-[72px]">{p.desc}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1">
          {p.tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 text-[10px] font-semibold text-zinc-700 dark:text-zinc-300 border border-border/50"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5 flex items-center gap-3">
          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white dark:bg-zinc-950 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Website
            </a>
          )}
          {"github" in p && p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-white dark:bg-zinc-950 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-900"
            >
              <Github className="h-3.5 w-3.5" />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
