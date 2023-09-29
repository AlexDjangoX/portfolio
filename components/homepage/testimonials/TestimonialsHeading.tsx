import MotionWrapper from '../../../HOC/MotionWrapper';

const TestimonialsHeading = () => (
  <MotionWrapper
    direction="right"
    type="spring"
    delay={0.5}
    duration={2.75}
    className="mb-[2.5rem] text-center text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] text-black-200 dark:bg-black-300 dark:text-white-900 md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px]"
    tagType="h2"
  >
    What{' '}
    <span className="relative  inline-flex items-center">
      <span className="z-20">they say</span>
      <div className="absolute z-10  h-[1.02rem] w-full translate-y-[1rem] rounded-sm bg-secondary-dark md:h-[1.3rem] md:translate-y-[1.2rem]" />
    </span>{' '}
    about me
  </MotionWrapper>
);

export default TestimonialsHeading;
