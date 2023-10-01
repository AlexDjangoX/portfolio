import Image from 'next/image';

import { arrow } from '@/public/assets';

type CustomButtonProps = {
  title: string;
};

const CustomButton = ({ title }: CustomButtonProps) => (
  <button className="group w-full min-w-[8rem] rounded-full bg-primary-light px-4 py-2 text-center text-[0.875rem] font-semibold leading-[1.625rem] text-white-900 dark:bg-primary-dark md:mb-4 md:text-[1.125rem]">
    <div className="flex items-center justify-center">
      <p className="mr-4">{title}</p>
      <div className="translate-image group-hover:translate-x-2">
        <Image src={arrow} alt="arrow" width={35} height={1} />
      </div>
    </div>
  </button>
);

export default CustomButton;
