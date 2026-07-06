import Navbar from "@/components/portfolio/Navbar"
import Hero from "@/components/portfolio/Hero"
import About from "@/components/portfolio/About"
import Projects from "@/components/portfolio/Projects"
import Experience from "@/components/portfolio/Experience"
import Skills from "@/components/portfolio/Skills"
import Achievements from "@/components/portfolio/Achievements"
import Contact from "@/components/portfolio/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>Crafted by Priyank Tyagi · {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
