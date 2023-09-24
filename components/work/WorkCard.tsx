'use client';

import Image from 'next/image';

import { WorkCardType } from '@/types';
import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';

const WorkCard = ({
  title,
  subtitle,
  description,
  imgSrc,
  index,
  _id,
}: WorkCardType) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.05 * index, 1.75)}
      viewport={{ once: false, amount: 0.1 }}
      initial="hidden"
      whileInView="show"
      className="flex flex-col items-start  rounded-md bg-white-800 transition-transform duration-300 hover:translate-x-[2rem] hover:bg-white-900 dark:bg-black-200 dark:hover:bg-black-300"
    >
      <div className="flex items-center justify-start">
        <Image
          className="m-[1.5rem]"
          src={imgSrc}
          alt="WorkCard Image"
          width={58}
          height={58}
        />

        <h3 className="font-semibold leading-[130%] text-black-200 dark:text-white-900 md:text-[1.5rem]">
          {title}
        </h3>
        <p className="ml-4 dark:text-white-800">{subtitle}</p>
      </div>
      <p className="ml-[1.5rem] font-normal leading-[155%] text-white-500 dark:text-white-900  md:text-[0.875rem]">
        {description}
      </p>
    </motion.div>
  );
};

export default WorkCard;
