'use client';

import ProjectCardContent from './ProjectCardContent';
import ProjectCardImage from './ProjectCardImage';
import { ProjectCardType } from '@/types';

const ProjectCard = ({
  heading,
  projectName,
  image,
  technologies,
  index,
}: ProjectCardType) => {
  const projectBackgrounds: Record<string, string> = {
    morrent: 'bg-morrent-background',
    jobit: 'bg-jobit-background',
    portfolio: 'bg-portfolio-background',
    hipnode: 'bg-hipnode-background',
  };

  const buttonBackgrounds: Record<string, string> = {
    morrent: 'bg-morrent-button',
    jobit: 'bg-jobit-button',
    portfolio: 'bg-portfolio-button',
    hipnode: 'bg-hipnode-button',
  };
  const isOdd = index % 2 !== 0;

  const cardBackground = projectBackgrounds[projectName] || 'bg-white-900';
  const buttonBackground = buttonBackgrounds[projectName] || 'bg-white-900';

  return (
    <div>
      <section
        className={`w-full max-w-7xl  lg:flex lg:items-center lg:justify-center ${cardBackground} rounded-lg p-[2.5rem] px-[1.3rem] ${
          isOdd && 'flex-row-reverse'
        } `}
      >
        <ProjectCardContent
          heading={heading}
          projectName={projectName}
          technologies={technologies}
          buttonBackground={buttonBackground}
        />
        <ProjectCardImage image={image} heading={heading} />
      </section>
    </div>
  );
};

export default ProjectCard;
