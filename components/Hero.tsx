import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ClipboardText from './ClipBoardText';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white-800 px-[5.3125rem] dark:bg-black-300 lg:flex-row">
      <div className="mt-[9.9375rem] flex flex-1 flex-col space-y-6 pb-6">
        <p className="text-[0.874rem] font-semibold uppercase leading-leadingRelaxed tracking-tracking6 text-primary-light dark:text-primary-dark md:text-baseplus">
          HI, I AM ALEXANDER
        </p>
        <h1 className="mt-[15.5625rem] text-[2.625rem] font-bold leading-leading4rem tracking-tracking_64 text-black-200 dark:text-white-900 md:text-4xlplus">
          Professional <br />
          <span className="custom-underline z-10 pr-3">Web</span>
          <span className="custom-underline z-10">Developer</span> <br />
          based in Poland
        </h1>

        <p className="text-[0.75rem] font-normal leading-leading1_8rem text-white-500 dark:text-white-800 md:text-baseplus">
          Transforming Figma one line at a time into cutting-edge digital
          solutions with precision, passion and a profound commitment to
          excellence.
        </p>
        <div className="flex flex-col space-y-4 md:w-full md:flex-row md:space-x-4 md:space-y-0">
          <Link href="/work" className="flex-1">
            <button className="w-full min-w-[8rem] rounded-full bg-primary-light px-4 py-2 text-center text-[0.75rem] font-semibold leading-leadingRelaxed text-white-900 dark:bg-primary-dark md:mb-4 md:text-baseplus">
              My Work
            </button>
          </Link>
          <div className="flex-1">
            <ClipboardText text="alexMonk17@gmail.com" />
          </div>
        </div>
      </div>

      <div className="relative mt-6 flex-1 lg:mt-[9.9375rem] ">
        <Image
          src="/illustrations-png/3Dcomputer.png"
          alt="3D Computer"
          width="757"
          height="541"
        />
      </div>
    </section>
  );
};

export default Hero;
