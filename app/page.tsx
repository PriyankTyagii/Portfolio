import Cursor from "@/components/portfolio/Cursor"
import Navbar from "@/components/portfolio/Navbar"
import Hero from "@/components/portfolio/Hero"
import Contact from "@/components/portfolio/Contact"
import { Stats, Marquee, Projects, Experience, Skills, Achievements } from "@/components/portfolio/Sections"

export default function Home() {
  return (
    <>
      <div className="noise" aria-hidden />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer-glow" aria-hidden />
        <span>
          Crafted by Priyank Tyagi · {new Date().getFullYear()} · Next.js · Three.js · Vercel
        </span>
      </footer>
    </>
  )
}
