import MotionWrapperHeadingTwo from '../../../HOC/MotionWrapperHeadingTwo';

const TestimonialsHeading = () => {
  return (
    <MotionWrapperHeadingTwo
      direction="right"
      type="spring"
      delay={0.5}
      duration={2.75}
      additionalStyles="text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px] text-center mb-[2.5rem] text-black-200 dark:bg-black-200 dark:text-white-900"
    >
      What{' '}
      <span className="relative  inline-flex items-center">
        <span className="z-20">they say</span>
        <div className="absolute z-10  h-[1.02rem] w-full translate-y-[1rem] rounded-sm bg-secondary-dark md:h-[1.3rem] md:translate-y-[1.2rem]" />
      </span>{' '}
      about me
    </MotionWrapperHeadingTwo>
  );
};

export default TestimonialsHeading;
