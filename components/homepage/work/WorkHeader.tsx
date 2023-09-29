'use client';

import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import React from 'react';

const WorkHeader = () => (
  <motion.h2
    variants={fadeIn('right', 'spring', 0.05 * 1, 2.75)}
    viewport={{ once: true, amount: 0.1 }}
    initial="hidden"
    whileInView="show"
    className="mb-[1.486rem] flex flex-col justify-center text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] text-white-900 dark:bg-white-800 dark:text-black-200 md:mb-[2.4rem] md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px]"
  >
    <span>Developer</span>
    <div className="relative inline-flex items-center whitespace-nowrap">
      <span className="custom-underline z-10">Experi</span>ence
    </div>
  </motion.h2>
);

export default WorkHeader;
