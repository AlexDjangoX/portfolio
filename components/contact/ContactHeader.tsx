import React from 'react';

const ContactHeader = () => {
  return (
    <div className="px-6 py-12">
      <h1 className="mb-5 text-center text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] text-black-200 dark:bg-black-200 dark:text-white-900 md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px]">
        <div className="relative inline-flex items-center whitespace-nowrap">
          <p className="z-20 ">Get in Touch</p>
          <div className="absolute z-10 mt-7 h-[1.1rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1.3rem]" />
        </div>
      </h1>
      <h2 className="text-center text-sm font-normal leading-[155%] text-white-500 dark:text-white-500">
        Let&apos;s Collaborate on Your Next Project
      </h2>
    </div>
  );
};

export default ContactHeader;