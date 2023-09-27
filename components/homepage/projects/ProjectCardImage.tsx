import Image from 'next/image';
import { ProjectCardImageType } from '@/types';

const ProjectCardImage = ({ image, heading }: ProjectCardImageType) => {
  return (
    <figure className="lg:w-1/2">
      <Image src={image} alt={heading} width={560} height={590} />
      <figcaption className="sr-only">{heading}</figcaption>
    </figure>
  );
};

export default ProjectCardImage;
