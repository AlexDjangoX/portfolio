import Image from 'next/image';

import { ChallengesLearningsItemType } from '@/types';

const ChallengesLearningsItem = ({
  text,
  title,
  iconSrc,
}: ChallengesLearningsItemType) => (
  <li className="mb-2 flex items-start">
    <Image
      src={iconSrc}
      alt={`${title} icon`}
      width={24}
      height={24}
      className="mr-1.5"
    />
    <span className="pb-[1.5rem] pl-3 text-[0.875rem] font-normal leading-[155%] text-white-500 dark:text-white-800 md:pb-[1.25rem] md:text-[1.125rem] md:leading-[160%]">
      {text}
    </span>
  </li>
);

export default ChallengesLearningsItem;
