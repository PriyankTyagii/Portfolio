import type { MetadataRoute } from 'next'
import { execSync } from 'child_process'
import { SITE_URL } from '@/lib/site'

function lastGitCommitDate(path: string): Date {
  try {
    const output = execSync(`git log -1 --format=%cI -- "${path}"`, {
      cwd: process.cwd(),
    })
      .toString()
      .trim()
    return output ? new Date(output) : new Date()
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: lastGitCommitDate('app/page.tsx'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: lastGitCommitDate('app/projects/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
