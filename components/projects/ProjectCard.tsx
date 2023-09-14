import React from 'react';

import ProjectCardContent from './ProjectCardContent';
import ProjectCardImage from './ProjectCardImage';

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
  const isEven = (index + 1) % 2 === 0;

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
      className={`flex h-[27.75rem]  max-w-7xl flex-col ${cardBackground} rounded-lg pt-[2.9rem] lg:flex-row `}
    >
      {isEven ? (
        <>
          <ProjectCardContent
            heading={heading}
            projectName={projectName}
            technologies={technologies}
            buttonBackground={buttonBackground}
          />
          <ProjectCardImage image={image} heading={heading} />
        </>
      ) : (
        <>
          <ProjectCardImage image={image} heading={heading} />
          <ProjectCardContent
            heading={heading}
            projectName={projectName}
            technologies={technologies}
            buttonBackground={buttonBackground}
          />
        </>
      )}
    </div>
  );
};

export default ProjectCard;
