'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { DataProvider } from '@/context/dataContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <DataProvider>
      <NextUIProvider>
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      </NextUIProvider>
    </DataProvider>
  );
}
