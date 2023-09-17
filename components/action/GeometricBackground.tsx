import GeometricBackgroundSmall from './GeometricBackgroundSmall';
import GeometricBackgroundLarge from './GeometricBackgroundLarge';

import { itemsSmall, itemsLarge } from '@/utils/constants';
import GeometricBackgrounds from './Background';

const GeometricBackground = () => {
  return (
    <>
      <div className="flex lg:hidden">
        <GeometricBackgrounds items={itemsSmall} />
        {/* <GeometricBackgroundSmall /> */}
      </div>
      <div className="hidden lg:flex">
        <GeometricBackgrounds items={itemsLarge} />
        {/* <GeometricBackgroundLarge /> */}
      </div>
    </>
  );
};

export default GeometricBackground;
