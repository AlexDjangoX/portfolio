import React from 'react';
import Image from 'next/image';

import { GeometricBackgroundProps } from '@/types';

const GeometricBackgrounds: React.FC<GeometricBackgroundProps> = ({
  items,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className={`absolute z-10 ${item.position}`}>
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
          />
        </div>
      ))}
    </>
  );
};

export default GeometricBackgrounds;
