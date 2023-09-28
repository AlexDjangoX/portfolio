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
  once = true,
  translateX = '0',
  translateY = ' 0',
}: MotionWrapperCardDivProps) => (
  <motion.div
    variants={fadeIn(direction, type, delay, duration)}
    viewport={{ once, amount: 0.1 }}
    initial="hidden"
    whileInView="show"
    className={`${additionalStyles} `}
    whileHover={{ x: translateX, y: translateY }}
  >
    {children}
  </motion.div>
);

export default MotionWrapperCardDiv;
