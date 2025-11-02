import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Priyank Portfolio',
  description: 'Created By Priyank Tyagi',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
