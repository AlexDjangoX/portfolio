import Image from 'next/image';

import { ProjectDetailsImageType } from '@/types';

const ProjectDetailsImage = ({
  imageUrl,
  imageAlt,
}: ProjectDetailsImageType) => (
  <div className=" flex items-center justify-center bg-white-800 pb-[1.5rem] dark:bg-black-300  ">
    <Image src={imageUrl} width={720} height={347} alt={imageAlt} />
  </div>
);

export default ProjectDetailsImage;
