import Hero from "@/components/portfolio/Hero"
import Experience from "@/components/portfolio/Experience"
import Education from "@/components/portfolio/Education"
import Achievements from "@/components/portfolio/Achievements"
import Projects from "@/components/portfolio/Projects"
import GithubActivity from "@/components/portfolio/GithubActivity"
import Skills from "@/components/portfolio/Skills"
import Contact from "@/components/portfolio/Contact"
import Dock from "@/components/portfolio/Dock"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-background pb-16">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <GithubActivity />
        <Skills />
        <Achievements />
        <Contact />

        <section className="max-w-3xl mx-auto px-6 w-full py-8 flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-border text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Priyank Tyagi. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://github.com/PriyankTyagii" target="_blank" rel="noreferrer" className="hover:underline hover:text-foreground transition-colors">
              github
            </a>
            <a href="https://www.linkedin.com/in/priyank-tyagi-3a3a10259/" target="_blank" rel="noreferrer" className="hover:underline hover:text-foreground transition-colors">
              linkedin
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:underline hover:text-foreground transition-colors">
              resume
            </a>
          </div>
        </section>
      </main>
      <Dock />
    </>
  )
}
