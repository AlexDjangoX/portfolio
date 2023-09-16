'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const useThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = mounted
    ? theme === 'system'
      ? systemTheme
      : theme
    : undefined;

  return { currentTheme, setTheme };
};

export default useThemeSwitcher;
