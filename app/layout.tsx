import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { LanguageProvider } from '@/components/language-provider';
import { siteConfig } from '@/lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
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
      en: siteConfig.domains.en,
      de: siteConfig.domains.de
    }
  },
  openGraph: {
    title: 'Backpack Wander GmbH',
    description:
      'Industrial engineering oversight, QA/QC, offshore wind support, and technical documentation for international projects.',
    url: siteConfig.domains.en,
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} bg-background font-sans text-offwhite antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
