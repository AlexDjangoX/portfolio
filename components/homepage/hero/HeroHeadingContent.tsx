'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import ClipboardText from './ClipBoardText';
import { fadeIn } from '@/utils/motion';

const HeroHeadingContent = () => {
  return (
    <header className="mt-[9.9375rem] flex flex-1 flex-col space-y-6 pb-6">
      <motion.p
        variants={fadeIn('right', 'spring', 0.5 * 1, 0.75)}
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
        className="text-[0.875rem] font-semibold uppercase leading-[1.625rem] tracking-[4.2px] text-primary-light dark:text-primary-dark  lg:text-[1.25rem] lg:leading-[1.624rem] lg:tracking-[6px]"
      >
        HI, I AM ALEXANDER
      </motion.p>

      <h1 className="mt-[15.5625rem] text-[2.3rem] font-bold leading-[3.0rem] tracking-[-0.42px] text-black-200 dark:text-white-900 sm:text-[2.625rem]  lg:text-[3.8rem] lg:leading-[5.2rem] lg:tracking-[0.64px]">
        Professional{' '}
        <div className="relative inline-flex items-center whitespace-nowrap">
          <p className="z-20">Web Developer</p>
          <div className="absolute z-10 mt-8 h-[1.02rem] w-full  rounded-sm bg-secondary-dark sm:h-[1.1rem] lg:mt-12 lg:h-[1.6rem]" />
        </div>{' '}
        based in Poland
      </h1>

      <motion.p
        variants={fadeIn('left', 'spring', 0.5 * 1, 3.75)}
        viewport={{ once: true, amount: 0.1 }}
        initial="hidden"
        whileInView="show"
        className="text-[0.75rem] font-normal leading-[1.16rem] text-white-500 dark:text-white-800 sm:text-[0.90rem] md:text-[1.125rem] md:leading-[1.8rem]"
      >
        Transforming Figma one line at a time into cutting-edge digital
        solutions with precision, passion and a profound commitment to
        excellence.
      </motion.p>
      <div className="flex flex-col space-y-4 md:w-full md:flex-row md:space-x-4 md:space-y-0">
        <Link href="/case-studies" className="flex-1">
          <button className="w-full min-w-[8rem] rounded-full bg-primary-light px-4 py-2 text-center text-[0.875rem] font-semibold leading-[1.625rem] text-white-900 dark:bg-primary-dark md:mb-4 md:text-[1.125rem] ">
            My Work
          </button>
        </Link>
        <div className="flex-1">
          <ClipboardText text="alexMonk17@gmail.com" />
        </div>
      </div>
    </header>
  );
};

export default HeroHeadingContent;
