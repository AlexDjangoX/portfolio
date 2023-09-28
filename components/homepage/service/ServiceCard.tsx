import Image from 'next/image';

import { CardPropType } from '@/types';
import MotionWrapperCardDiv from '@/HOC/MotionWrapperCardDiv';

const SkillsCard = ({
  imgSrcWhite,
  imgSrcBlue,
  blueImagePrimaryDark,
  heading,
  content,
  index,
  _id,
}: CardPropType) => {
  return (
    <MotionWrapperCardDiv
      aria-label="Skill animation card"
      direction="up"
      type="spring"
      delay={0.05 * index}
      translateY="1.5rem"
      duration={1.75}
      key={_id}
      additionalStyles="group relative h-[16.5625rem] w-[18.125rem] rounded-md bg-white-900 p-4 pb-3 shadow-cardShadowSmall transition duration-300 hover:translate-y-[1.2rem] hover:bg-primary-light hover:shadow-cardShadowLarge hover:shadow-black/30  dark:bg-black-200  dark:shadow-cardShadowSmall  dark:hover:bg-primary-dark hover:dark:shadow-cardShadowLarge"
    >
      <div className="absolute left-[1.5625rem] top-[1.875rem] flex h-[3.875rem] w-[3.875rem] items-center justify-center rounded-lg bg-primary-light transition-colors duration-300 group-hover:bg-white dark:bg-primary-dark">
        <Image
          src={imgSrcWhite || '/assets/redux.svg'}
          alt={heading}
          width="20"
          height="20"
          className="object-cover group-hover:hidden"
        />
        <Image
          src={imgSrcBlue || '/assets/redux.svg'}
          alt={heading}
          width="20"
          height="20"
          className="hidden object-cover group-hover:block dark:group-hover:hidden"
        />
        <Image
          src={blueImagePrimaryDark || '/assets/redux.svg'}
          alt={heading}
          width="20"
          height="20"
          className="hidden  object-cover dark:group-hover:block"
        />
      </div>
      <h2 className="mt-[5.75rem] text-[1.5rem] font-semibold leading-[1.9rem] text-black-200 transition-colors duration-300 group-hover:text-white-900 dark:text-white-900">
        {heading}
      </h2>
      <p className="mt-2 text-[0.875rem] leading-[1.375rem] text-white-500 transition-colors duration-300 group-hover:text-white-900 dark:text-white-800">
        {content}
      </p>
    </MotionWrapperCardDiv>
  );
};

export default SkillsCard;
