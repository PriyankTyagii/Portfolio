export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/PriyankTyagii", short: "gh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyank-tyagi-3a3a10259/", short: "in" },
  { label: "Twitter / X", href: "https://x.com/PriyankTya22652", short: "𝕏" },
  { label: "Email", href: "mailto:priyanktyagi404@gmail.com", short: "@" },
]

export const PROFILE = {
  name: "Priyank Tyagi",
  role: "Full-Stack Engineer • Builder",
  greeting: "Hey, I'm",
  headline: "I turn ideas into production-grade AI products — end to end.",
  location: "Roorkee, India",
  pronouns: "he/him",
  avatar: "https://github.com/PriyankTyagii.png",
  bio: "From typed Next.js frontends to FastAPI services, LLM agents, RAG pipelines, and cloud deploys — I own the whole stack and ship things people actually use. If it involves an idea becoming a working product, I'm probably having fun.",
}

export const PROFILE_STATS = [
  { label: "10+ hackathon wins", color: "#c084fc" },
  { label: "2 patents filed", color: "#22d3ee" },
  { label: "5+ products live", color: "#34d399" },
]

/* Tinted chips — grouped by domain, color per tech */
export const TECH_GROUPS = [
  {
    label: "AI & Machine Learning",
    items: [
      { name: "LangChain", color: "#c084fc" },
      { name: "RAG / Vector DBs", color: "#f472b6" },
      { name: "OpenAI API", color: "#38bdf8" },
      { name: "HuggingFace", color: "#facc15" },
      { name: "PyTorch", color: "#fb923c" },
      { name: "TensorFlow", color: "#fb923c" },
    ],
  },
  {
    label: "Languages & Frameworks",
    items: [
      { name: "TypeScript", color: "#60a5fa" },
      { name: "Python", color: "#facc15" },
      { name: "Next.js", color: "#f4f4f5" },
      { name: "React", color: "#22d3ee" },
      { name: "FastAPI", color: "#34d399" },
      { name: "Node.js", color: "#4ade80" },
      { name: "Tailwind CSS", color: "#22d3ee" },
    ],
  },
  {
    label: "Data, Cloud & DevOps",
    items: [
      { name: "PostgreSQL", color: "#60a5fa" },
      { name: "MongoDB", color: "#4ade80" },
      { name: "Redis", color: "#f87171" },
      { name: "Firebase", color: "#facc15" },
      { name: "Docker", color: "#38bdf8" },
      { name: "Kubernetes", color: "#60a5fa" },
      { name: "AWS", color: "#fb923c" },
      { name: "GCP", color: "#34d399" },
      { name: "GitHub Actions", color: "#a1a1aa" },
    ],
  },
]

export const PROJECTS = [
  {
    index: "01",
    name: "AI Customer Support System",
    desc: "Agentic AI backend with a clean React frontend — multi-agent orchestration, per-user data isolation, auth, and database-backed tools. Agents act on real orders, invoices, and refunds with live streaming UX.",
    tags: ["Agentic AI", "Next.js", "React", "LLMs"],
    link: "https://ai-powered-customer-support-system-sigma.vercel.app/",
    github: "https://github.com/PriyankTyagii/AI-powered-customer-support-system",
    status: "Live",
    accent: "#34d399",
    thumb: "/ai-customer-support-system.png" as string | null,
  },
  {
    index: "02",
    name: "Fashion Visual Search AI",
    desc: "Visual similarity engine indexing 17K+ fashion items with ResNet50 embeddings in ChromaDB. 0.85 precision@10; doubled user engagement in testing.",
    tags: ["TensorFlow", "ResNet50", "ChromaDB", "Streamlit"],
    link: "https://fashion-visual-search-intelligent-styling-assistant-priyank.streamlit.app/",
    status: "Live",
    accent: "#c084fc",
    thumb: "/fashion-search-visual-engine.jpg" as string | null,
  },
  {
    index: "03",
    name: "ComponentForge",
    desc: "Plain English → production Angular components. Generates TypeScript + HTML + SCSS in under 5 seconds with design-system enforcement and self-correction loops.",
    tags: ["Groq", "Llama 3.3", "Next.js", "TypeScript"],
    link: "https://component-forge-beige.vercel.app",
    status: "Live",
    accent: "#22d3ee",
    thumb: null as string | null,
  },
  {
    index: "04",
    name: "Events Platform",
    desc: "Full-stack event discovery: multi-source scraping on Vercel Cron every 6 hours, a Phi-3 powered assistant, Firestore persistence, and a Google OAuth admin panel.",
    tags: ["Next.js", "Firebase", "HuggingFace", "TypeScript"],
    link: "https://events-platform-ruddy.vercel.app/",
    status: "Live",
    accent: "#facc15",
    thumb: null as string | null,
  },
  {
    index: "05",
    name: "ZedBlock",
    desc: "Blockchain node with hardware-accelerated AES-CBC + SHA-256 on a Zynq-7000 SoC — 2× the throughput of the software path. Proof I can go as low-level as the problem demands.",
    tags: ["C", "FPGA", "Cryptography"],
    link: "https://github.com/PriyankTyagii",
    status: "Research",
    accent: "#f87171",
    thumb: "/blockchain-network.png" as string | null,
  },
]

