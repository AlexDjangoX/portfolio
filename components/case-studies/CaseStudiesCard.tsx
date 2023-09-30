import Image from 'next/image';

import { CaseStudiesCardType } from '@/types';
import MotionWrapper from '@/HOC/MotionWrapper';

const CaseStudiesCard = ({
  altText,
  projectName,
  heading,
  subHeading,
  image,
  _id,
  index,
}: CaseStudiesCardType) => {
  const projectBackgrounds: Record<string, string> = {
    morrent: 'bg-morrent-background',
    jobit: 'bg-jobit-background',
    portfolio: 'bg-portfolio-background',
  };
  const cardBackground = projectBackgrounds[projectName] || 'bg-white-900';

  return (
    <MotionWrapper
      aria-label="Skill animation card"
      direction="up"
      type="spring"
      delay={0.1 * index}
      translateY="-1.5rem"
      duration={1.75}
      key={_id}
      className="mb-[1.25rem] bg-white-900 dark:bg-black-200 sm:mb-[2.25rem]"
    >
      <div className={`flex rounded-xl  ${cardBackground}`}>
        <div className="mx-[2.25rem] mt-[2.75rem] h-[10.3rem] w-[17.4rem] sm:mt-[4.375rem] sm:h-[16.4rem] sm:w-[27.74rem]">
          <Image src={image} width={444} height={263} alt={altText} />
        </div>
      </div>
      <div className="ml-[1.5rem] mt-[1.2rem]">
        <h3 className="text-[1.25rem] font-semibold leading-[130%] text-black-200 dark:text-white-900 ">
          {heading}
        </h3>
        <p className="mt-[0.375rems] text-[0.88rem] font-normal leading-[155%] text-white-500 ">
          {subHeading}
        </p>
      </div>
    </MotionWrapper>
  );
};

export default CaseStudiesCard;
