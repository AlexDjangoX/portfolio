import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import { PreviewType } from '@/types';
import SectionHeading from '../../reusable/SectionHeading';
import StudyCard from './PreviewCard';

const Preview = ({ otherCaseStudies }: PreviewType) => {
  return (
    <WrapperProjectDetails className="bg-white-800 px-[1.5rem] py-[2.25rem] dark:bg-black-300 md:p-[4.5rem]">
      <SectionHeading className="mb-[2.25rem] md:pb-[2.5rem]">
        <sub>Projects</sub>
        Other Case Studies
      </SectionHeading>

      <div className="flex flex-col items-center justify-between gap-x-10 dark:bg-black-300 sm:flex-row">
        {otherCaseStudies.map((study) => (
          <StudyCard key={study.otherCaseStudyImageAlt} {...study} />
        ))}
      </div>
    </WrapperProjectDetails>
  );
};

export default Preview;
