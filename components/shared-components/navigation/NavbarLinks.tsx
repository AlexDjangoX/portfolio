import Link from 'next/link';

import { NavbarLinkType } from '@/types';

const NavbarLinks = ({
  path,
  label,
  isActive,
  showMobileNavbar,
  toggleMobile,
}: NavbarLinkType) => {
  return (
    <Link href={path}>
      <p
        onClick={() => toggleMobile()}
        className={`mx-5 ${
          showMobileNavbar ? 'mt-6' : ''
        } flex h-full items-center text-[0.875rem] ${
          isActive
            ? 'font-semibold text-primary-light dark:text-primary-dark'
            : ' font-normal text-white-500 dark:text-white-800'
        }`}
      >
        {label}
      </p>
    </Link>
  );
};

export default NavbarLinks;
