import MotionWrapperHeadingTwo from '../../../HOC/MotionWrapperHeadingTwo';

const ProjectHeading = () => {
  return (
    <MotionWrapperHeadingTwo
      direction="right"
      type="spring"
      delay={0.5}
      duration={2.75}
      additionalStyles="text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px] text-center mb-[2.5rem] text-black-200 dark:bg-black-200 dark:text-white-900"
    >
      Featured{' '}
      <div className="relative inline-flex ">
        <p className="z-20 ">Projects</p>
        <div className="absolute z-10 mt-7 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1rem]" />
      </div>
    </MotionWrapperHeadingTwo>
  );
};

export default ProjectHeading;
