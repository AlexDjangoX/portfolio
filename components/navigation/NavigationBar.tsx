'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { logo } from '@/public/assets-png';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import useNavigationBar from '@/hooks/useNavigationBar';

const Navbar = () => {
  const pathname = usePathname();

  const { showMobileNavbar, openImgSrc, closeImgSrc, toggleMobile } =
    useNavigationBar();

  return (
    <div className="fixed z-50 flex h-16 w-full justify-between bg-white-800 py-[2.2rem] dark:bg-black-200">
      <Link href="/" className="ml-[85px] flex items-center">
        <Image
          src={logo}
          width={30}
          height={30}
          alt="logo"
          className="md:h-[45px] md:w-[45px]"
        />
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
