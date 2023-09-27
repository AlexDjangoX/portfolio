import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import { ProblemStatementType } from '@/types';
import SectionHeading from '../../reusable/SectionHeading';
import ProcessCard from './ProcessCard';

const Process = ({ myProcess }: ProblemStatementType) => {
  return (
    <WrapperProjectDetails additionalStyles="bg-white-900 dark:bg-black-200 py-[2.25rem] px-[1.5rem] ">
      <SectionHeading
        subHeading="Way of work"
        mainHeading="My Process"
        additionalStylesMainHeading="pb-[1.5rem]"
      />
      <div className="flex flex-wrap justify-between">
        {myProcess.map((processItem) => (
          <ProcessCard key={processItem.imageAlt} {...processItem} />
        ))}
      </div>
    </WrapperProjectDetails>
  );
};

export default Process;
