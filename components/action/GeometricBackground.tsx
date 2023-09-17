import { itemsLarge, itemsSmall } from '@/utils/constants';
import Background from './Background';

const GeometricBackground = () => {
  return (
    <>
      <div className="flex lg:hidden">
        <Background items={itemsSmall} />
      </div>
      <div className="hidden lg:flex">
        <Background items={itemsLarge} />
      </div>
    </>
  );
};

export default GeometricBackground;
