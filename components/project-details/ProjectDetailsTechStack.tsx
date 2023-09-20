import React from 'react';
import Image from 'next/image';

import { StudyDetailParams } from '@/types';

const ProjectDetailsTechStack: React.FC<{ techStack: StudyDetailParams[] }> = ({
  techStack,
}) => (
  <div className="flex w-full flex-col items-center justify-center  bg-white-900 px-[1.5rem] py-[2.625rem] dark:bg-black-200 md:px-[5rem] ">
    <div className="w-full max-w-3xl">
      <p className="pb-[0.625rem] text-[0.75rem] font-semibold leading-[145%] text-primary-light dark:text-primary-dark md:text-[0.875rem]  ">
        Technologies used
      </p>
      <h4 className="mb-[1.5rem] font-semibold dark:text-white-900 md:pb-[2.75rem] md:text-[2rem] md:leading-[105%] md:tracking-[-0.16px] ">
        Tech Stack
      </h4>
      <div className=" flex max-w-[45rem] flex-wrap justify-between ">
        {techStack.map((skill) => (
          <div
            key={skill?._id}
            className="relative  flex h-[3.2rem] w-[3.2rem] items-center justify-center   rounded-full bg-white-800 dark:bg-black-300 md:h-[5.8rem] md:w-[5.8rem] "
          >
            <Image
              className=" h-[1.6rem] w-[1.6rem] md:h-[2.9rem] md:w-[2.9rem]"
              src={skill?.imageUrl}
              alt={skill?.imageAlt}
              width={47}
              height={47}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectDetailsTechStack;
