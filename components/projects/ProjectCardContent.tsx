import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { arrow } from '@/public/assets';

type ProjectCardContentProps = {
  heading: string;
  projectName: string;
  technologies: string[];
  buttonBackground: string;
};

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({
  heading,
  projectName,
  technologies,
  buttonBackground,
}) => {
  return (
    <div className="ml-[6.75rem] h-full max-w-[496px]">
      <h2 className="pb-[1.4rem] text-[3rem] font-bold text-white-900">
        {heading}
      </h2>
      <div className="mb-16 flex w-fit gap-x-4 gap-y-2">
        {technologies.map((tech) => (
          <p
            className={`flex items-center justify-center ${buttonBackground} rounded-md p-2`}
            key={tech}
          >
            {tech}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-x-4">
        <Link className="flex items-center" href={`/projects/${projectName}`}>
          See Detail Project
        </Link>
        <Image src={arrow} alt="arrow" width={35} height={0} />
      </div>
    </div>
  );
};

export default ProjectCardContent;
