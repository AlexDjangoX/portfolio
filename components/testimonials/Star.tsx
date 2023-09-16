import React from 'react';
import Image from 'next/image';

import { star } from '@/public/assets';
import { StarComponentProps } from '@/types';

const StarComponent: React.FC<StarComponentProps> = ({ count }) => {
  return (
    <div className="mt-4 flex">
      {Array.from({ length: count }).map((_, index) => (
        <Image key={index} src={star} alt="star" width={20} height={20} />
      ))}
    </div>
  );
};

export default StarComponent;
