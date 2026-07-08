import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Priyank Tyagi — Full-Stack & AI Engineer',
  description:
    'Portfolio of Priyank Tyagi — full-stack & AI engineer. Production web apps, LLM agents, RAG pipelines. 10+ hackathon wins, 2 patents filed.',
  generator: 'Next.js',
  openGraph: {
    title: 'Priyank Tyagi — Full-Stack & AI Engineer',
    description: 'Production web apps, LLM agents, and RAG pipelines. Explore projects, experience, and wins.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#09090b',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={jetbrains.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
