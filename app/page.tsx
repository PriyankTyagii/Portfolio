"use client"
import AnimatedCodeBlock from "@/components/animated-code-block"
import KeyAchievements from "@/components/key-achievements"
import FeaturedProjects from "@/components/featured-projects"
import TechnicalExpertise from "@/components/technical-expertise"
import Experience from "@/components/experience"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section with Code Block */}
      <section className="py-20 px-4 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                  Available for Opportunities
                </div>
                <div className="space-y-3">
                  <h1 className="text-6xl md:text-7xl font-bold leading-tight text-balance">Priyank Tyagi</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                    Full-Stack Developer & AI Enthusiast
                  </p>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Building scalable, real-time, AI-integrated platforms | 7x National Hackathon Champion
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-all duration-300 font-medium text-sm"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all duration-300 font-medium text-sm"
                >
                  Contact Me
                </a>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/priyank-tyagi-3a3a10259/"
                  aria-label="LinkedIn"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/PriyankTyagii"
                  aria-label="GitHub"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/priyanktya31888"
                  aria-label="Twitter"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-muted transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Animated Code Block */}
            <AnimatedCodeBlock />
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <KeyAchievements />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Experience */}
      <Experience />

      {/* Technical Expertise */}
      <TechnicalExpertise />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
