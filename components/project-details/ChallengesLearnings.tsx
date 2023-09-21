import WrapperStudyDetails from '@/HOC/WrapperStudyDetails';
import ProjectDetailsHeading from '../reusable/ProjectDetailsHeading';
import { ChallengesLearningsType } from '@/types';
import ChallengesLearningsList from './ChallengesLearningsList';

import { challenge, tick } from '@/public/assets/index';

const ChallengesLearnings = ({
  challenges,
  learnings,
}: ChallengesLearningsType) => {
  return (
    <WrapperStudyDetails additionalStyles="bg-white-900 dark:bg-black-200 py-[1.5rem] px-[0.9rem] ">
      <ProjectDetailsHeading
        subHeading="Way of work"
        mainHeading="My Process"
        additionalStylesMainHeading="pb-[1.5rem]"
      />
      <ChallengesLearningsList
        items={challenges}
        title="CHALLENGES"
        iconSrc={challenge}
        color="text-heading-red"
      />
      <ChallengesLearningsList
        items={learnings}
        title="LEARNINGS"
        iconSrc={tick}
        color="text-heading-green"
      />
    </WrapperStudyDetails>
  );
};

export default ChallengesLearnings;
