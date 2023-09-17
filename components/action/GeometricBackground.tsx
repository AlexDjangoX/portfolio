import {
  elipse118,
  elipse117,
  rectangle4439,
  elipse119,
  Rectangle4401,
} from '@/public/assets';

import Background from './Background';
import { GeometricItem } from '@/types';

const itemsSmall: GeometricItem[] = [
  {
    src: elipse118,
    alt: 'elipse118',
    width: 345,
    height: 60,
    position: 'left-0 top-0',
  },
  {
    src: elipse117,
    alt: 'elipse118',
    width: 204,
    height: 450,
    position: 'bottom-0 right-[58px]',
  },
  {
    src: rectangle4439,
    alt: 'rectangle4439',
    width: 204,
    height: 450,
    position: 'left-[285px] top-[150px]',
  },
  {
    src: elipse119,
    alt: 'elipse119',
    width: 204,
    height: 450,
    position: 'left-[-100px] top-[-20px]',
  },
  {
    src: Rectangle4401,
    alt: 'Rectangle4401a',
    width: 204,
    height: 450,
    position: 'left-[285px] top-[150px]',
  },
  {
    src: Rectangle4401,
    alt: 'Rectangle4401b',
    width: 190,
    height: 182,
    position: 'left-[85px] top-[30px]',
  },
];

const itemsLarge: GeometricItem[] = [
  {
    src: elipse118,
    alt: 'elipse118',
    width: 345,
    height: 60,
    position: 'left-0 top-0',
  },
  {
    src: elipse117,
    alt: 'elipse118',
    width: 204,
    height: 450,
    position: 'top-0 right-[58px]',
  },
  {
    src: rectangle4439,
    alt: 'rectangle4439',
    width: 204,
    height: 450,
    position: 'left-[25px] top-[150px]',
  },
  {
    src: elipse119,
    alt: 'elipse119',
    width: 204,
    height: 450,
    position: 'left-[-100px] top-[-20px]',
  },
  {
    src: Rectangle4401,
    alt: 'Rectangle4401a',
    width: 204,
    height: 450,
    position: 'right-[85px] top-[150px]',
  },
  {
    src: Rectangle4401,
    alt: 'Rectangle4401b',
    width: 190,
    height: 182,
    position: 'left-[285px] bottom-[30px]',
  },
];

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
