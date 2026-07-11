"use client"

import { Reveal, EntryRow } from "./ui"
import { EDUCATION } from "./data"

export default function Education() {
  return (
    <Reveal y={-6}>
      <section
        className="max-w-3xl mx-auto px-6 w-full py-8 md:py-10 flex flex-col gap-6 border-t border-border"
        id="education"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Education</h2>
        <div className="flex flex-col gap-8">
          {EDUCATION.map((e) => (
            <EntryRow
              key={e.company}
              logo={
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={e.logo}
                  alt={`${e.company} logo`}
                  loading="lazy"
                  className="h-full w-full object-contain p-1.5"
                />
              }
              title={e.role}
              subtitle={`${e.company} · ${e.location}`}
              meta={e.period}
              points={e.points}
            />
          ))}
        </div>
      </section>
    </Reveal>
  )
}
