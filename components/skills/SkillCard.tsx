import Image from 'next/image';

import { SkillsType } from '@/types';
import MotionWrapperCardDiv from '../../HOC/MotionWrapperCardDiv';

const SkillCard = ({ _id, image, altText, index }: SkillsType) => (
  <MotionWrapperCardDiv
    aria-label="Skill animation card"
    direction="up"
    type="spring"
    delay={0.05 * index}
    duration={1.75}
  >
    <figure className="flex h-[3.1rem] w-[3.1rem] items-center justify-center  rounded-full bg-white-800 transition-transform duration-150 hover:scale-125 dark:bg-black-300  md:h-[6.25rem] md:w-[6.25rem]">
      <div className="h-[1.625rem] w-[1.625rem] rounded-full md:h-[3.125rem]  md:w-[3.125rem]">
        <Image src={image} alt={altText} width={50} height={50} />
      </div>
      <figcaption className="sr-only">{altText}</figcaption>
    </figure>
  </MotionWrapperCardDiv>
);

export default SkillCard;
