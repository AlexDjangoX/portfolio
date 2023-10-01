import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import { TechStackInterface } from '@/types';
import SectionHeading from '../../reusable/SectionHeading';
import TechIcons from '@/components/reusable/TechIcons';

const TechStack = ({ techStack }: TechStackInterface) => (
  <WrapperProjectDetails className="bg-white-900 dark:bg-black-200">
    <SectionHeading className="mb-[1.5rem]">
      <sub>Technologies used</sub>
      Tech Stack
    </SectionHeading>

    <div className="flex max-w-[45rem] flex-wrap justify-center gap-12 overflow-hidden py-10 md:gap-20 md:pb-[4.5rem] md:pt-[3.3rem]">
      {techStack.map((skill, index) => (
        <TechIcons
          key={skill?._id}
          imageUrl={skill?.imageUrl}
          imageAlt={skill?.imageAlt}
          index={index}
          id={skill?._id}
        />
      ))}
    </div>
  </WrapperProjectDetails>
);

export default TechStack;
