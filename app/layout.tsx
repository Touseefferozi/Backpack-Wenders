import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { LanguageProvider } from '@/components/language-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });

export const metadata: Metadata = {
  metadataBase: new URL('https://backpackwander.com'),
  title: {
    default: 'Backpack Wander GmbH',
    template: '%s | Backpack Wander GmbH'
  },
  description:
    'Premium industrial technical support and digital delivery for heavy industry projects worldwide.',
  openGraph: {
    title: 'Backpack Wander GmbH',
    description:
      'Industrial technical staffing, inspection support, and digital delivery for heavy industry projects worldwide.',
    url: 'https://backpackwander.com',
    siteName: 'Backpack Wander GmbH',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backpack Wander GmbH',
    description:
      'Industrial technical staffing, inspection support, and digital delivery for heavy industry projects worldwide.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} bg-background font-sans text-white antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
