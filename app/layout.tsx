import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import { siteConfig } from '@/lib/site';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['400'] });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', weight: ['600'] });

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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${montserrat.variable} bg-background font-sans text-offwhite antialiased`}>
        {children}
      </body>
    </html>
  );
}
