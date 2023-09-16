import React from 'react';
import Image from 'next/image';

import DownloadResume from './Download';
import ThemeSwitcher from './ThemeSwitcher';
import NavbarRoutes from './NavbarRoutes';
import { DeskTopNavbarProps } from '@/types';

const DesktopNavbar: React.FC<DeskTopNavbarProps> = ({
  toggleMobile,
  showMobileNavbar,
  openImgSrc,
  pathname,
}) => {
  return (
    <div className="flex items-center justify-around">
      <div className="hidden items-center md:flex">
        <NavbarRoutes pathname={pathname} showMobileNavbar={showMobileNavbar} />
      </div>
      <div className="hidden md:flex">
        <DownloadResume />
        <div className="mx-[2.2rem] hidden h-[1.5rem] w-[1px] bg-white-500 dark:bg-white-500 md:flex" />
        <ThemeSwitcher />
      </div>

      {!showMobileNavbar && (
        <Image
          src={openImgSrc}
          width={30}
          height={30}
          alt="logo"
          className="mr-24 flex md:hidden"
          onClick={toggleMobile}
        />
      )}
    </div>
  );
};

export default DesktopNavbar;
