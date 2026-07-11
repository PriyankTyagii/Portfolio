"use client"

import { useRef, useState } from "react"
import { useTheme } from "next-themes"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { Home, Github, Linkedin, Mail, FileText, Sun, Moon } from "lucide-react"
import { EMAIL } from "./data"

const XIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const ITEMS = [
  { label: "Home", href: "#hero", icon: <Home size={18} /> },
  { label: "GitHub", href: "https://github.com/PriyankTyagii", icon: <Github size={18} />, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/priyank-tyagi-3a3a10259/", icon: <Linkedin size={18} />, external: true },
  { label: "X / Twitter", href: "https://x.com/PriyankTya22652", icon: <XIcon />, external: true },
  { label: "Email", href: `mailto:${EMAIL}`, icon: <Mail size={18} /> },
  { label: "Resume", href: "/resume.pdf", icon: <FileText size={18} />, external: true },
]

function useMagnify(mouseX: MotionValue<number>, ref: React.RefObject<HTMLElement>) {
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return Infinity
    return val - (bounds.left + bounds.width / 2)
  })
  const sizeSync = useTransform(distance, [-120, 0, 120], [36, 52, 36])
  return useSpring(sizeSync, { mass: 0.1, stiffness: 250, damping: 16 })
}

const dockItemClass =
  "dock-item aspect-square rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-accent transition-colors relative cursor-pointer border-0 bg-transparent p-0"

function DockLink({
  mouseX,
  children,
  ...rest
}: {
  mouseX: MotionValue<number>
  children: React.ReactNode
} & React.ComponentProps<typeof motion.a>) {
  const ref = useRef<HTMLAnchorElement>(null)
  const size = useMagnify(mouseX, ref as React.RefObject<HTMLElement>)

  return (
    <motion.a ref={ref} style={{ width: size, height: size }} className={dockItemClass} {...rest}>
      {children}
    </motion.a>
  )
}

function DockButton({
  mouseX,
  children,
  ...rest
}: {
  mouseX: MotionValue<number>
  children: React.ReactNode
} & React.ComponentProps<typeof motion.button>) {
  const ref = useRef<HTMLButtonElement>(null)
  const size = useMagnify(mouseX, ref as React.RefObject<HTMLElement>)

  return (
    <motion.button ref={ref} style={{ width: size, height: size }} className={dockItemClass} {...rest}>
      {children}
    </motion.button>
  )
}

export default function Dock() {
  const mouseX = useMotionValue(Infinity)
  const { resolvedTheme, setTheme } = useTheme()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        aria-label="Quick links"
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.21, 0.65, 0.25, 1] }}
        className="pointer-events-auto flex h-[58px] w-max items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-border bg-white/70 dark:bg-zinc-900/70 px-2.5 sm:px-4 shadow-lg backdrop-blur-md"
      >
        {ITEMS.map((item) => (
          <span key={item.label} className="relative flex items-center justify-center">
            <DockLink
              mouseX={mouseX}
              href={item.href}
              aria-label={item.label}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              onHoverStart={() => setHovered(item.label)}
              onHoverEnd={() => setHovered((l) => (l === item.label ? null : l))}
            >
              {item.icon}
            </DockLink>
            {hovered === item.label && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-card-foreground shadow-sm"
              >
                {item.label}
              </motion.span>
            )}
          </span>
        ))}

        <span className="mx-1 h-6 w-px bg-border" aria-hidden />

        <span className="relative flex items-center justify-center">
          <DockButton
            mouseX={mouseX}
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            onHoverStart={() => setHovered("Toggle theme")}
            onHoverEnd={() => setHovered((l) => (l === "Toggle theme" ? null : l))}
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </DockButton>
          {hovered === "Toggle theme" && (
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-border bg-card px-2 py-1 text-xs font-medium text-card-foreground shadow-sm"
            >
              Toggle theme
            </motion.span>
          )}
        </span>
      </motion.nav>
    </div>
  )
}
