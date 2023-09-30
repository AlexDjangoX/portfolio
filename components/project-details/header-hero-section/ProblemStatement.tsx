'use client';

import { useRef } from 'react';
import Image from 'next/image';

import WrapperProjectDetails from '@/HOC/WrapperProjectDetails';
import SectionHeading from '../../reusable/SectionHeading';
import { ProjectDetails } from '@/types';
import { useScroll, motion } from 'framer-motion';

const ProblemStatement = ({
  problemStatement,
  problemStatementImageUrl,
  problemStatementImageAlt,
}: ProjectDetails) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 1'],
  });
  return (
    <div className="bg-white-900 dark:bg-black-200">
      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="rounded-md bg-white-900 px-[1.5rem] py-[2.25rem] dark:bg-black-200 md:p-[4.5rem]"
      >
        <WrapperProjectDetails>
          <SectionHeading>
            <sub>Problem</sub>Problem Statement
          </SectionHeading>
          <p className="py-[1.75rem] text-[0.875rem] leading-[155%] text-white-500 dark:text-white-800 md:text-[1.25rem]">
            {problemStatement}
          </p>
          <Image
            className="h-full w-full object-cover"
            src={problemStatementImageUrl}
            width={444}
            height={263}
            alt={problemStatementImageAlt}
          />
        </WrapperProjectDetails>
      </motion.div>
    </div>
  );
};

export default ProblemStatement;
