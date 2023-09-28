import MotionWrapperCardDiv from '@/HOC/MotionWrapperCardDiv';

const CaseStudiesHeading = () => {
  return (
    <div>
      <MotionWrapperCardDiv
        aria-label="Preview Card"
        direction="left"
        type="spring"
        delay={0.05}
        duration={1.75}
        additionalStyles="mt-[4.4rem] w-full bg-white-800 px-[1.5rem] pt-[3rem] dark:bg-black-300"
      >
        <h1 className="pb-[3rem] text-center text-[2.3rem] font-bold leading-[3.0rem] tracking-[-0.42px] text-black-200 dark:bg-black-300 dark:text-white-900 md:text-[4rem]   md:leading-[5.2rem] md:tracking-[-0.64px]">
          Recent{' '}
          <div className="relative inline-flex items-center whitespace-nowrap">
            <p className="z-20 pr-1">Case </p>
            <div className="absolute z-10 mt-8 h-[1.02rem] w-full  rounded-sm bg-secondary-dark sm:mt-14 sm:h-[1.1rem] " />
          </div>
          <div className="relative inline-flex items-center whitespace-nowrap">
            <p className="z-20 pl-1"> Studies</p>
            <div className="absolute z-10 mt-8 h-[1.02rem] w-full  rounded-sm bg-secondary-dark sm:mt-14 sm:h-[1.1rem] " />
          </div>
        </h1>
      </MotionWrapperCardDiv>
      <MotionWrapperCardDiv
        aria-label="Preview Card"
        direction="right"
        type="spring"
        delay={0.05}
        duration={1.75}
        additionalStyles="flex w-full justify-center items-center dark:bg-black-300"
      >
        <p className="w-full max-w-[42rem] pb-[3rem] text-center font-[0.874rem] leading-[155%] text-white-500 dark:bg-black-300 dark:text-white-800 md:pb-[6.75rem] md:font-[1.25rem]">
          Dive into my recent success stories and discover how I have helped
          potential clients overcome challenges, innovate, and achieve their
          goals.
        </p>
      </MotionWrapperCardDiv>
    </div>
  );
};

export default CaseStudiesHeading;
