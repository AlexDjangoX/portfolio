import { TechnologyType } from '@/types';

const Technology = ({ tech, buttonBackground }: TechnologyType) => (
  <p
    className={`${buttonBackground} rounded-md p-2 font-normal text-white-900`}
  >
    {tech}
  </p>
);

export default Technology;
