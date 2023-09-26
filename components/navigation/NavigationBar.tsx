'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import useNavigationBar from '@/hooks/useNavigationBar';
import { AlexanderBrand } from '../reusable/AlexanderBrand';

const Navbar = () => {
  const pathname = usePathname();

  const { showMobileNavbar, openImgSrc, closeImgSrc, toggleMobile } =
    useNavigationBar();

  return (
    <nav className="fixed z-50 flex h-16 w-full justify-between bg-white-800 py-[2.2rem] dark:bg-black-200">
      <Link href="/" className="ml-[85px] flex items-center">
        <AlexanderBrand />
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
    </nav>
  );
};

export default Navbar;
