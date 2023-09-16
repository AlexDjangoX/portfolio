import GeometricBackgroundSmall from './GeometricBackgroundSmall';
import GeometricBackgroundLarge from './GeometricBackgroundLarge';

const GeometricBackground = () => {
  return (
    <>
      <div className="flex lg:hidden">
        <GeometricBackgroundSmall />
      </div>
      <div className="hidden lg:flex">
        <GeometricBackgroundLarge />
      </div>
    </>
  );
};

export default GeometricBackground;
