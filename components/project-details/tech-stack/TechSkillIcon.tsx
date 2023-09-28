import Image from 'next/image';

import { TechSkillIconType } from '@/types';
import MotionWrapper from '@/HOC/MotionWrapper';

const TechSkillIcon = ({
  imageUrl,
  imageAlt,
  id,
  index,
}: TechSkillIconType) => (
  <MotionWrapper
    aria-label="Tech Skill animation card"
    direction="up"
    type="spring"
    delay={0.05 * index}
    duration={1.75}
    key={id}
  >
    <figure className="relative  flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[5.8rem] md:w-[5.8rem]">
      <Image
        className="h-[1.6rem] w-[1.6rem] md:h-[2.9rem] md:w-[2.9rem]"
        src={imageUrl}
        alt={imageAlt}
        width={47}
        height={47}
      />{' '}
      <figcaption className="sr-only">{imageAlt}</figcaption>
    </figure>
  </MotionWrapper>
);

export default TechSkillIcon;
