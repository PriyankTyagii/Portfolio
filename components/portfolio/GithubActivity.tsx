"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { Reveal } from "./ui"
import { GITHUB_USERNAME } from "./data"

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((m) => m.GitHubCalendar),
  {
    ssr: false,
    loading: () => (
      <div className="h-[120px] w-full animate-pulse bg-zinc-100 dark:bg-zinc-800/50 rounded-lg" />
    ),
  }
)

export default function GithubActivity() {
  const { resolvedTheme } = useTheme()

  return (
    <Reveal y={-6}>
      <section
        className="max-w-3xl mx-auto px-6 w-full py-8 md:py-10 flex flex-col gap-6 border-t border-border"
        id="github"
      >
        <h2 className="text-2xl flex flex-col font-bold tracking-tight text-foreground font-heading">
          GitHub Contributions
          <span className="text-zinc-400 dark:text-zinc-500 font-normal text-lg">@{GITHUB_USERNAME}</span>
        </h2>

        <div className="w-full overflow-hidden [&_svg]:w-full [&_svg]:h-auto">
          <GitHubCalendar
            username={GITHUB_USERNAME}
            colorScheme={resolvedTheme === "light" ? "light" : "dark"}
            blockSize={11}
            blockMargin={4}
            blockRadius={3}
            fontSize={12}
          />
        </div>

        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          see everything on github ↗
        </a>
      </section>
    </Reveal>
  )
}
