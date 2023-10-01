'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useSpring } from 'framer-motion';

import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import useNavigationBar from '@/hooks/useNavigationBar';
import { AlexanderBrand } from '../../reusable/AlexanderBrand';

const NavigationBar = () => {
  const pathname = usePathname();

  const { showMobileNavbar, openImgSrc, closeImgSrc, toggleMobile } =
    useNavigationBar();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-[4.1rem] z-50  h-0.5 origin-top-left bg-primary-light pt-1 dark:bg-primary-dark"
        style={{ scaleX }}
      />
      <nav className="fixed z-40 flex h-16 w-full justify-between bg-white-800 py-[2.2rem] dark:bg-black-200">
        <Link
          href="/"
          className="ml-[1.5rem] flex items-center md:ml-[5.313rem]"
        >
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
    </>
  );
};

export default NavigationBar;
