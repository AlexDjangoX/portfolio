import Image from 'next/image';
import Link from 'next/link';

import { WorkCardType } from '@/types';
import MotionWrapperCardDiv from '../reusable/MotionWrapperCardDiv';
import { LinkIcon } from '../reusable/LinkIcon';

const WorkCard = ({
  title,
  subtitle,
  description,
  imgSrc,
  index,
  certified,
  certificateLink,
  _id,
}: WorkCardType) => {
  return (
    <MotionWrapperCardDiv
      direction="right"
      type="spring"
      delay={0.05 * index}
      duration={1.75}
      additionalStyles="flex flex-col items-start  rounded-md bg-white-800 transition-transform duration-300 hover:translate-x-[2rem] hover:bg-white-900 dark:bg-black-200 dark:hover:bg-black-300"
    >
      <div className="flex items-center justify-start">
        <figure>
          <Image
            className="m-[1.5rem]"
            src={imgSrc}
            alt="Work Card Image"
            width={58}
            height={58}
          />
          <figcaption className="sr-only">{title}</figcaption>
        </figure>
        <h3 className="font-semibold leading-[130%] text-black-200 dark:text-white-900 md:text-[1.5rem]">
          {title}
        </h3>
        <p className="ml-4 dark:text-white-800">{subtitle}</p>
      </div>
      <p className="ml-[1.5rem] font-normal leading-[155%] text-white-500 dark:text-white-900  md:text-[0.875rem]">
        {description}
      </p>
      {certificateLink && (
        <Link
          target="_blank"
          className="m-1 ml-[1.5rem] inline-flex items-center rounded-lg bg-white-900 px-2 py-1 text-[0.875rem] font-thin leading-[2rem] text-primary-light dark:bg-black-300 dark:text-primary-dark md:text-[1.125rem]"
          href={certificateLink}
        >
          <LinkIcon /> Certificate
        </Link>
      )}
    </MotionWrapperCardDiv>
  );
};

export default WorkCard;
