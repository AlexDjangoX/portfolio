import Image from 'next/image';

import { ProcessCardType } from '@/types';
import MotionWrapperCardDiv from '@/HOC/MotionWrapperCardDiv';

const ProcessCard = ({ imageUrl, imageAlt, title, index }: ProcessCardType) => (
  <MotionWrapperCardDiv
    aria-label="Skill animation card"
    direction="up"
    type="spring"
    delay={0.05 * index}
    duration={1.75}
    key={index}
    additionalStyles="mb-4 mr-4 flex flex-col items-center"
  >
    <figure className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[6.25rem] md:w-[6.25rem]">
      <Image
        className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
        src={imageUrl}
        alt={imageAlt}
        width={38}
        height={38}
      />
      <figcaption className="sr-only">{imageAlt}</figcaption>
    </figure>

    <p className="mt-2 text-[0.875rem]  font-medium leading-[145%] text-black-300 dark:text-white-900 md:text-[1.25rem] md:font-semibold md:leading-[130%]">
      {title}
    </p>
  </MotionWrapperCardDiv>
);

export default ProcessCard;
