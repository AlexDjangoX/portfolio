import React from 'react';
import Image from 'next/image';

import { StudyDetailParams } from '@/types';
import WrapperStudyDetails from '@/HOC/WrapperStudyDetails';
import ProjectDetailsHeading from '@/components/reusable/ProjectDetailsHeading';

const ProjectDetailsTechStack: React.FC<{
  techStack: StudyDetailParams[];
}> = ({ techStack }) => (
  <WrapperStudyDetails additionalStyles="bg-white-900 dark:bg-black-200">
    <ProjectDetailsHeading
      subHeading="Technologies used"
      mainHeading="Tech Stack"
      additionalStylesMainHeading="mb-[1.5rem] md:pb-[2.75rem]"
    />

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
  </WrapperStudyDetails>
);

export default ProjectDetailsTechStack;
