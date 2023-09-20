import React from 'react';
import Image from 'next/image';

const ProjectDetailsImage: React.FC<{ imageUrl: string; imageAlt: string }> = ({
  imageUrl,
  imageAlt,
}) => (
  <div className=" flex items-center justify-center bg-white-800 py-[1.5rem] dark:bg-black-300  md:pt-[3.5rem]">
    <Image
      className=" md:h-[350px] md:w-[742px]"
      src={imageUrl}
      width={345}
      height={163}
      alt={imageAlt}
    />
  </div>
);

export default ProjectDetailsImage;
