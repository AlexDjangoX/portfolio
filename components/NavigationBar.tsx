'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

import ThemeSwitcher from './ThemeSwitcher';
import { close, open, openWhite, closeWhite } from '../public/assets/index';
import { logo } from '@/public/assets-png';

import DownloadResume from './Download';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/contact', label: 'Contacts' },
];

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
        <MobileNavigation
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

type MobileNavigationProps = {
  toggleMobile: () => void;
  showMobileNavbar: boolean;
  closeImgSrc: string;
  pathname: string;
};

type DeskTopNavbarProps = Omit<MobileNavigationProps, 'closeImgSrc'> & {
  openImgSrc: string;
};

type NavigationRoutesProps = {
  pathname: string;
  showMobileNavbar: boolean;
};

const NavigationRoutes: React.FC<NavigationRoutesProps> = ({
  pathname,
  showMobileNavbar,
}) => {
  return (
    <>
      {routes.map((route) => (
        <Link href={route.path} key={route.label}>
          <p
            className={`mx-3.5 ${
              showMobileNavbar ? 'mt-6' : ''
            }  flex h-full items-center text-[0.875rem] font-normal text-white-500 dark:text-white-800 ${
              pathname === route.path &&
              'font-semibold text-[#0252CD] dark:text-[#428DFF]'
            }`}
          >
            {route.label}
          </p>
        </Link>
      ))}
    </>
  );
};

const DesktopNavbar: React.FC<DeskTopNavbarProps> = ({
  toggleMobile,
  showMobileNavbar,
  openImgSrc,
  pathname,
}) => {
  return (
    <div className="flex items-center justify-around">
      <div className="hidden items-center md:flex">
        <NavigationRoutes
          pathname={pathname}
          showMobileNavbar={showMobileNavbar}
        />
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

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  toggleMobile,
  showMobileNavbar,
  closeImgSrc,
  pathname,
}) => {
  return (
    <div className="fixed right-0 z-30  flex h-full w-2/4 items-center dark:bg-black-200 md:hidden">
      <Image
        src={closeImgSrc}
        width={30}
        height={30}
        alt="logo"
        className="absolute right-9 top-9 cursor-pointer md:hidden"
        onClick={toggleMobile}
      />
      <div className="mb-20 flex w-full flex-col p-8">
        <NavigationRoutes
          pathname={pathname}
          showMobileNavbar={showMobileNavbar}
        />
        <div className="ml-2.5 mt-6">
          <DownloadResume />
        </div>
        <div className="ml-3 mt-6 flex justify-start">
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
