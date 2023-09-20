import React from 'react';

import { BlockProps } from '@/types';
import WrapperStudyDetails from '@/HOC/WrapperStudyDetails';

const ProjectDetailsDescription: React.FC<{ description: BlockProps[] }> = ({
  description,
}) => (
  <WrapperStudyDetails additionalStyles="bg-white-800 dark:bg-black-300">
    {description.map((block) => (
      <p
        key={block._key}
        className="mb-4 text-[0.875rem] leading-[155%] text-white-500 dark:text-white-800"
      >
        {block.children.map((child, index) => (
          <span key={index}>{child.text}</span>
        ))}
      </p>
    ))}
  </WrapperStudyDetails>
);

export default ProjectDetailsDescription;
