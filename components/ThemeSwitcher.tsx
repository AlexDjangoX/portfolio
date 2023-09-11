'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { sun, moon } from '../public/assets/index';

const ThemeSwitcher = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div
      className="mr-[85px]  flex cursor-pointer justify-center"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      <Image
        src={currentTheme === 'light' ? sun : moon}
        alt={currentTheme === 'light' ? 'alt-sun' : 'alt-moon'}
        height={20}
        width={20}
      />
    </div>
  );
};

export default ThemeSwitcher;
