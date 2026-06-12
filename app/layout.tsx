import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

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
    <html lang="en" className="dark">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
