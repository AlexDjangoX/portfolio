import React from 'react';
import { getServices } from '@/sanity/sanity.query';

import SkillsCard from './SkillsCard';

type Service = {
  _id: string;
  heading: string;
  content: string;
  whiteImage: string;
  blueImage: string;
};

const Services: React.FC = async () => {
  const services = await getServices();

  return (
    <section className="flex  flex-col items-center justify-center bg-white-800 px-[5.3125rem] py-[4.5rem] dark:bg-black-300">
      <h2 className="mb-[2.5rem]  text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] text-black-200 dark:bg-black-200 dark:text-white-900 md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px]">
        What{' '}
        <div className="relative inline-flex">
          <p className="z-20">service</p>
          <div className="absolute z-10 mt-7 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1rem]" />
        </div>{' '}
        do I provide
      </h2>

      <div className="flex flex-wrap  justify-center gap-x-4 gap-y-[2.5rem] md:justify-around ">
        {services?.map((card: Service) => (
          <SkillsCard
            key={card?._id}
            heading={card?.heading}
            content={card?.content}
            imgSrcWhite={card?.whiteImage}
            imgSrcBlue={card?.blueImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
