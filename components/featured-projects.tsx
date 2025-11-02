"use client"

import Image from "next/image"
import { ArrowRight, Github, Globe } from "lucide-react"

const projects = [
  {
    tag: "FEATURED",
    title: "Visual Search & Styling Assistant",
    description:
      "Built a visual search engine using ResNet50 and cosine similarity for matching 17,000+ fashion items. Integrated image embeddings with metadata to deliver personalized styling recommendations.",
    image: "/fashion-search-visual-engine.jpg",
    github: "https://github.com/PriyankTyagii/Fashion-Visual-Search-Intelligent-Styling-Assistant",
    live: "https://fashion-visual-search.streamlit.app/",
    featured: true,
  },
  {
    title: "AI-Optimized Blockchain Solution",
    description:
      "Developed an AI-integrated blockchain platform with 30% efficiency improvement through real-time data processing and hardware acceleration.",
    image: "/blockchain-network.png",
    github: "https://github.com/PriyankTyagii/ZedBlock",
  },
  {
    title: "SkyInsight: Airline Booking Market Demand Web App",
    description:
      "SkyInsight is a smart web application that analyzes airline booking trends and market demand using real-time data, web scraping, and AI-powered insights. Explore popular routes, pricing trends, and forecast travel demand through interactive dashboards.",
    image: "/img11.webp",
    github: "https://github.com/PriyankTyagii/SkyInsight",
  },
]

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            Building scalable solutions that blend innovation with real-world impact.
          </p>
        </div>

        {/* Featured Project */}
        {projects[0] && (
          <div className="group relative overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300 bg-gradient-to-br from-card to-muted/30">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-4 flex flex-col justify-center">
                <div className="inline-block w-fit px-3 py-1 bg-accent/10 text-accent rounded text-sm font-semibold">
                  {projects[0].tag}
                </div>
                <h3 className="text-3xl font-bold">{projects[0].title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {projects[0].description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                  <a
                    href={projects[0].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
                  >
                    <Globe className="w-5 h-5" /> Live Demo
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={projects[0].image}
                  alt={projects[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
                >
                  <Github className="w-4 h-4" /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
