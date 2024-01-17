import { NavbarRoutesType } from '@/types';
import NavbarLinks from './NavbarLinks';
import { routes } from '@/utils/constants';

const NavbarRoutes = ({
  pathname,
  showMobileNavbar,
  toggleMobile,
}: NavbarRoutesType) => {
  return (
    <>
      {routes?.map((route) => (
        <NavbarLinks
          key={route.label}
          path={route.path}
          label={route.label}
          isActive={pathname === route.path}
          showMobileNavbar={showMobileNavbar}
          toggleMobile={toggleMobile}
        />
      ))}
    </>
  );
};

export default NavbarRoutes;
