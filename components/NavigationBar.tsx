'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import { close, open, openWhite, closeWhite } from '@/public/assets/index';
import { logo } from '@/public/assets-png';
import DesktopNavbar from './navigation/DesktopNavbar';
import MobileNavbar from './navigation/MobileNavbar';

const Navbar: React.FC = () => {
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const { theme } = useTheme();
  const openImgSrc = theme === 'dark' ? openWhite : open;
  const closeImgSrc = theme === 'dark' ? closeWhite : close;
  const pathname = usePathname();

  const toggleMobile = () => {
    setShowMobileNavbar(!showMobileNavbar);
  };

  return (
    <div className="fixed z-50 flex h-16 w-full justify-between bg-white-800 py-[2.2rem] dark:bg-black-200">
      <Link
        href={{
          pathname: '/',
        }}
        className="ml-[85px] flex items-center"
      >
        <div className="flex items-center">
          <Image
            src={logo}
            width={30}
            height={30}
            alt="logo"
            className="md:h-[45px] md:w-[45px]"
          />
        </div>
      </Link>
      <DesktopNavbar
        showMobileNavbar={showMobileNavbar}
        openImgSrc={openImgSrc}
        pathname={pathname}
        toggleMobile={toggleMobile}
      />

      {showMobileNavbar && (
        <MobileNavbar
          showMobileNavbar={showMobileNavbar}
          closeImgSrc={closeImgSrc}
          pathname={pathname}
          toggleMobile={toggleMobile}
        />
      )}
    </div>
  );
};

export default Navbar;
