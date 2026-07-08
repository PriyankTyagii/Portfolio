"use client"

import { Reveal } from "./ui"
import { PROFILE, PROFILE_STATS, SOCIALS, EMAIL, SITE } from "./data"

export default function Hero() {
  return (
    <section className="profile" id="top">
      <Reveal y={20}>
        <div className="profile-top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PROFILE.avatar} alt={PROFILE.name} className="avatar" />
          <div className="profile-id">
            <div className="available">
              <span className="available-dot" />
              Available for work
            </div>
            <h1 className="profile-name">{PROFILE.name}</h1>
            <div className="profile-role">{PROFILE.role}</div>
          </div>
        </div>
      </Reveal>

      <Reveal y={16} delay={0.08}>
        <div className="profile-meta">
          <div className="profile-meta-row">
            <span className="key" aria-hidden>◆</span> {PROFILE.location} · {PROFILE.pronouns}
          </div>
          <div className="profile-meta-row">
            <span className="key" aria-hidden>@</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
          <div className="profile-meta-row">
            <span className="key" aria-hidden>↗</span>
            <a href="/" aria-label="Website">{SITE}</a>
          </div>
        </div>
      </Reveal>

      <Reveal y={16} delay={0.16}>
        <p className="profile-bio">
          {PROFILE.bio}
        </p>
      </Reveal>

      <Reveal y={16} delay={0.24}>
        <div className="profile-stats">
          {PROFILE_STATS.map((s) => (
            <span
              key={s.label}
              className="pstat"
              style={{
                color: s.color,
                borderColor: `${s.color}38`,
                background: `${s.color}12`,
              }}
            >
              {s.label}
            </span>
          ))}
        </div>
      </Reveal>

      <Reveal y={16} delay={0.32}>
        <div className="profile-actions">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-primary">
            Resume <span aria-hidden>↗</span>
          </a>
          <a href="#contact" className="btn btn-secondary">Contact</a>
          {SOCIALS.filter((s) => !s.href.startsWith("mailto")).map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
              {s.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
