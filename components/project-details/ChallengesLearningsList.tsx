import Image from 'next/image';

import { SectionListType } from '@/types';

const ChallengesLearningsList = ({
  items,
  title,
  iconSrc,
  color,
}: SectionListType) => (
  <div className="mb-[1.9rem] rounded-md bg-white-800 px-[0.8rem] py-[1.5rem] dark:bg-black-300 md:px-[2.5rem] md:py-[2.25rem]">
    <h4
      className={`pb-[1.6rem] text-[1.125rem] font-semibold leading-[160%] ${color}`}
    >
      {title}
    </h4>
    <ul>
      {items.map((item, index) => (
        <li key={index} className="mb-2 flex items-start">
          <Image
            src={iconSrc}
            alt={`${title} icon`}
            width={24}
            height={24}
            className="mr-1.5"
          />
          <span className="pb-[1.5rem] pl-3 text-[0.875rem] font-normal leading-[155%] text-white-500 dark:text-white-800 md:pb-[1.25rem] md:text-[1.125rem] md:leading-[160%]">
            {item}
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default ChallengesLearningsList;
