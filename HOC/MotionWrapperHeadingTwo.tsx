'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';
import { MotionHeadingTwoProps } from '@/types';

const MotionWrapperHeadingTwo = ({
  children,
  direction,
  type,
  delay,
  duration,
  additionalStyles,
}: MotionHeadingTwoProps) => {
  return (
    <motion.h2
      variants={fadeIn(direction, type, delay, duration)}
      viewport={{ once: true, amount: 0.1 }}
      initial="hidden"
      whileInView="show"
      className={`${additionalStyles} text-[2.25rem] font-bold leading-[2.6rem] tracking-[-0.36px] md:text-[3rem] md:leading-[3.45rem] md:tracking-[-0.48px]`}
    >
      {children}
    </motion.h2>
  );
};

export default MotionWrapperHeadingTwo;
