import MotionWrapperHeadingTwo from '@/HOC/MotionWrapperHeadingTwo';

const ServiceHeading = () => {
  return (
    <MotionWrapperHeadingTwo
      direction="up"
      type="spring"
      delay={0.5}
      duration={2.75}
      additionalStyles="text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px] mb-[2.5rem] text-black-200 dark:bg-black-300 dark:text-white-900"
    >
      What{' '}
      <div className="relative inline-flex">
        <p className="z-20">service</p>
        <div className="absolute z-10 mt-7 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1rem]" />
      </div>{' '}
      do I provide
    </MotionWrapperHeadingTwo>
  );
};

export default ServiceHeading;