import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Priyank Tyagi — Full-Stack & AI Engineer',
  description:
    'Portfolio of Priyank Tyagi — full-stack developer and AI/ML engineer. IIT InnoWave winner, 10+ hackathon wins, 2 patents filed.',
  generator: 'Next.js',
  openGraph: {
    title: 'Priyank Tyagi — Full-Stack & AI Engineer',
    description: 'Building scalable, AI-integrated platforms. Explore projects, experience, and wins.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrains.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
