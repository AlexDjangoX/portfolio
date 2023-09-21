import { NavbarRoutesType } from '@/types';
import NavbarLinks from './NavbarLinks';
import { routes } from '@/utils/constants';

const NavbarRoutes = ({ pathname, showMobileNavbar }: NavbarRoutesType) => {
  return (
    <>
      {routes?.map((route) => (
        <NavbarLinks
          key={route.label}
          path={route.path}
          label={route.label}
          isActive={pathname === route.path}
          showMobileNavbar={showMobileNavbar}
        />
      ))}
    </>
  );
};

export default NavbarRoutes;
