import Image from 'next/image';

import WrapperStudyDetails from '@/HOC/WrapperStudyDetails';
import ProjectDetailsHeading from '../reusable/ProjectDetailsHeading';
import { ProblemStatementType } from '@/types';

const ProjectDetailsProcess = ({ myProcess }: ProblemStatementType) => {
  return (
    <WrapperStudyDetails additionalStyles="bg-white-900 dark:bg-black-200 py-[2.25rem] px-[1.5rem] ">
      <ProjectDetailsHeading
        subHeading="Way of work"
        mainHeading="My Process"
        additionalStylesMainHeading="pb-[1.5rem]"
      />
      <div className="flex flex-wrap justify-between">
        {myProcess.map((process) => (
          <div
            className="mb-4 mr-4 flex flex-col items-center"
            key={process.imageAlt}
          >
            <div className="flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[6.25rem] md:w-[6.25rem]">
              <Image
                className="h-[50px] w-[50px] md:h-[38px] md:w-[38px]"
                src={process.imageUrl}
                alt={process.imageAlt}
                width={38}
                height={38}
              />
            </div>
            <p className="mt-2 text-[0.875rem]  font-medium leading-[145%] text-black-300 dark:text-white-900 md:text-[1.25rem] md:font-semibold md:leading-[130%]">
              {process.title}
            </p>
          </div>
        ))}
      </div>
    </WrapperStudyDetails>
  );
};

export default ProjectDetailsProcess;
