import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import { TechStackInterface } from '@/types';
import SectionHeading from '../../reusable/SectionHeading';
import TechSkillIcon from './TechSkillIcon';

const TechStack = ({ techStack }: TechStackInterface) => (
  <WrapperProjectDetails className="bg-white-900 dark:bg-black-200">
    <SectionHeading
      subHeading="Technologies used"
      mainHeading="Tech Stack"
      additionalStylesMainHeading="mb-[1.5rem] md:pb-[2.75rem]"
    />

    <div className="flex max-w-[45rem] flex-wrap justify-center gap-5 overflow-hidden py-10 md:gap-9 md:pb-[4.5rem] md:pt-[3.3rem]">
      {techStack.map((skill, index) => (
        <TechSkillIcon
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
