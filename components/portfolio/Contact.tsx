"use client"

import { useState } from "react"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { Reveal } from "./ui"
import { EMAIL, FORMSPREE } from "./data"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus("success")
        setForm({ name: "", email: "", message: "" })
      } else setStatus("error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <Reveal y={-6}>
      <section
        className="max-w-3xl mx-auto px-6 w-full py-8 md:py-10 flex flex-col gap-6 border-t border-border"
        id="contact"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground font-heading">Let&apos;s Build Something</h2>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base max-w-xl">
          Have a role, a project, or just an idea you want to talk through? My inbox is always
          open — reach me at{" "}
          <a href={`mailto:${EMAIL}`} className="text-foreground font-medium hover:underline">
            {EMAIL}
          </a>{" "}
          or use the form below. I usually reply the same day.
        </p>

        {status === "success" ? (
          <div className="flex items-center gap-2 rounded-lg border border-border bg-zinc-50 dark:bg-zinc-900 px-4 py-3 text-sm text-foreground">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden />
            Message sent! I&apos;ll get back to you soon.
          </div>
        ) : (
          <form className="flex flex-col gap-4 max-w-xl" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-name" className="text-xs font-medium text-muted-foreground">
                name
              </label>
              <input
                id="c-name"
                type="text"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-email" className="text-xs font-medium text-muted-foreground">
                email
              </label>
              <input
                id="c-email"
                type="email"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="c-msg" className="text-xs font-medium text-muted-foreground">
                message
              </label>
              <textarea
                id="c-msg"
                rows={4}
                placeholder="What would you like to discuss?"
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow resize-none"
              />
            </div>
            {status === "error" && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden />
                Something went wrong — try emailing me directly.
              </div>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-lg border border-border bg-foreground text-background px-4 py-2 text-sm font-semibold shadow-sm transition-opacity hover:opacity-90 disabled:opacity-50 w-fit"
            >
              {status === "sending" ? "sending…" : "send message"}
            </button>
          </form>
        )}
      </section>
    </Reveal>
  )
}
