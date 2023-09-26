'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/utils/motion';
import { MotionWrapperCardDivProps } from '@/types';

const MotionWrapperCardDiv = ({
  children,
  direction,
  type,
  delay,
  duration,
  additionalStyles = '',
}: MotionWrapperCardDivProps) => (
  <motion.div
    variants={fadeIn(direction, type, delay, duration)}
    viewport={{ once: false, amount: 0.1 }}
    initial="hidden"
    whileInView="show"
    className={additionalStyles}
  >
    {children}
  </motion.div>
);

export default MotionWrapperCardDiv;
