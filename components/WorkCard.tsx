import React from 'react';
import Image from 'next/image';

type Props = {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
};

const WorkCard: React.FC<Props> = ({
  title,
  subtitle,
  description,
  imageSrc,
}) => {
  return (
    <div className="mb-[1.5rem] flex h-full w-full flex-col items-center bg-white-800 dark:bg-black-200">
      <div className="flex w-full items-center justify-start">
        <Image
          className="m-[1.5rem]"
          src={imageSrc}
          alt="WorkCard Image"
          width={58}
          height={58}
        />

        <h3 className="font-semibold leading-[130%] text-black-200 dark:text-white-900 md:text-[1.5rem]">
          {title}
        </h3>
        <p className="ml-4 dark:text-white-800">{subtitle}</p>
      </div>
      <p className="ml-[1.5rem] pr-8 font-normal leading-[155%] text-white-500 dark:text-white-900 md:text-[0.875rem]">
        {description}
      </p>
    </div>
  );
};

export default WorkCard;
