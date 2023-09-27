import { DetailsHeaderType } from '@/types';
import MotionWrapperHeadingThree from '@/HOC/MotionWrapperHeadingThree';
import MotionWrapperHeadingTwo from '@/HOC/MotionWrapperHeadingTwo';

const Header = ({ headingUnderline, heading }: DetailsHeaderType) => (
  <div className=" overflow:hidden flex flex-col justify-center bg-white-800 pt-[7.5rem] dark:bg-black-300 md:pt-[9rem]">
    <MotionWrapperHeadingThree
      direction="down"
      type="spring"
      delay={0.5}
      duration={2.75}
      additionalStyles="mb-[0.625rem] text-center font-semibold text-primary-light dark:text-primary-dark md:text-[1.25rem] md:leading-[130%] md:tracking-[6px]"
    >
      WEB DEV PROJECT
    </MotionWrapperHeadingThree>
    <MotionWrapperHeadingTwo
      direction="left"
      type="spring"
      delay={0.5}
      duration={2.75}
      additionalStyles="text-center text-[2.625rem] font-bold leading-[115%] tracking-[-0.42px] text-black-200 dark:bg-black-300 dark:text-white-900  md:text-[4rem] md:leading-[130%] md:tracking-[-0.64px]"
    >
      <div className="relative inline-flex ">
        <p className="z-20 ">{headingUnderline}</p>
        <div className="absolute z-10 mt-7 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:mt-14  md:h-[1rem]" />
      </div>
      {' - '} {heading}
    </MotionWrapperHeadingTwo>
  </div>
);

export default Header;
