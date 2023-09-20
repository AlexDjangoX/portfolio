import React from 'react';

import { BlockProps } from '@/types';
import WrapperStudyDetails from '@/HOC/WrapperStudyDetails';

const ProjectDetailsDescription: React.FC<{ description: BlockProps[] }> = ({
  description,
}) => (
  <WrapperStudyDetails additionalStyles="bg-white-800 dark:bg-black-300 px-[1.5rem] py-[2.25rem] md:px-[5.6rem] md:py-[4.5rem]">
    {description.map((block) => (
      <p
        key={block._key}
        className="mb-4 text-[0.875rem] leading-[155%] text-white-500 dark:text-white-800 md:text-[1.25rem]"
      >
        {block.children.map((child, index) => (
          <span key={index}>{child.text}</span>
        ))}
      </p>
    ))}
  </WrapperStudyDetails>
);

export default ProjectDetailsDescription;
