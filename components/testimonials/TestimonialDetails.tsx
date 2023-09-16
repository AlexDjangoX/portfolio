import React from 'react';

import StarComponent from './Star';
import { TestimonialDetailsProps } from '@/types';

const TestimonialDetails: React.FC<TestimonialDetailsProps> = ({
  content,
  headingName,
  subheadingName,
  show,
}) => {
  const opacityClass = show ? 'opacity-100' : 'opacity-0';
  return (
    <div
      className={`flex flex-col transition-opacity duration-300 ease-in-out ${opacityClass}`}
    >
      <StarComponent count={5} />
      <p className="mb-[1.5rem] mt-[1rem] text-[1.125rem] font-normal leading-[1.95rem] text-white-500 dark:text-white-800">
        {content}
      </p>
      <p className="text-[1.125rem] font-semibold leading-[1.8rem] text-black-300 dark:text-white-900">
        {headingName}
      </p>
      <p className="text-[1.125rem] font-semibold leading-[1.8rem] text-white-500 dark:text-white-800">
        {subheadingName}
      </p>
    </div>
  );
};

export default TestimonialDetails;
