'use client';

import Image from 'next/image';

import { sun, moon } from '@/public/assets/index';
import useThemeSwitcher from '@/hooks/useThemeSwitcher';

const ThemeSwitcher = () => {
  const { currentTheme, setTheme } = useThemeSwitcher();

  if (!currentTheme) return null;

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
