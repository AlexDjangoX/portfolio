import Image from 'next/image';

import { DetailsImageType } from '@/types';

const DetailsImage = ({ imageUrl, imageAlt }: DetailsImageType) => (
  <div className=" flex items-center justify-center bg-white-800 pb-[1.5rem] dark:bg-black-300  ">
    <Image src={imageUrl} width={720} height={347} alt={imageAlt} />
  </div>
);

export default DetailsImage;
