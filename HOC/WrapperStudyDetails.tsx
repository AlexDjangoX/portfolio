import React from 'react';

import { WrapperProps } from '@/types';
const WrapperStudyDetails: React.FC<WrapperProps> = ({
  children,
  additionalStyles = '',
}) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center  px-[1.5rem] py-[2.625rem]  md:px-[5rem] ${additionalStyles}`}
    >
      <div className="w-full max-w-3xl">{children}</div>
    </div>
  );
};

export default WrapperStudyDetails;
