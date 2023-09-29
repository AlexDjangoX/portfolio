import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import SectionHeading from '../../reusable/SectionHeading';
import { ChallengesSectionType } from '@/types';
import ChallengesList from './ChallengesList';
import { challenge, tick } from '@/public/assets/index';

const ChallengesSection = ({
  challenges,
  learnings,
}: ChallengesSectionType) => (
  <WrapperProjectDetails className="bg-white-900 px-[0.9rem] py-[1.5rem] dark:bg-black-200 ">
    <SectionHeading className="pb-[1.5rem]">
      <sub>Way of work</sub>
      My Process
    </SectionHeading>
    <ChallengesList
      items={challenges}
      title="CHALLENGES"
      iconSrc={challenge}
      color="text-heading-red"
    />
    <ChallengesList
      items={learnings}
      title="LEARNINGS"
      iconSrc={tick}
      color="text-heading-green"
    />
  </WrapperProjectDetails>
);

export default ChallengesSection;
