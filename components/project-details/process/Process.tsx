import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import { ProblemStatementType } from '@/types';
import SectionHeading from '../../reusable/SectionHeading';
import ProcessCard from './ProcessCard';

const Process = ({ myProcess }: ProblemStatementType) => (
  <WrapperProjectDetails className="bg-white-900 px-[1.5rem] py-[2.25rem] dark:bg-black-200 ">
    <SectionHeading className="pb-[1.5rem]">
      <sub>Way of work</sub>My Process
    </SectionHeading>
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

export default Process;
