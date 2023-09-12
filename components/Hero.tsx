import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ClipboardText from './ClipBoardText';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white-800 dark:bg-black-300 md:flex-row">
      <div className="mt-[9.9375rem] flex max-w-[32rem] flex-col space-y-6 p-6">
        <p className=" text-baseplus font-semibold uppercase leading-extraLoose tracking-widestplus text-primary-light dark:text-primary-dark">
          HI, I AM ALEXANDER
        </p>
        <h1 className="mt-[15.5625rem] text-4xlplus font-bold leading-tightplus tracking-tightplus text-black-200 dark:text-white-900">
          Professional <br />
          <span className="custom-underline z-10">Web Developer</span> <br />
          based in Poland
        </h1>

        <p className="text-baseplus font-normal leading-looseplus text-white-500 dark:text-white-800">
          Transforming Figma one line at a time into cutting-edge digital
          solutions with precision, passion and a profound commitment to
          excellence.
        </p>
        <div className="flex  flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <Link href="/work">
            <button className="min-w-[8rem] rounded-full bg-primary-light px-4 py-2 text-center text-baseplus font-semibold leading-extraLoose text-white-900 dark:bg-primary-dark ">
              My Work
            </button>
          </Link>
          <ClipboardText text="alexMonk17@gmail.com" />
        </div>
      </div>

      <div className="relative mt-6 max-w-[32rem] md:mt-[9.9375rem] md:w-1/2">
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
