import Image from 'next/image';

import { ChallengesItemType } from '@/types';
import MotionWrapper from '@/HOC/MotionWrapper';

const ChallengesItem = ({
  text,
  title,
  iconSrc,
  index,
}: ChallengesItemType) => (
  <MotionWrapper
    aria-label="Tech Skill animation card"
    direction="right"
    type="spring"
    delay={0.1 * index}
    duration={1.75}
    key={index}
  >
    <li className="mb-2 flex items-start">
      <figure className="min-h-[1.5rem] min-w-[1.5rem]">
        <Image
          src={iconSrc}
          alt={`${title} icon`}
          width={24}
          height={24}
          className="mr-1.5 mt-2"
        />
        <figcaption className="sr-only">{title}</figcaption>
      </figure>
      <span className="pb-[1.5rem] pl-3 text-[0.875rem] font-normal leading-[155%] text-white-500 dark:text-white-800 md:pb-[1.25rem] md:text-[1.125rem] md:leading-[160%]">
        {text}
      </span>
    </li>
  </MotionWrapper>
);

export default ChallengesItem;
