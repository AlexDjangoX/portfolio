'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

import { ApplicationDescriptionType } from '@/types';
import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';

const ApplicationDescription = ({
  description,
}: ApplicationDescriptionType) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  return (
    <div className="bg-white-800 dark:bg-black-300">
      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      >
        <WrapperProjectDetails className="bg-white-800 px-[1.5rem] py-[2.25rem] dark:bg-black-300 md:px-[5.6rem] md:py-[4.5rem]">
          {description.map((block) => (
            <p
              key={block?._key}
              className="mb-4 text-[0.875rem] leading-[1.356rem] text-white-500 dark:text-white-800 md:text-[1.25rem]"
            >
              {block.children.map((child, index) => (
                <span key={index}>{child.text}</span>
              ))}
            </p>
          ))}
        </WrapperProjectDetails>
      </motion.div>
    </div>
  );
};

export default ApplicationDescription;
