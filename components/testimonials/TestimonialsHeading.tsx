import React from 'react';

type Props = {};

const TestimonialsHeading = (props: Props) => {
  return (
    <h2 className="mb-[2.25rem] text-center text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] text-black-200 dark:bg-black-300 dark:text-white-900 md:text-[3rem] lg:mb-[4rem] lg:text-[3rem] lg:leading-[3.5rem] lg:tracking-[-0.48px]">
      What{' '}
      <span className="relative  inline-flex items-center">
        <span className="z-20">they say</span>
        <div className="absolute z-10  h-[1.02rem] w-full translate-y-[1rem] rounded-sm bg-secondary-dark md:h-[1.3rem] md:translate-y-[1.2rem]" />
      </span>{' '}
      about me
    </h2>
  );
};

export default TestimonialsHeading;
