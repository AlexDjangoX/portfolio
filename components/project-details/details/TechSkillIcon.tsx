import Image from 'next/image';

import { TechSkillIconType } from '@/types';

const TechSkillIcon = ({ imageUrl, imageAlt, id }: TechSkillIconType) => (
  <div
    key={id}
    className="relative  flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[5.8rem] md:w-[5.8rem]"
  >
    <Image
      className="h-[1.6rem] w-[1.6rem] md:h-[2.9rem] md:w-[2.9rem]"
      src={imageUrl}
      alt={imageAlt}
      width={47}
      height={47}
    />
  </div>
);

export default TechSkillIcon;
