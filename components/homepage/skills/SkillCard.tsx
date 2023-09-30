'use client';
import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

import { SkillsType } from '@/types';
import MotionWrapper from '@/HOC/MotionWrapper';

const SkillCard = ({ _id, image, altText, index }: SkillsType) => (
  <MotionWrapper
    aria-label="Preview Card"
    direction="up"
    type="spring"
    delay={0.05 * index}
    duration={1.75}
    key={_id}
  >
    <Tooltip
      className="m-1 rounded-md px-4 py-1 text-[0.75rem] text-white-500 shadow-md dark:text-white-800 md:mb-4 "
      content={altText}
    >
      <figure className="flex h-[3.1rem] w-[3.1rem] items-center justify-center rounded-full bg-white-800 transition-transform duration-150 hover:scale-125 dark:bg-black-300  md:h-[6.25rem] md:w-[6.25rem]">
        <div
          key={altText}
          className="h-[1.625rem] w-[1.625rem] cursor-pointer rounded-full md:h-[3.125rem] md:w-[3.125rem]"
        >
          <Image src={image} alt={altText} width={50} height={50} />
        </div>
        <figcaption className="sr-only">{altText}</figcaption>
      </figure>
    </Tooltip>
  </MotionWrapper>
);

export default SkillCard;
