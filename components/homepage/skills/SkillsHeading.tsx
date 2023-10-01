import MotionWrapper from '@/HOC/MotionWrapper';

const SkillsHeading = () => (
  <MotionWrapper
    direction="right"
    type="spring"
    delay={0.5}
    duration={2.75}
    className="mb-[3.4rem] text-center text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.023rem] text-black-200 dark:bg-black-200 dark:text-white-900 md:mb-[3.6rem] md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.03rem]"
    tagType="h2"
  >
    <div className="relative inline-flex items-center whitespace-nowrap">
      <p className="z-20 ">My Skills</p>
      <div className="absolute z-10 mt-7 h-[1.1rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1.3rem]" />
    </div>
  </MotionWrapper>
);

export default SkillsHeading;
