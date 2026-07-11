import type { MetadataRoute } from 'next'

const baseUrl = 'https://portfolio-priyank-tyagi.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
