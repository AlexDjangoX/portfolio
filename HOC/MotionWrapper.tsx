'use client';

import { MotionWrapperType } from '@/types';
import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';

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
  translateY = ' 0',
}: MotionWrapperType) => {
  let Tag;
  switch (tagType) {
    case 'h1':
      Tag = motion.h1;
      break;
    case 'h2':
      Tag = motion.h2;
      break;
    case 'h3':
      Tag = motion.h3;
      break;
    case 'h4':
    default:
      Tag = motion.div;
      break;
  }
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
