import Image from 'next/image';

import { PreviewCardType } from '@/types';
import Link from 'next/link';

const PreviewCard = ({
  otherCaseStudyHeading,
  otherCaseStudyDescription,
  otherCaseStudyImageUrl,
  otherCaseStudyImageAlt,
}: PreviewCardType) => (
  <div className="cardBoxShadowHover  m-4 w-[21.5rem] gap-x-7 rounded-2xl p-4 shadow-xl md:mb-6 md:w-[429px]">
    <div className="relative  rounded-lg">
      <Image
        src={otherCaseStudyImageUrl ?? '/assets-png/error.png'}
        alt={otherCaseStudyImageAlt}
        width={345}
        height={163}
        className="rounded-lg "
      />
    </div>
    <h4 className="mt-[1.25rem] font-semibold text-primary-light  dark:text-primary-dark">
      {otherCaseStudyHeading}
    </h4>
    <p className="min-h-[9.5rem] text-[0.875rem] leading-[1.875rem] text-white-500 dark:text-white-800 md:leading-[1.8rem] ">
      {otherCaseStudyDescription}
    </p>
    <button className="mt-[1rem] w-full min-w-[8rem] rounded-full bg-primary-light p-2 px-4 text-center text-[0.875rem] font-semibold leading-[1.625rem] text-white-900 dark:bg-primary-dark md:mb-4 md:text-[1.125rem]">
      <div className="flex items-center justify-center">
        <Link
          key={otherCaseStudyImageAlt}
          href={`/case-studies/${otherCaseStudyImageAlt}`}
        >
          <p className="mr-4">See Case Study</p>
        </Link>
      </div>
    </button>
  </div>
);

export default PreviewCard;
