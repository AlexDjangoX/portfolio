import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import { ProjectDetailsTechStackInterface } from '@/types';
import ProjectDetailsHeading from '../reusable/ProjectDetailsHeading';
import TechSkillIcon from './TechSkillIcon';

const ProjectDetailsTechStack = ({
  techStack,
}: ProjectDetailsTechStackInterface) => (
  <WrapperProjectDetails additionalStyles="bg-white-900 dark:bg-black-200">
    <ProjectDetailsHeading
      subHeading="Technologies used"
      mainHeading="Tech Stack"
      additionalStylesMainHeading="mb-[1.5rem] md:pb-[2.75rem]"
    />

    <div className="flex max-w-[45rem] flex-wrap justify-between">
      {techStack.map((skill) => (
        <TechSkillIcon
          key={skill?._id}
          imageUrl={skill?.imageUrl}
          imageAlt={skill?.imageAlt}
          id={skill?._id}
        />
      ))}
    </div>
  </WrapperProjectDetails>
);

export default ProjectDetailsTechStack;
