import React from 'react';
import Link from 'next/link';

import { NavbarRoutesProps } from '@/types';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/contact', label: 'Contacts' },
];

const NavbarRoutes: React.FC<NavbarRoutesProps> = ({
  pathname,
  showMobileNavbar,
}) => {
  return (
    <>
      {routes?.map((route) => (
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

export default NavbarRoutes;
