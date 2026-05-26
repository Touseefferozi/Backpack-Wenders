import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getLocalizedUrl } from '@/lib/routing';

const localizedPaths = ['/', '/about', '/industries', '/deployment-model', '/contact'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = localizedPaths.flatMap((path) => [
    {
      url: getLocalizedUrl('en', path),
      lastModified: new Date(),
      changeFrequency: (path === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: path === '/' ? 1 : 0.7
    },
    {
      url: getLocalizedUrl('de', path),
      lastModified: new Date(),
      changeFrequency: (path === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: path === '/' ? 1 : 0.7
    }
  ]);

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    ...entries
  ];
}
