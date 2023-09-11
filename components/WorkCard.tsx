import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
  imageSrc: string;
};

const WorkCard: React.FC<Props> = ({ title, description, imageSrc }) => {
  return (
    <div className=" flex h-[122px] max-w-[607px] items-center bg-black-200">
      <Image
        className="m-[32px]"
        src={imageSrc}
        alt="WorkCard Image"
        width={32}
        height={32}
      />
      <div className="ml-[64px]">
        <h3 className="text-[24px] font-semibold leading-[130%] text-white-900">
          {title}
        </h3>
        <p className="text-[14px] font-normal leading-[155%] text-white-800">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
