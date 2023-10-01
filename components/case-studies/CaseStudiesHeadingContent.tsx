import MotionWrapper from '@/HOC/MotionWrapper';

const CaseStudiesHeading = () => (
  <div>
    <MotionWrapper
      aria-label="Preview Card"
      direction="left"
      type="spring"
      delay={0.05}
      duration={1.75}
      className="mt-[4.4rem] w-full bg-white-800 px-[1.5rem] pt-[3rem] dark:bg-black-300"
    >
      <h1 className="pb-[3rem] text-center text-[2.625rem] font-bold leading-[3.02rem] tracking-[-0.026rem] text-black-200 dark:bg-black-300 dark:text-white-900 md:text-[4rem] md:leading-[5.2rem] md:tracking-[-0.64px]">
        Recent{' '}
        <div className="relative inline-flex items-center whitespace-nowrap">
          <p className="z-20 pr-1">Case </p>
          <div className="absolute z-10 mt-8 h-[1.02rem] w-full rounded-l-sm bg-secondary-dark md:mt-12" />
        </div>
        <div className="relative inline-flex items-center whitespace-nowrap">
          <p className="z-20 pl-1"> Studies</p>
          <div className="absolute z-10 mt-8 h-[1.02rem] w-full  rounded-r-sm  bg-secondary-dark md:mt-12" />
        </div>
      </h1>
    </MotionWrapper>
    <MotionWrapper
      aria-label="Preview Card"
      direction="right"
      type="spring"
      delay={0.05}
      duration={1.75}
      className="flex w-full items-center justify-center dark:bg-black-300"
    >
      <p className="w-full max-w-[42rem] pb-[3rem] text-center font-[0.874rem] leading-[1.356rem] text-white-500 dark:bg-black-300 dark:text-white-800 md:pb-[6.75rem] md:font-[1.25rem]">
        Dive into my recent success stories and discover how I have helped
        potential clients overcome challenges, innovate, and achieve their
        goals.
      </p>
    </MotionWrapper>
  </div>
);

export default CaseStudiesHeading;
