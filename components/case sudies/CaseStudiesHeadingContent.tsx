const CaseStudiesHeading = () => {
  return (
    <div className="flex flex-col justify-center px-[3rem] py-[1.5rem]">
      <h1 className="mb-[1.25rem] text-center  text-[2.6rem] font-bold leading-[3.0rem] tracking-[-0.42px] text-black-200 dark:text-white-900 md:text-[4rem]   md:leading-[5.2rem] md:tracking-[-0.64px]">
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
      <div>
        <p className="text-center font-[0.874rem] leading-[155%] text-white-500 dark:text-white-800 md:font-[1.25rem]">
          Dive into my recent success stories and discover how I have helped
          potential clients overcome challenges, innovate, and achieve their
          goals.
        </p>
      </div>
    </div>
  );
};

export default CaseStudiesHeading;
