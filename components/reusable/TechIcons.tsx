'use client';

import Image from 'next/image';
import { Tooltip } from '@nextui-org/react';

import MotionWrapper from '@/HOC/MotionWrapper';
import { TechIconsType } from '@/types';

const TechIcons = ({
  id,
  imageUrl,
  image,
  altText,
  imageAlt,
  index,
  width = 50,
  height = 50,
}: TechIconsType) => {
  const actualImage = imageUrl || image || '/assets/redux.svg';
  const actualAltText = altText || imageAlt || 'Tech Icons';

  return (
    <MotionWrapper
      aria-label="Icon animation card"
      direction="up"
      type="spring"
      delay={0.05 * index}
      duration={1.75}
      key={id}
      once={false}
    >
      <Tooltip
        className="m-1 rounded-md px-4 py-1 text-[0.6rem] text-white-500 shadow-md dark:text-white-800 md:mb-4 md:text-[0.75rem]"
        content={actualAltText}
      >
        <figure className="flex h-[3.1rem] w-[3.1rem] items-center justify-center rounded-full bg-white-800 transition-transform duration-150 hover:scale-125 dark:bg-black-300 md:h-[6.25rem] md:w-[6.25rem]">
          <div
            key={actualAltText}
            className="h-[1.625rem] w-[1.625rem] cursor-pointer rounded-full md:h-[3.125rem] md:w-[3.125rem]"
          >
            <Image
              src={actualImage}
              alt={actualAltText}
              width={width}
              height={height}
            />
          </div>
          <figcaption className="sr-only">{actualAltText}</figcaption>
        </figure>
      </Tooltip>
    </MotionWrapper>
  );
};

export default TechIcons;
