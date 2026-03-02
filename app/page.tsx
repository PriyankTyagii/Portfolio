"use client"
import { useEffect, useRef, useState } from "react"

const CODE_LINES = [
  { n: "1",  c: `<span class="pt-kw">const</span> <span class="pt-fn">priyank</span> <span class="pt-pu">=</span> <span class="pt-pu">{</span>` },
  { n: "2",  c: `&nbsp;&nbsp;<span class="pt-key">name</span><span class="pt-pu">:</span> <span class="pt-str">"Priyank Tyagi"</span><span class="pt-pu">,</span>` },
  { n: "3",  c: `&nbsp;&nbsp;<span class="pt-key">role</span><span class="pt-pu">:</span> <span class="pt-str">"Full Stack + AI Engineer"</span><span class="pt-pu">,</span>` },
  { n: "4",  c: `&nbsp;&nbsp;<span class="pt-key">university</span><span class="pt-pu">:</span> <span class="pt-str">"COER, Roorkee"</span><span class="pt-pu">,</span>` },
  { n: "5",  c: `&nbsp;&nbsp;<span class="pt-key">hackathons</span><span class="pt-pu">:</span> <span class="pt-val">10</span><span class="pt-pu">,</span>` },
  { n: "6",  c: `&nbsp;&nbsp;<span class="pt-key">patents</span><span class="pt-pu">:</span> <span class="pt-val">2</span><span class="pt-pu">,</span>` },
  { n: "7",  c: `&nbsp;&nbsp;<span class="pt-key">stack</span><span class="pt-pu">:</span> <span class="pt-pu">[</span><span class="pt-str">"Next.js"</span><span class="pt-pu">,</span> <span class="pt-str">"FastAPI"</span><span class="pt-pu">,</span> <span class="pt-str">"LangChain"</span><span class="pt-pu">],</span>` },
  { n: "8",  c: `&nbsp;&nbsp;<span class="pt-key">open_to_work</span><span class="pt-pu">:</span> <span class="pt-kw">true</span>` },
  { n: "9",  c: `<span class="pt-pu">};</span>` },
  { n: "10", c: `` },
  { n: "11", c: `<span class="pt-cm">// "Build fast. Ship smart."</span><span class="pt-blink"></span>` },
]

const PROJECTS = [
  { icon: "👗", bg: "rgba(139,92,246,.12)", stat: "Live · Streamlit Cloud", name: "Fashion Visual Search AI",
    desc: "Visual similarity engine indexing 17K+ fashion items via ResNet50 + ChromaDB. 0.85 precision@10 · 2x user engagement boost.",
    tags: ["TensorFlow","ResNet50","ChromaDB","Streamlit","Python"],
    link: "https://fashion-visual-search-intelligent-styling-assistant-priyank.streamlit.app/", delay: "pt-d1" },
  { icon: "⚒", bg: "rgba(6,182,212,.12)", stat: "Live · Vercel", name: "ComponentForge",
    desc: "AI-powered Angular component generator. Plain English → production-ready TS + HTML + SCSS in <5s with design system enforcement & self-correction.",
    tags: ["Groq","Llama 3.3","Next.js","TypeScript","Python"],
    link: "https://component-forge-beige.vercel.app", delay: "pt-d2" },
  { icon: "📅", bg: "rgba(245,158,11,.1)", stat: "Live · Full Stack", name: "Events Platform",
    desc: "Full-stack event discovery with AI assistant (Phi-3), multi-source scraping every 6h via Vercel Cron, Firestore, and Google OAuth admin.",
    tags: ["Next.js","Firebase","HuggingFace","TypeScript"],
    link: "https://events-platform-ruddy.vercel.app/", delay: "pt-d1" },
  { icon: "🔒", bg: "rgba(239,68,68,.1)", stat: "Hardware · FPGA", name: "ZedBlock",
    desc: "Blockchain on Xilinx ZedBoard (Zynq-7000 SoC) with hardware-accelerated AES-CBC + SHA-256. 2x performance vs software, UART CLI interface.",
    tags: ["C","Vitis","Vivado","FPGA","AES-CBC"],
    link: "https://github.com/PriyankTyagii", delay: "pt-d2" },
]

