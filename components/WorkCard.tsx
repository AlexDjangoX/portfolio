import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  imageSrc: string;
};

const WorkCard: React.FC<Props> = ({ title, description, imageSrc }) => {
  return (
    <div className=" flex h-[122px] max-w-[607px] items-center bg-white-800 dark:bg-black-200">
      <Image
        className="m-[24px]"
        src={imageSrc}
        alt="WorkCard Image"
        width={58}
        height={58}
      />
      <div className="">
        <h3 className="text-[24px] font-semibold leading-[130%] text-black-200 dark:text-white-900">
          {title}
        </h3>
        <p className="text-[14px] font-normal leading-[155%] text-white-500 dark:text-white-900">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
