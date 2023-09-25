'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';

const ServiceHeading = () => {
  return (
    <motion.h2
      variants={fadeIn('right', 'spring', 0.5 * 1, 2.75)}
      viewport={{ once: true, amount: 0.1 }}
      initial="hidden"
      whileInView="show"
      className="mb-[2.5rem]  text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] text-black-200 dark:bg-black-200 dark:text-white-900 md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px]"
    >
      What{' '}
      <div className="relative inline-flex">
        <p className="z-20">service</p>
        <div className="absolute z-10 mt-7 h-[0.8rem] w-full rounded-sm bg-secondary-dark md:mt-9 md:h-[1rem]" />
      </div>{' '}
      do I provide
    </motion.h2>
  );
};

export default ServiceHeading;
