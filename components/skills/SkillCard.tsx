'use client';

import Image from 'next/image';

import { SkillsType } from '@/types';
import { fadeIn } from '@/utils/motion';
import { motion } from 'framer-motion';

const SkillCard = ({ _id, image, altText, index }: SkillsType) => (
  <motion.div
    variants={fadeIn('right', 'spring', 0.5 * index, 1.75)}
    viewport={{ once: true, amount: 0.1 }}
    initial="hidden"
    whileInView="show"
    key={_id}
    className="mb-10"
  >
    <div className="relative flex h-[3.3rem] w-[3.3rem] items-center justify-center overflow-hidden rounded-full bg-white-800 transition-transform duration-150 hover:scale-125 dark:bg-black-300 md:mx-6 md:h-[6.25rem] md:w-[6.25rem]">
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image src={image} alt={altText} width={120} height={120} />
      </div>
    </div>
  </motion.div>
);

export default SkillCard;
