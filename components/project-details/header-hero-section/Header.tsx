import { DetailsHeaderType } from '@/types';
import MotionWrapper from '@/HOC/MotionWrapper';

const Header = ({ headingUnderline, heading }: DetailsHeaderType) => (
  <div className="overflow:hidden flex flex-col justify-center bg-white-800 px-[1.5rem] pt-[7.5rem] dark:bg-black-300 md:px-[5.3rem] md:pt-[9rem]">
    <MotionWrapper
      direction="down"
      type="spring"
      delay={0.5}
      duration={2.75}
      className="mb-[0.625rem] text-center font-semibold text-primary-light dark:text-primary-dark md:text-[1.25rem] md:leading-[1.95rem] md:tracking-[6px]"
      tagType="h2"
    >
      WEB DEV PROJECT
    </MotionWrapper>
    <MotionWrapper
      direction="left"
      type="spring"
      delay={0.5}
      duration={2.75}
      className="text-center text-[2.625rem] font-bold leading-[3.45rem] tracking-[-0.026rem] text-black-200 dark:bg-black-300 dark:text-white-900 md:text-[4rem] md:leading-[1.95rem] md:tracking-[-0.64px]"
      tagType="h1"
    >
      <div className="relative inline-flex ">
        <p className="z-20">{headingUnderline}</p>
        <div className="absolute z-10 mt-7 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:mt-14  md:h-[1rem]" />
      </div>
      {' - '} {heading}
    </MotionWrapper>
  </div>
);

export default Header;
