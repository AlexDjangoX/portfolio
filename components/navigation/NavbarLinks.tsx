import Link from 'next/link';

import { NavbarLinkType } from '@/types';

const NavbarLinks = ({
  path,
  label,
  isActive,
  showMobileNavbar,
}: NavbarLinkType) => (
  <Link href={path}>
    <p
      className={`mx-3.5 ${
        showMobileNavbar ? 'mt-6' : ''
      } flex h-full items-center text-[0.875rem] font-normal text-white-500 dark:text-white-800 ${
        isActive && 'font-semibold text-primary-light dark:text-primary-dark'
      }`}
    >
      {label}
    </p>
  </Link>
);

export default NavbarLinks;
