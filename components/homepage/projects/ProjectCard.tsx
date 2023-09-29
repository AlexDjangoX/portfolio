'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

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
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  });

  const projectBackgrounds: Record<string, string> = {
    morrent: 'bg-morrent-background',
    jobit: 'bg-jobit-background',
    portfolio: 'bg-portfolio-background',
  };

  const buttonBackgrounds: Record<string, string> = {
    morrent: 'bg-morrent-button',
    jobit: 'bg-jobit-button',
    portfolio: 'bg-portfolio-button',
  };
  const isOdd = index % 2 !== 0;

  const cardBackground = projectBackgrounds[projectName] || 'bg-white-900';
  const buttonBackground = buttonBackgrounds[projectName] || 'bg-white-900';

  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
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
    </motion.div>
  );
};

export default ProjectCard;
