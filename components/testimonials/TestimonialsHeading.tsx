import MotionWrapperHeadingTwo from '../reusable/MotionWrapperHeadingTwo';

const TestimonialsHeading = () => {
  return (
    <MotionWrapperHeadingTwo
      direction="right"
      type="spring"
      delay={0.5}
      duration={2.75}
      additionalStyles="text-center mb-[2.5rem] text-black-200 dark:bg-black-200 dark:text-white-900"
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
