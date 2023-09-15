'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { arrowLeft, arrowLeftWhite } from '@/public/assets';
import Image from 'next/image';

const ArrowLeft = () => {
  const { theme } = useTheme();
  const [state, setState] = useState({
    showMobileNavbar: false,
    currentTheme: theme,
    hydrated: false,
  });

  const { currentTheme, hydrated } = state;

  const arrowLeftSource =
    hydrated && currentTheme === 'dark' ? arrowLeftWhite : arrowLeft;

  useEffect(() => {
    setState((prev) => ({ ...prev, currentTheme: theme }));
  }, [theme]);

  useEffect(() => {
    setState((prev) => ({ ...prev, hydrated: true }));
  }, []);

  return (
    <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-white-900 dark:bg-black-200">
      <Image
        className="rounded-md"
        src={arrowLeftSource}
        alt="arrow-left"
        height={20}
        width={20}
      />
    </div>
  );
};

export default ArrowLeft;
