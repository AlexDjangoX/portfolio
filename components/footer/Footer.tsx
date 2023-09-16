import Image from 'next/image';
import Link from 'next/link';

import { icons } from '@/utils/constants';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center px-[1.5rem] py-[3rem] leading-[160%] text-black-400 dark:bg-black-200 dark:text-white-800 md:flex-row md:justify-between md:px-[5.3rem] md:py-[3.25rem] ">
      <p>© 2023 Alexander Mc Lachlan. All rights reserved.</p>
      <div className="mt-[0.5rem] flex gap-6">
        {icons.map((icon) => (
          <Link key={icon.src.toString()} href={icon.href} target="_blank">
            <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black-400 dark:bg-transparent">
              <Image src={icon.src} alt="social icon" width={24} height={24} />
            </div>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
