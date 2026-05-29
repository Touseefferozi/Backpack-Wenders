import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import { getLocaleFromHost, isLocale } from '@/lib/routing';
import { headers } from 'next/headers';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domains.en),
  title: {
    default: 'Backpack Wander GmbH | Industrial Engineering Oversight',
    template: '%s | Backpack Wander GmbH'
  },
  description:
    'Backpack Wander GmbH provides industrial engineering support, QA/QC oversight, offshore wind expertise, documentation control, and technical coordination for global projects.',
  alternates: {
    languages: {
      en: `${siteConfig.domains.en}/en`,
      de: `${siteConfig.domains.de}/de`
    }
  },
  openGraph: {
    title: 'Backpack Wander GmbH',
    description:
      'Industrial engineering oversight, QA/QC, offshore wind support, and technical documentation for international projects.',
    url: `${siteConfig.domains.en}/en`,
    siteName: 'Backpack Wander GmbH',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backpack Wander GmbH',
    description:
      'Industrial engineering oversight, QA/QC, offshore wind support, and technical documentation for international projects.'
  }
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get('x-locale');
  const hostLocale = getLocaleFromHost(requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host') ?? '');
  const locale = isLocale(headerLocale) ? headerLocale : hostLocale;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${manrope.variable} bg-background font-sans text-offwhite antialiased`}>
        {children}
      </body>
    </html>
  );
}
