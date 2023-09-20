import React from 'react';

import { BlockProps } from '@/types';

const ProjectDetailsDescription: React.FC<{ description: BlockProps[] }> = ({
  description,
}) => (
  <div className="max-w-[45rem] bg-white-800 px-[1.5rem] py-[2.25rem]">
    {description.map((block) => (
      <p
        key={block._key}
        className="mb-4 text-[0.875rem] leading-[155%] text-white-500"
      >
        {block.children.map((child, index) => (
          <span key={index}>{child.text}</span>
        ))}
      </p>
    ))}
  </div>
);

export default ProjectDetailsDescription;
