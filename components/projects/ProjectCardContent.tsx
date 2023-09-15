import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { arrow } from '@/public/assets';
import { ProjectCardContentProps } from '@/types';

const ProjectCardContent: React.FC<ProjectCardContentProps> = ({
  heading,
  projectName,
  technologies,
  buttonBackground,
}) => {
  return (
    <div className=" lg:ml-[5.4rem] lg:w-1/2">
      <h2 className="mb-[1.5rem] text-[2rem] font-bold leading-[2.3rem] text-white-900  lg:text-[2.8rem] lg:leading-[3.45rem]">
        {heading}
      </h2>
      <div className=" mb-[1.5rem] flex w-fit gap-x-4 gap-y-2">
        {technologies.map((tech) => (
          <p
            className={` ${buttonBackground} rounded-md p-2  font-normal`}
            key={tech}
          >
            {tech}
          </p>
        ))}
      </div>
      <div className="mb-[1.5rem] flex gap-x-4">
        <Link className="  font-semibold" href={`/projects/${projectName} `}>
          See Detail Project
        </Link>
        <Image src={arrow} alt="arrow" width={35} height={0} />
      </div>
    </div>
  );
};

export default ProjectCardContent;
