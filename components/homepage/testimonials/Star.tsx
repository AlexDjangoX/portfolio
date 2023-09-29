import Image from 'next/image';

import { star } from '@/public/assets';
import { StarComponentType } from '@/types';

const StarComponent = ({ count }: StarComponentType) => (
  <div className="mt-4 flex">
    {Array.from({ length: count }).map((_, index) => (
      <Image key={index} src={star} alt="star" width={20} height={20} />
    ))}
  </div>
);

export default StarComponent;
