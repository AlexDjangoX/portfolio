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
  once = true,
}: MotionHeadingTwoProps) => {
  return (
    <motion.h2
      variants={fadeIn(direction, type, delay, duration)}
      viewport={{ once, amount: 0.1 }}
      initial="hidden"
      whileInView="show"
      className={`${additionalStyles} `}
    >
      {children}
    </motion.h2>
  );
};

export default MotionWrapperHeadingTwo;
