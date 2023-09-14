import React from 'react';
import Image from 'next/image';

type ProjectCardImageProps = {
  image: string;
  heading: string;
};

const ProjectCardImage: React.FC<ProjectCardImageProps> = ({
  image,
  heading,
}) => {
  return (
    <div className="mr-0 flex w-1/2 justify-end">
      <Image src={image} alt={heading} width={560} height={590} />
    </div>
  );
};

export default ProjectCardImage;
