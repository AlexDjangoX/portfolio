import React from 'react';
import Image from 'next/image';

import WrapperStudyDetails from '@/HOC/WrapperStudyDetails';
import ProjectDetailsHeading from '../reusable/ProjectDetailsHeading';

import { ProjectDetails } from '@/types';

const ProjectDetailsProblemStatement: React.FC<ProjectDetails> = ({
  problemStatement,
  problemStatementImageUrl,
  problemStatementImageAlt,
}) => {
  return (
    <WrapperStudyDetails additionalStyles="bg-white-900 dark:bg-black-200">
      <ProjectDetailsHeading
        subHeading="Problem"
        mainHeading="Problem Statement"
      />
      <p className="py-[1.75rem] text-[1.25rem] leading-[150%] text-white-500 dark:text-white-800 ">
        {problemStatement}
      </p>
      <Image
        className="h-full w-full object-cover"
        src={problemStatementImageUrl}
        width={444}
        height={263}
        alt={problemStatementImageAlt}
      />
    </WrapperStudyDetails>
  );
};

export default ProjectDetailsProblemStatement;
