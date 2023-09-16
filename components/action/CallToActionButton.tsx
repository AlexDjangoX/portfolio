import Link from 'next/link';
import Image from 'next/image';
import { arrow } from '@/public/assets';

const CallToActionButton = () => {
  return (
    <Link className="md:mr-[2.25rem]" href="/work">
      <button className="w-full min-w-[8rem] rounded-full bg-primary-light px-4 py-2 text-center text-[0.875rem] font-semibold leading-[1.625rem] text-white-900 dark:bg-primary-dark md:mb-4 md:text-[1.125rem] ">
        <div className="flex items-center justify-center">
          <p className="mr-4">Get in touch with me</p>
          <Image src={arrow} alt="arrow" width={35} height={1} />
        </div>
      </button>
    </Link>
  );
};

export default CallToActionButton;
