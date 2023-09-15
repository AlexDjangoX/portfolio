import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { arrow } from '@/public/assets';

type ProjectCardProps = {
  heading: string;
  projectName: string;
  image: string;
  technologies: string[];
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  heading,
  projectName,
  image,
  technologies,
  index,
}) => {
  const projectBackgrounds: Record<string, string> = {
    morent: 'bg-morent-background',
    jobit: 'bg-jobit-background',
    filmpire: 'bg-filmpire-background',
  };

  const buttonBackgrounds: Record<string, string> = {
    morent: 'bg-morent-button',
    jobit: 'bg-jobit-button',
    filmpire: 'bg-filmpire-button',
  };

  const cardBackground = projectBackgrounds[projectName] || 'bg-white-900';
  const buttonBackground = buttonBackgrounds[projectName] || 'bg-white-900';

  return (
    <div
      className={`w-full max-w-7xl lg:flex lg:items-center lg:justify-center ${cardBackground} rounded-lg p-[2.5rem] px-[1.3rem]`}
    >
      <div className=" lg:ml-[5.4rem] lg:w-1/2">
        <h2 className="mb-[1.5rem] text-[2rem] font-bold leading-[2.3rem] text-white-900  lg:text-[2.8rem] lg:leading-leading3_4rem">
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
      <div className="  lg:w-1/2">
        <Image src={image} alt={heading} width={560} height={590} />
      </div>
    </div>
  );
};

export default ProjectCard;
