import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import { OtherCaseStudiesType } from '@/types';
import ProjectDetailsHeading from '../reusable/ProjectDetailsHeading';
import OtherCaseStudyCard from './OtherCaseStudyCard';

const OtherCaseStudies = ({ otherCaseStudies }: OtherCaseStudiesType) => {
  return (
    <WrapperProjectDetails additionalStyles="bg-white-800 dark:bg-black-300 px-[1.5rem] py-[2.25rem] md:py-[4.5rem] md:px-[4.5rem]">
      <ProjectDetailsHeading
        subHeading="Projects"
        mainHeading="Other Case Studies"
        additionalStylesMainHeading="mb-[2.25rem] md:pb-[2.5rem]"
      />
      <div className="flex flex-col items-center justify-between sm:flex-row">
        {otherCaseStudies.map((study, index) => (
          <OtherCaseStudyCard key={index} {...study} />
        ))}
      </div>
    </WrapperProjectDetails>
  );
};

export default OtherCaseStudies;
