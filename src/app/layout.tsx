import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import { Header } from '@/components/Header/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Frontend | BU Spark',
  description: 'A frontend for BU Spark GraphQL Tech Talk',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-white')}>
        <Header />
        {children}
      </body>
    </html>
  );
}
