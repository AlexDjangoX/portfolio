'use client';

import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { Providers } from './providers';
import NavigationBar from '@/components/NavigationBar';

const poppins = Poppins({ weight: ['400', '600'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Alexander',
  description: 'Portfolio - Alexander Mc Lachlan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white-800 dark:bg-black-200">
      <body className={poppins.className}>
        <Providers>
          <NavigationBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
