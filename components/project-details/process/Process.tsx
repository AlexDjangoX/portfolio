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
        {myProcess.map((processItem, index) => (
          <ProcessCard
            key={processItem.imageAlt}
            imageUrl={processItem.imageUrl}
            imageAlt={processItem.imageAlt}
            title={processItem.title}
            index={index}
          />
        ))}
      </div>
    </WrapperProjectDetails>
  );
};

export default Process;
