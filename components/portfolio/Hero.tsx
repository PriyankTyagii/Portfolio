"use client"

import { Reveal, Highlight } from "./ui"
import { PROFILE } from "./data"

export default function Hero() {
  return (
    <Reveal y={-6}>
      <section
        className="max-w-3xl mx-auto px-6 w-full py-8 md:py-10 flex flex-col gap-6 pt-16 md:pt-20"
        id="hero"
      >
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
              {PROFILE.name}
            </h1>
            <p className="text-lg font-medium text-muted-foreground">{PROFILE.role}</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="relative h-24 w-24 overflow-hidden rounded-full border border-border shadow-sm object-cover"
          />
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-lg max-w-xl">
          I am a <Highlight color="rose">full-stack developer</Highlight> and{" "}
          <Highlight color="blue" delay={0.15}>
            AI engineer
          </Highlight>{" "}
          with experience on Next.js/React frontends, FastAPI backends, LLM agents, and RAG
          pipelines. I also have experience building voice AI pipelines, developer tools, and
          contributing to open-source projects.
        </p>
      </section>
    </Reveal>
  )
}