export const GITHUB_USERNAME = "PriyankTyagii"

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "AgroLogi Technologies",
    logo: "/logos/agrologi.png",
    location: "Remote",
    accent: "#34d399",
    period: "Sept 2025 — Feb 2026",
    points: [
      "Built a FastAPI + Firebase + ResNet50 pipeline processing 10K+ crop images/day — +25% accuracy, −35% latency.",
      "Scaled a multi-tenant SaaS with RBAC & i18n to 5K+ concurrent users while cutting API latency 40%.",
      "Set up CI/CD with GitHub Actions + Docker — deployment time down 60%.",
    ],
  },
  {
    role: "Research Intern",
    company: "IIT Roorkee",
    logo: "/logos/iit-roorkee.svg",
    location: "On-site",
    accent: "#60a5fa",
    period: "Apr 2025 — Sept 2025",
    points: [
      "Built an AI-powered blockchain consensus layer with ML-based validator selection — +30% throughput, −20% latency.",
      "Accelerated the cryptography path (SHA-256/AES) 2× as part of the research prototype.",
    ],
  },
  {
    role: "AI & Cloud Intern",
    company: "Edunet Foundation · IBM SkillsBuild",
    logo: "/logos/edunet-foundation.png",
    location: "Remote",
    accent: "#c084fc",
    period: "July — Aug 2024",
    points: [
      "Built ML pipelines on IBM Cloud — 10K+ samples at 92% accuracy, −35% training time.",
      "Shipped a production LLM chatbot with prompt optimization & caching — −25% cloud costs.",
    ],
  },
]

export const EDUCATION = [
  {
    role: "B.Tech Information Technology",
    company: "College of Engineering Roorkee",
    logo: "/logos/coer.jpg",
    location: "Roorkee",
    accent: "#facc15",
    period: "Expected May 2026",
    points: [
      "CGPA 7.8 / 10 — coursework in DSA, OS, DBMS, Computer Networks, Machine Learning.",
    ],
  },
]

export const WINS = [
  { icon: "trophy", accent: "#facc15", title: "IIT InnoWave", desc: "Winner — national innovation competition at IIT for an AI-powered solution." },
  { icon: "target", accent: "#f87171", title: "10+ Hackathon Wins", desc: "National & international — incl. 2nd place AlgoVerse (Microsoft × HackWithIndia)." },
  { icon: "scroll", accent: "#c084fc", title: "2 Patents Filed", desc: "AI and IoT innovations under review at the Indian Patent Office." },
  { icon: "sparkles", accent: "#38bdf8", title: "Google Gemini Ambassador", desc: "Top 0.003% of 30,000+ applicants as Campus Ambassador." },
  { icon: "cloud", accent: "#34d399", title: "GCP Arcade Champion", desc: "Top performer in Google Cloud competitive skill challenges." },
]

export const CERTIFICATIONS = [
  { name: "Artificial Intelligence Fundamentals", issuer: "IBM", year: "2024" },
  { name: "Enterprise-grade AI", issuer: "IBM", year: "2024" },
  { name: "CCNAv7: Introduction to Networks", issuer: "Cisco", year: "2023" },
  { name: "Linux Essentials", issuer: "Cisco", year: "2023" },
  { name: "Python Essentials 1", issuer: "Cisco", year: "2024" },
  { name: "Geoprocessing using Python", issuer: "ISRO", year: "2023" },
  { name: "Postman API Student Expert", issuer: "Postman", year: "2024" },
  { name: "Intro to NLP", issuer: "Infosys Springboard", year: "2024" },
  { name: "Computer Vision 101", issuer: "Infosys Springboard", year: "2024" },
  { name: "Data Science with Python", issuer: "LetsUpgrade", year: "2024" },
  { name: "Data Viz & Warehousing Master Course", issuer: "Udemy", year: "2024" },
]

export const LINKEDIN_CERTS_URL =
  "https://www.linkedin.com/in/priyank-tyagi-3a3a10259/details/certifications/"

export const EMAIL = "priyanktyagi404@gmail.com"
export const SITE = "priyanktyagi.vercel.app"
export const FORMSPREE = "https://formspree.io/f/mjkpjnqp"
