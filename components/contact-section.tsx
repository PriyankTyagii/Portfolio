"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    try {
      const response = await fetch("https://formspree.io/f/mjkpjnqp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        const data = await response.json()
        setError(data?.error || "Failed to send message")
      }
    } catch (err) {
      setError("Something went wrong. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Let's discuss how we can work together on your next project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Tell me about your project or opportunity..."
                rows={4}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>

          <div className="space-y-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:priyanktyagi404@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">priyanktyagi404@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+917983330918"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91-7983-330-918</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Roorkee, Uttarakhand, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio & Social */}
            <div className="pt-6 border-t border-border space-y-4">
              <p className="text-sm text-muted-foreground">
                Software Developer with hands-on experience in Web Development, Machine Learning, and AI. Proven ability to build scalable, real-world solutions backed by 7x Hackathon wins and project work that blends innovation with execution.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/priyank-tyagi-3a3a10259/"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/PriyankTyagii"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
