import { SectionListType } from '@/types';
import ChallengesItem from './ChallengesItem';

const ChallengesList = ({ items, title, iconSrc, color }: SectionListType) => (
  <div className="mb-[1.9rem] rounded-md bg-white-800 px-[0.8rem] py-[1.5rem] dark:bg-black-300 md:px-[2.5rem] md:py-[2.25rem]">
    <h4
      className={`pb-[1.6rem] text-[1.125rem] font-semibold leading-[160%] ${color}`}
    >
      {title}
    </h4>
    <ul>
      {items.map((item, index) => (
        <ChallengesItem
          key={item._key}
          text={item.description}
          title={title}
          iconSrc={iconSrc}
          index={index}
        />
      ))}
    </ul>
  </div>
);

export default ChallengesList;
