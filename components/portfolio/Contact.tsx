"use client"

import { useState } from "react"
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
    <section className="section" id="contact" style={{ marginBottom: "2rem" }}>
      <Reveal y={18}>
        <h2 className="sec-title">Contact</h2>
      </Reveal>

      <Reveal y={16} delay={0.06}>
        <p className="contact-lede">
          Open to full-time roles, internships, and freelance projects.
          Email me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or drop a message
          below — I usually respond within the same day.
        </p>
      </Reveal>

      <Reveal y={16} delay={0.12}>
        {status === "success" ? (
          <div className="form-success">
            <span aria-hidden>✓</span> Message sent! I&apos;ll get back to you soon.
          </div>
        ) : (
          <form className="form-stack" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="c-name" className="field-label">name</label>
              <input
                id="c-name"
                type="text"
                className="field-input"
                placeholder="Your name"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="field-group">
              <label htmlFor="c-email" className="field-label">email</label>
              <input
                id="c-email"
                type="email"
                className="field-input"
                placeholder="you@example.com"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
            </div>
            <div className="field-group">
              <label htmlFor="c-msg" className="field-label">message</label>
              <textarea
                id="c-msg"
                rows={4}
                className="field-input"
                placeholder="What would you like to discuss?"
                required
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              />
            </div>
            {status === "error" && (
              <div className="form-error">
                <span aria-hidden>✕</span> Something went wrong — try emailing me directly.
              </div>
            )}
            <button type="submit" className="btn btn-primary" disabled={status === "sending"} style={{ justifyContent: "center" }}>
              {status === "sending" ? "sending…" : "send message"}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  )
}
