import Image from 'next/image';
import Link from 'next/link';

import { FooterLinksType } from '@/types';

const FooterLinks = ({ iconSrc, href }: FooterLinksType) => (
  <Link href={href} target="_blank">
    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-black-400 dark:bg-transparent">
      <Image src={iconSrc} alt="social icon" width={24} height={24} />
    </div>
  </Link>
);

export default FooterLinks;
