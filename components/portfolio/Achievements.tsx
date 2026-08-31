"use client"

import { Trophy, Target, ScrollText, Lightbulb, Check, type LucideIcon } from "lucide-react"
import { Reveal, EntryRow } from "./ui"
import { WINS, CERTIFICATIONS, LINKEDIN_CERTS_URL } from "./data"

const WIN_ICONS: Record<string, LucideIcon> = {
  trophy: Trophy,
  target: Target,
  scroll: ScrollText,
  lightbulb: Lightbulb,
}

export default function Achievements() {
  return (
    <Reveal y={-6}>
      <section
        className="max-w-3xl mx-auto px-6 w-full py-8 md:py-10 flex flex-col gap-12 border-t border-border"
        id="wins"
      >
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Wins &amp; Recognition</h2>
          <div className="flex flex-col gap-6">
            {WINS.map((w) => {
              const Icon = WIN_ICONS[w.icon]
              const image = "image" in w ? w.image : undefined
              return (
                <EntryRow
                  key={w.title}
                  logo={
                    image ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={image} alt="" loading="lazy" className="h-full w-full object-contain p-1.5" aria-hidden />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{ background: `${w.accent}1a` }}
                        aria-hidden
                      >
                        <Icon className="h-5 w-5" style={{ color: w.accent }} />
                      </div>
                    )
                  }
                  title={w.title}
                  href={w.href}
                  desc={w.desc}
                />
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-6" id="certs">
          <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {CERTIFICATIONS.map((c) => (
              <div key={c.name} className="flex items-center gap-2 text-sm">
                <Check className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" aria-hidden />
                <span className="text-foreground font-medium">{c.name}</span>
                <span className="text-muted-foreground text-xs whitespace-nowrap">
                  {c.issuer} · {c.year}
                </span>
              </div>
            ))}
          </div>
          <a
            href={LINKEDIN_CERTS_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            verify all on linkedin ↗
          </a>
        </div>
      </section>
    </Reveal>
  )
}
