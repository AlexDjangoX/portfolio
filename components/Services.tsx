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
    <section className="bg-white-800 px-[5.3125rem] py-[4.5rem] dark:bg-black-300">
      <h2 className="mb-[2.5rem] flex justify-center text-4xlplus font-bold leading-tightplus tracking-tightplus text-black-200 dark:bg-black-300 dark:text-white-900">
        What{' '}
        <div>
          <span className="custom-underline z-10 mx-4">service</span>
        </div>{' '}
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
