import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import { PreviewType } from '@/types';
import SectionHeading from '../../reusable/SectionHeading';
import StudyCard from './PreviewCard';

const Preview = ({ otherCaseStudies }: PreviewType) => {
  return (
    <WrapperProjectDetails additionalStyles="bg-white-800 dark:bg-black-300 px-[1.5rem] py-[2.25rem] md:py-[4.5rem] md:px-[4.5rem]">
      <SectionHeading
        subHeading="Projects"
        mainHeading="Other Case Studies"
        additionalStylesMainHeading="mb-[2.25rem] md:pb-[2.5rem]"
      />
      <div className="flex flex-col items-center justify-between gap-x-10 dark:bg-black-300 sm:flex-row">
        {otherCaseStudies.map((study, index) => (
          <StudyCard key={index} {...study} />
        ))}
      </div>
    </WrapperProjectDetails>
  );
};

export default Preview;
