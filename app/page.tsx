import Navbar from "@/components/portfolio/Navbar"
import Hero from "@/components/portfolio/Hero"
import Skills from "@/components/portfolio/Skills"
import Experience from "@/components/portfolio/Experience"
import Projects from "@/components/portfolio/Projects"
import Achievements from "@/components/portfolio/Achievements"
import Contact from "@/components/portfolio/Contact"

export default function Home() {
  return (
    <>
      <div className="bg-dots" aria-hidden />
      <Navbar />
      <main className="wrap">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-copy">© {new Date().getFullYear()} Priyank Tyagi · built with Next.js</p>
          <div className="footer-links">
            <a href="https://github.com/PriyankTyagii" target="_blank" rel="noreferrer">github</a>
            <a href="https://www.linkedin.com/in/priyank-tyagi-3a3a10259/" target="_blank" rel="noreferrer">linkedin</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">resume</a>
            <a href="#top">top ↑</a>
          </div>
        </div>
      </footer>
    </>
  )
}