const SKILLS = [
  { name: "⌨ Languages",     tags: ["Python","TypeScript","JavaScript","C++","SQL","C"] },
  { name: "🌐 Frontend",     tags: ["Next.js","React","Tailwind CSS","Streamlit"] },
  { name: "⚡ Backend",      tags: ["FastAPI","Node.js","REST APIs","Microservices","Firebase"] },
  { name: "🤖 AI / ML",     tags: ["LangChain","LlamaIndex","RAG","TensorFlow","PyTorch","OpenAI","HuggingFace"] },
  { name: "🗄 Databases",    tags: ["PostgreSQL","MongoDB","Redis","Firestore","FAISS","ChromaDB","Pinecone"] },
  { name: "☁ Cloud/DevOps", tags: ["AWS","GCP","Docker","Kubernetes","GitHub Actions","CI/CD","Vercel"] },
]

const ACHIEVEMENTS = [
  { icon: "🏆", title: "IIT InnoWave Winner",        desc: "National-level innovation competition at IIT. Top prize for AI-powered solution." },
  { icon: "🎯", title: "10+ Hackathon Wins",          desc: "National and international competitions — consistently ranked in top solutions." },
  { icon: "📜", title: "2 Patents Filed",             desc: "Innovations in AI and IoT domains, filed and under review at Indian Patent Office." },
  { icon: "☁️", title: "GCP Arcade Champion",        desc: "Google Cloud Platform competitive program — top performer in cloud skill challenges." },
  { icon: "🌟", title: "Google Gemini Ambassador",    desc: "Top 0.003% from 30,000+ applicants as Google Gemini Campus Ambassador." },
  { icon: "🔬", title: "IIT Roorkee Research Intern", desc: "AI × Blockchain research — hardware-accelerated cryptography on Xilinx FPGA." },
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const didAnimate = useRef(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const res = await fetch("https://formspree.io/f/mjkpjnqp", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }) }
      else setStatus("error")
    } catch { setStatus("error") }
  }

  useEffect(() => {
    // Particles
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener("resize", resize)
    const pts = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.4 + .4, a: Math.random() * .4 + .1,
    }))
    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99,102,241,${p.a})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(99,102,241,${.06 * (1 - d / 110)})`
            ctx.lineWidth = .5
            ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke()
          }
        }
      raf = requestAnimationFrame(draw)
    }
    draw()

    // Nav scroll
    const nav = document.getElementById("pt-nav")!
    const onScroll = () => nav.classList.toggle("pt-scrolled", window.scrollY > 40)
    window.addEventListener("scroll", onScroll)

    // Scroll reveal
    const ro = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("pt-in") }),
      { threshold: 0.1 }
    )
    document.querySelectorAll(".pt-reveal, .pt-reveal-l, .pt-reveal-r").forEach(el => ro.observe(el))

    // Counters
    const co = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        const target = +(el.dataset.target ?? 0)
        let cur = 0; const step = target / 50
        const t = setInterval(() => {
          cur += step
          if (cur >= target) { el.textContent = String(target); clearInterval(t) }
          else el.textContent = String(Math.floor(cur))
        }, 30)
        co.unobserve(el)
      })
    }, { threshold: .5 })
    document.querySelectorAll<HTMLElement>(".pt-count").forEach(el => co.observe(el))

    // Card glow
    document.querySelectorAll<HTMLElement>(".pt-proj-card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect()
        card.style.setProperty("--mx", (e.clientX - r.left) + "px")
        card.style.setProperty("--my", (e.clientY - r.top) + "px")
      })
    })

    // Typed code block — runs exactly once
    if (!didAnimate.current) {
      didAnimate.current = true
      const cb = document.getElementById("pt-code-body")
      if (cb) {
        cb.innerHTML = ""
        let i = 0
        const next = () => {
          if (i >= CODE_LINES.length) return
          const l = CODE_LINES[i++]
          const div = document.createElement("div")
          div.className = "pt-code-line"
          div.innerHTML = `<span class="pt-ln">${l.n}</span><span>${l.c}</span>`
          div.style.cssText = "opacity:0;transform:translateX(-6px);transition:opacity .2s,transform .2s"
          cb.appendChild(div)
          requestAnimationFrame(() => { div.style.opacity = "1"; div.style.transform = "translateX(0)" })
          if (i < CODE_LINES.length) setTimeout(next, 80)
        }
        setTimeout(next, 500)
      }
    }

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
      ro.disconnect()
      co.disconnect()
    }
  }, [])

  return (
    <>
      <canvas id="pt-canvas" ref={canvasRef} />

      <nav id="pt-nav">
        <div className="pt-logo">PT_</div>
        <ul className="pt-nav-links">
          <li><a href="#pt-projects">Projects</a></li>
          <li><a href="#pt-experience">Experience</a></li>
          <li><a href="#pt-skills">Skills</a></li>
          <li><a href="#pt-contact">Contact</a></li>
        </ul>
        <a href="mailto:priyanktyagi404@gmail.com" className="pt-nav-cta">↗ Hire Me</a>
      </nav>

      <main>

        {/* HERO */}
        <section id="pt-hero">
          <div className="pt-hero-inner">
            <div>
              <div className="pt-badge"><span className="pt-dot-live" /> Available for Opportunities</div>
              <h1>Priyank<br /><span>Tyagi</span></h1>
              <p className="pt-subtitle">Full-Stack Developer &amp; AI/ML Engineer</p>
              <p className="pt-desc">
                Building scalable, AI-integrated platforms and full-stack systems.
                IIT InnoWave Winner · 10+ Hackathon Champion · Google Gemini Ambassador (Top 0.003%)
              </p>
              <div className="pt-btns">
                <a href="#pt-projects" className="pt-btn-p"><span>View Projects</span><span>→</span></a>
                <a href="#pt-contact" className="pt-btn-s">Let&apos;s Talk</a>
              </div>
              <div className="pt-socials">
                <a href="https://www.linkedin.com/in/priyank-tyagi-3a3a10259/" target="_blank" rel="noreferrer" className="pt-soc">in</a>
                <a href="https://github.com/PriyankTyagii" target="_blank" rel="noreferrer" className="pt-soc">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.218.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
                <a href="https://x.com/PriyankTya22652" target="_blank" rel="noreferrer" className="pt-soc">𝕏</a>
                <a href="https://portfolio-priyank-tyagi.vercel.app/" target="_blank" rel="noreferrer" className="pt-soc">⬡</a>
              </div>
            </div>

            <div className="pt-code-win">
              <div className="pt-titlebar">
                <div className="pt-dot pt-dot-r" /><div className="pt-dot pt-dot-y" /><div className="pt-dot pt-dot-g" />
                <span className="pt-fname">priyank.ts</span>
              </div>
              <div className="pt-cb" id="pt-code-body" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <div id="pt-stats">
          <div className="pt-stats-inner">
            {[{ n:10,label:"+ Hackathon Wins" },{ n:2,label:"Patents Filed" },{ n:5,label:"Live Projects" },{ n:7,label:"Projects Shipped" }]
              .map((s,i) => (
              <div key={i} className={`pt-stat pt-reveal pt-d${i}`}>
                <span className="pt-snum pt-count" data-target={s.n}>0</span>
                <div className="pt-slabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <section id="pt-projects" className="pt-section">
          <div className="pt-label">Featured Work</div>
          <h2>Projects that <span style={{color:"var(--acc)"}}>ship &amp; scale</span></h2>
          <p className="pt-intro">Production-grade systems built with AI, real users, real outcomes.</p>
          <div className="pt-proj-grid">
            {PROJECTS.map((p,i) => (
              <div key={i} className={`pt-proj-card pt-reveal ${p.delay}`}>
                <div className="pt-proj-top">
                  <div className="pt-proj-icon" style={{background:p.bg}}>{p.icon}</div>
                  <a href={p.link} target="_blank" rel="noreferrer" className="pt-proj-link">↗</a>
                </div>
                <div className="pt-badge-stat">{p.stat}</div>
                <div className="pt-proj-name">{p.name}</div>
                <div className="pt-proj-desc">{p.desc}</div>
                <div className="pt-tags">{p.tags.map(t=><span key={t} className="pt-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-div" />

        {/* EXPERIENCE */}
        <section id="pt-experience" className="pt-section">
          <div className="pt-label">Career</div>
          <h2>Where I&apos;ve <span style={{color:"var(--acc)"}}>built things</span></h2>
          <p className="pt-intro">From AI research at IIT Roorkee to production SaaS platforms.</p>
          <div className="pt-timeline">
            {[
              { dot:"💼", role:"Full Stack Developer", co:"AgroLogi Technologies", date:"Sept 2025 – Feb 2026",
                bullets:[
                  <><span className="pt-hi">FastAPI + Firebase + ResNet50</span> — 10K+ crop images/day, <span className="pt-hi">+25% accuracy, −35% latency</span></>,
                  <>Multi-tenant SaaS with RBAC &amp; i18n — scaled to <span className="pt-hi">5K+ concurrent users, −40% API latency</span></>,
                  <><span className="pt-hi">CI/CD via GitHub Actions + Docker</span> — deployment time cut by 60%</>,
                ], delay:"" },
              { dot:"🔬", role:"Research Intern", co:"IIT Roorkee", date:"Apr 2025 – Sept 2025",
                bullets:[
                  <><span className="pt-hi">AI-powered blockchain consensus</span> with ML validator selection — <span className="pt-hi">+30% throughput, −20% latency</span></>,
                  <><span className="pt-hi">Hardware-accelerated SHA256/AES on Xilinx ZedBoard FPGA</span> — 2x performance uplift</>,
                ], delay:"pt-d1" },
              { dot:"☁️", role:"AI & Cloud Intern", co:"Edunet Foundation (IBM SkillsBuild)", date:"July – Aug 2024",
                bullets:[
                  <><span className="pt-hi">ML pipelines on IBM Cloud</span> — 10K+ samples at 92% accuracy, −35% training time</>,
                  <>Production <span className="pt-hi">LLM chatbot</span> with prompt optimization &amp; caching — <span className="pt-hi">−25% cloud costs</span></>,
                ], delay:"pt-d2" },
              { dot:"🎓", role:"B.Tech Information Technology", co:"College of Engineering Roorkee", date:"Expected May 2026",
                bullets:[
                  <><span className="pt-hi">CGPA: 7.8 / 10</span></>,
                  <>Coursework: DSA, OS, DBMS, Computer Networks, Machine Learning</>,
                ], delay:"pt-d3" },
            ].map((e,i) => (
              <div key={i} className={`pt-exp pt-reveal ${e.delay}`}>
                <div className="pt-exp-dot">{e.dot}</div>
                <div className="pt-exp-content">
                  <div className="pt-exp-hdr">
                    <div>
                      <div className="pt-exp-role">{e.role}</div>
                      <div className="pt-exp-co">{e.co}</div>
                    </div>
                    <div className="pt-exp-date">{e.date}</div>
                  </div>
                  <ul className="pt-exp-ul">{e.bullets.map((b,j)=><li key={j}>{b}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-div" />

        {/* SKILLS */}
        <section id="pt-skills" className="pt-section">
          <div className="pt-label">Expertise</div>
          <h2>The tools I <span style={{color:"var(--acc)"}}>work with</span></h2>
          <p className="pt-intro">Full-stack, AI/ML, and cloud — end to end.</p>
          <div className="pt-skills-grid">
            {SKILLS.map((g,i) => (
              <div key={i} className={`pt-skill-group pt-reveal pt-d${i%4}`}>
                <div className="pt-sg-name">{g.name}</div>
                <div className="pt-skill-tags">{g.tags.map(t=><span key={t} className="pt-skill-tag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-div" />

        {/* ACHIEVEMENTS */}
        <section id="pt-achievements" className="pt-section">
          <div className="pt-label">Recognition</div>
          <h2>Wins &amp; <span style={{color:"var(--acc)"}}>recognition</span></h2>
          <p className="pt-intro">Validated by competitions, research, and the community.</p>
          <div className="pt-ach-grid">
            {ACHIEVEMENTS.map((a,i) => (
              <div key={i} className={`pt-ach-card pt-reveal pt-d${i%4}`}>
                <span className="pt-ach-icon">{a.icon}</span>
                <div className="pt-ach-title">{a.title}</div>
                <div className="pt-ach-desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-div" />

        {/* CONTACT */}
        <section id="pt-contact" className="pt-section">
          <div className="pt-contact-wrap">
            <div className="pt-reveal-l">
              <div className="pt-label">Get in Touch</div>
              <div className="pt-cemail">Let&apos;s build<br />something<br /><span style={{color:"var(--acc)"}}>great.</span></div>
              <p className="pt-csub">Open to full-time roles, internships, freelance projects, and research collabs. Usually respond same day.</p>
              <a href="mailto:priyanktyagi404@gmail.com" className="pt-btn-p" style={{display:"inline-flex",marginBottom:"1.5rem"}}>
                <span>📬 priyanktyagi404@gmail.com</span>
              </a>
              <div style={{display:"flex",flexDirection:"column",gap:".5rem"}}>
                {[
                  {label:"LinkedIn",  href:"https://www.linkedin.com/in/priyank-tyagi-3a3a10259/"},
                  {label:"GitHub",    href:"https://github.com/PriyankTyagii"},
                  {label:"Twitter/X", href:"https://x.com/PriyankTya22652"},
                  {label:"Portfolio", href:"https://portfolio-priyank-tyagi.vercel.app/"},
                ].map((l,i) => (
                  <a key={i} href={l.href} target="_blank" rel="noreferrer"
                    style={{color:"var(--mut)",textDecoration:"none",fontFamily:"'JetBrains Mono',monospace",fontSize:".8rem",transition:"color .2s"}}
                    onMouseEnter={e=>(e.currentTarget.style.color="var(--acc)")}
                    onMouseLeave={e=>(e.currentTarget.style.color="var(--mut)")}
                  >↗ {l.label}</a>
                ))}
              </div>
            </div>

            <div className="pt-contact-card pt-reveal-r">
              <div className="pt-label">Send a Message</div>
              {status === "success" ? (
                <div className="pt-form-success" style={{marginTop:"1.5rem"}}>
                  <span>✓</span><span>Message sent! I&apos;ll get back to you soon.</span>
                </div>
              ) : (
                <form className="pt-form" onSubmit={handleSubmit}>
                  <div className="pt-field">
                    <label htmlFor="pt-name">Name</label>
                    <input id="pt-name" type="text" placeholder="Your name" required
                      value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
                  </div>
                  <div className="pt-field">
                    <label htmlFor="pt-email">Email</label>
                    <input id="pt-email" type="email" placeholder="you@example.com" required
                      value={form.email} onChange={e=>setForm(f=>({...f,email:e.target.value}))} />
                  </div>
                  <div className="pt-field">
                    <label htmlFor="pt-msg">Message</label>
                    <textarea id="pt-msg" rows={5} placeholder="What would you like to discuss?" required
                      value={form.message} onChange={e=>setForm(f=>({...f,message:e.target.value}))} />
                  </div>
                  {status === "error" && (
                    <div className="pt-form-error"><span>✕</span><span>Something went wrong. Try emailing me directly.</span></div>
                  )}
                  <button type="submit" className="pt-submit" disabled={status==="sending"}>
                    {status==="sending" ? <><div className="pt-spinner"/><span>Sending…</span></> : <span>Send Message →</span>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="pt-fglow" />
        <span>Crafted by Priyank Tyagi · {new Date().getFullYear()} · Next.js · Vercel</span>
      </footer>
    </>
  )
}