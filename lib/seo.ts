import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { siteConfig } from '@/lib/site';

export function getRequestLanguage() {
  return headers().then((requestHeaders) => {
    const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? '';
    return host.endsWith('.de') ? 'de' : 'en';
  });
}

export async function getRequestBaseUrl() {
  return (await getRequestLanguage()) === 'de' ? siteConfig.domains.de : siteConfig.domains.en;
}

export async function buildPageMetadata(title: string, description: string, path: string): Promise<Metadata> {
  const baseUrl = await getRequestBaseUrl();

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: {
        en: `${siteConfig.domains.en}${path}`,
        de: `${siteConfig.domains.de}${path}`
      }
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: siteConfig.name,
      type: 'website'
    }
  };
}