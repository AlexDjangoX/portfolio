'use client';

import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';

import { close, open, openWhite, closeWhite } from '@/public/assets/index';

const useNavigationBar = () => {
  const { theme } = useTheme();

  const [state, setState] = useState({
    showMobileNavbar: false,
    currentTheme: theme,
    hydrated: false,
  });

  const { showMobileNavbar, currentTheme, hydrated } = state;

  const openImgSrc = hydrated && currentTheme === 'dark' ? openWhite : open;
  const closeImgSrc = hydrated && currentTheme === 'dark' ? closeWhite : close;

  useEffect(() => {
    setState((prev) => ({ ...prev, currentTheme: theme }));
  }, [theme]);

  useEffect(() => {
    setState((prev) => ({ ...prev, hydrated: true }));
  }, []);

  const toggleMobile = () => {
    setState((prev) => ({ ...prev, showMobileNavbar: !prev.showMobileNavbar }));
  };

  return {
    showMobileNavbar,
    openImgSrc,
    closeImgSrc,
    toggleMobile,
  };
};

export default useNavigationBar;
