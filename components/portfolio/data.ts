export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/PriyankTyagii", short: "gh" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyank-tyagi-3a3a10259/", short: "in" },
  { label: "Twitter / X", href: "https://x.com/PriyankTya22652", short: "𝕏" },
  { label: "Email", href: "mailto:priyanktyagi404@gmail.com", short: "@" },
]

export const STATS = [
  { value: 10, suffix: "+", label: "Hackathon Wins" },
  { value: 2, suffix: "", label: "Patents Filed" },
  { value: 5, suffix: "+", label: "Live Products" },
  { value: 7, suffix: "+", label: "Projects Shipped" },
]

export const PROJECTS = [
  {
    index: "01",
    name: "AI Customer Support System",
    tagline: "Agentic AI backend with real-world e-commerce simulation",
    desc: "An agentic AI backend integrated with a clean React frontend, built around real-world engineering concerns: authentication, per-user data isolation, multi-agent orchestration, and database-backed tools. Agents interact with real data (orders, invoices, refunds) via live streaming UX.",
    tags: ["Agentic AI", "Next.js", "React", "LLMs"],
    link: "https://ai-powered-customer-support-system-sigma.vercel.app/",
    github: "https://github.com/PriyankTyagii/AI-powered-customer-support-system",
    status: "Live · Vercel",
    accent: "#10b981",
  },
  {
    index: "02",
    name: "Fashion Visual Search AI",
    tagline: "Visual similarity engine for fashion discovery",
    desc: "Indexes 17K+ fashion items with ResNet50 embeddings stored in ChromaDB. Hits 0.85 precision@10 and doubled user engagement in testing.",
    tags: ["TensorFlow", "ResNet50", "ChromaDB", "Streamlit", "Python"],
    link: "https://fashion-visual-search-intelligent-styling-assistant-priyank.streamlit.app/",
    status: "Live · Streamlit Cloud",
    accent: "#c084fc",
  },
  {
    index: "03",
    name: "ComponentForge",
    tagline: "Plain English → production Angular components",
    desc: "AI component generator that turns natural language into production-ready TypeScript + HTML + SCSS in under 5 seconds, with design-system enforcement and self-correction loops.",
    tags: ["Groq", "Llama 3.3", "Next.js", "TypeScript", "Python"],
    link: "https://component-forge-beige.vercel.app",
    status: "Live · Vercel",
    accent: "#22d3ee",
  },
  {
    index: "04",
    name: "Events Platform",
    tagline: "Full-stack event discovery with an AI assistant",
    desc: "Multi-source scraping every 6 hours via Vercel Cron, a Phi-3 powered assistant, Firestore persistence, and a Google OAuth admin panel.",
    tags: ["Next.js", "Firebase", "HuggingFace", "TypeScript"],
    link: "https://events-platform-ruddy.vercel.app/",
    status: "Live · Full Stack",
    accent: "#fbbf24",
  },
  {
    index: "05",
    name: "ZedBlock",
    tagline: "Blockchain on bare-metal FPGA",
    desc: "Blockchain node on a Xilinx ZedBoard (Zynq-7000 SoC) with hardware-accelerated AES-CBC + SHA-256 — 2× the throughput of the software path, driven over a UART CLI.",
    tags: ["C", "Vitis", "Vivado", "FPGA", "AES-CBC"],
    link: "https://github.com/PriyankTyagii",
    status: "Hardware · FPGA",
    accent: "#f87171",
  },
]

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    company: "AgroLogi Technologies",
    period: "Sept 2025 — Feb 2026",
    points: [
      "FastAPI + Firebase + ResNet50 pipeline processing 10K+ crop images/day — +25% accuracy, −35% latency.",
      "Multi-tenant SaaS with RBAC & i18n, scaled to 5K+ concurrent users with −40% API latency.",
      "CI/CD via GitHub Actions + Docker — deployment time cut by 60%.",
    ],
  },
  {
    role: "Research Intern",
    company: "IIT Roorkee",
    period: "Apr 2025 — Sept 2025",
    points: [
      "AI-powered blockchain consensus with ML validator selection — +30% throughput, −20% latency.",
      "Hardware-accelerated SHA-256/AES on Xilinx ZedBoard FPGA — 2× performance uplift.",
    ],
  },
  {
    role: "AI & Cloud Intern",
    company: "Edunet Foundation · IBM SkillsBuild",
    period: "July — Aug 2024",
    points: [
      "ML pipelines on IBM Cloud — 10K+ samples at 92% accuracy, −35% training time.",
      "Production LLM chatbot with prompt optimization & caching — −25% cloud costs.",
    ],
  },
  {
    role: "B.Tech Information Technology",
    company: "College of Engineering Roorkee",
    period: "Expected May 2026",
    points: [
      "CGPA 7.8 / 10.",
      "Coursework: DSA, OS, DBMS, Computer Networks, Machine Learning.",
    ],
  },
]

export const SKILLS = [
  { group: "Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "SQL", "C"] },
  { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Three.js", "Streamlit"] },
  { group: "Backend", items: ["FastAPI", "Node.js", "REST APIs", "Microservices", "Firebase"] },
  { group: "AI / ML", items: ["LangChain", "LlamaIndex", "RAG", "TensorFlow", "PyTorch", "OpenAI", "HuggingFace"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Firestore", "FAISS", "ChromaDB", "Pinecone"] },
  { group: "Cloud / DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "CI/CD", "Vercel"] },
]

export const MARQUEE = [
  "Next.js", "FastAPI", "LangChain", "Three.js", "PyTorch", "TypeScript",
  "Docker", "Kubernetes", "PostgreSQL", "RAG", "TensorFlow", "AWS", "GCP", "Redis",
]

export const ACHIEVEMENTS = [
  { icon: "🏆", title: "IIT InnoWave Winner", desc: "Top prize at a national innovation competition at IIT for an AI-powered solution." },
  { icon: "🎯", title: "10+ Hackathon Wins", desc: "National and international competitions — consistently ranked among top solutions." },
  { icon: "📜", title: "2 Patents Filed", desc: "AI and IoT innovations filed and under review at the Indian Patent Office." },
  { icon: "☁️", title: "GCP Arcade Champion", desc: "Top performer in Google Cloud Platform competitive skill challenges." },
  { icon: "🌟", title: "Google Gemini Ambassador", desc: "Selected in the top 0.003% from 30,000+ applicants as Campus Ambassador." },
  { icon: "🔬", title: "IIT Roorkee Research", desc: "AI × Blockchain research — hardware-accelerated cryptography on Xilinx FPGA." },
]

export const EMAIL = "priyanktyagi404@gmail.com"
export const FORMSPREE = "https://formspree.io/f/mjkpjnqp"
