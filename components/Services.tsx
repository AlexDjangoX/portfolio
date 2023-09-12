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
    <section className="bg-white-800 dark:bg-black-300 flex flex-col items-center justify-center px-[5.3125rem] py-[4.5rem]">
      <h2 className="leading-lineHeight_64 tracking-letterSpacing_64 text-black-200 dark:bg-black-300 dark:text-white-900 mb-[2.5rem] mr-6 flex flex-wrap justify-center text-[2.25rem] font-bold md:text-[3rem]">
        What
        <div className="mx-2">
          <span className="custom-underline z-10">service</span>
        </div>
        do I provide?
      </h2>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-[2.5rem]">
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
