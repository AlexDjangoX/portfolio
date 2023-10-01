import MotionWrapper from '@/HOC/MotionWrapper';

const ContactHeader = () => {
  return (
    <div className="px-6 py-12">
      <MotionWrapper
        direction="left"
        type="spring"
        delay={0.5}
        duration={2.75}
        className="mb-5 text-center text-[2.625rem] font-bold leading-[3rem] tracking-[-0.026rem] text-black-200 dark:bg-black-300 dark:text-white-900 md:text-[4rem] md:leading-[5.2rem] md:tracking-[-0.64px]"
        tagType="h1"
      >
        <div className="relative mb-[1.25rem] inline-flex items-center whitespace-nowrap">
          <p className="z-20">Get in Touch</p>
          <div className="absolute z-10 mt-7 h-[1.1rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1.3rem]" />
        </div>
      </MotionWrapper>
      <MotionWrapper
        direction="right"
        type="spring"
        delay={0.5}
        duration={2.75}
        className="text-center text-sm font-normal leading-[1.356rem] text-white-500 dark:text-white-800 md:text-[1.25rem] md:leading-[1.875rem]"
        tagType="h2"
      >
        Let&apos;s Collaborate on Your Next Project
      </MotionWrapper>
    </div>
  );
};

export default ContactHeader;
