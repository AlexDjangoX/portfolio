import Image from 'next/image';

import DownloadResume from './ResumeDownload';
import ThemeSwitcher from './ThemeSwitcher';
import NavbarRoutes from './NavbarRoutes';
import { DeskTopNavbarType } from '@/types';

const DesktopNavbar = ({
  toggleMobile,
  showMobileNavbar,
  openImgSrc,
  pathname,
}: DeskTopNavbarType) => (
  <nav className="flex items-center justify-around">
    <div className="hidden items-center md:flex">
      <NavbarRoutes pathname={pathname} toggleMobile={toggleMobile} />
    </div>
    <div className="hidden md:flex">
      <DownloadResume />
      <hr className="mx-[2.2rem] hidden h-[1.5rem] w-[1px] bg-white-500 dark:bg-white-500 md:flex" />
      <ThemeSwitcher />
    </div>

    {!showMobileNavbar && (
      <Image
        src={openImgSrc}
        width={30}
        height={30}
        alt="open menu"
        className="mr-6 flex md:mr-24 md:hidden"
        onClick={toggleMobile}
      />
    )}
  </nav>
);

export default DesktopNavbar;
