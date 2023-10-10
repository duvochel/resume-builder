import type { Metadata } from 'next';

import { Inter } from 'next/font/google';

import { Locale } from '@/i18n-config';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resume',
  description: 'build from json',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
