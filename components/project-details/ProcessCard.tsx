import Image from 'next/image';

import { ProcessCardType } from '@/types';

const ProcessCard = ({ imageUrl, imageAlt, title }: ProcessCardType) => (
  <div className="mb-4 mr-4 flex flex-col items-center">
    <div className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[6.25rem] md:w-[6.25rem]">
      <Image
        className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
        src={imageUrl}
        alt={imageAlt}
        width={38}
        height={38}
      />
    </div>
    <p className="mt-2 text-[0.875rem]  font-medium leading-[145%] text-black-300 dark:text-white-900 md:text-[1.25rem] md:font-semibold md:leading-[130%]">
      {title}
    </p>
  </div>
);

export default ProcessCard;
