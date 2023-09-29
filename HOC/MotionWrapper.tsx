'use client';

import { motion } from 'framer-motion';

import { tagTypeMapping } from '@/utils/constants';
import { MotionWrapperType } from '@/types';
import { fadeIn } from '@/utils/motion';

const MotionWrapper = ({
  children,
  direction,
  type,
  delay,
  duration,
  className,
  once = true,
  tagType = 'div',
  translateX = '0',
  translateY = '0',
}: MotionWrapperType) => {
  const Tag = tagTypeMapping[tagType] || motion.div;
  return (
    <Tag
      variants={fadeIn(direction, type, delay, duration)}
      viewport={{ once, amount: 0.1 }}
      initial="hidden"
      whileInView="show"
      className={className}
      whileHover={{ x: translateX, y: translateY }}
    >
      {children}
    </Tag>
  );
};

export default MotionWrapper;
