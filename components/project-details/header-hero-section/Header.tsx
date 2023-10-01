import { DetailsHeaderType } from '@/types';
import MotionWrapper from '@/HOC/MotionWrapper';

const Header = ({ headingUnderline, heading }: DetailsHeaderType) => (
  <div className="overflow:hidden flex flex-col justify-center bg-white-800 px-[1.5rem] pt-[7.5rem] dark:bg-black-300 md:px-[5.3rem] md:pt-[9rem]">
    <MotionWrapper
      direction="down"
      type="spring"
      delay={0.5}
      duration={2.75}
      className="mb-[1.625rem] text-center font-semibold text-primary-light dark:text-primary-dark xl:mb-[3.25rem] xl:text-[1.25rem] xl:leading-[1.95rem] xl:tracking-[6px]"
      tagType="h2"
    >
      WEB DEV PROJECT
    </MotionWrapper>
    <MotionWrapper
      direction="left"
      type="spring"
      delay={0.5}
      duration={2.75}
      className="text-center text-[2.625rem] font-bold leading-[3.45rem] tracking-[-0.026rem] text-black-200 dark:bg-black-300 dark:text-white-900 xl:mb-[2.25rem] xl:text-[4rem] xl:leading-[1.95rem] xl:tracking-[-0.64px]"
      tagType="h1"
    >
      <div className="relative inline-flex ">
        <p className="z-20">{headingUnderline}</p>
        <div className="absolute z-10 mt-9 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:h-[1rem] xl:mt-7" />
      </div>
      {' - '} {heading}
    </MotionWrapper>
  </div>
);

export default Header;
