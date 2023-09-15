import React from 'react';
import Image from 'next/image';
import { ProjectCardImageProps } from '@/types';

const ProjectCardImage: React.FC<ProjectCardImageProps> = ({
  image,
  heading,
}) => {
  return (
    <div className="lg:w-1/2">
      <Image src={image} alt={heading} width={560} height={590} />
    </div>
  );
};

export default ProjectCardImage;
