import Link from 'next/link';

import { GitIcon } from '../../icons/GitIcon';
import { WorldIcon } from '../../icons/WorldIcon';
import { BlueArrowIcon } from '../../icons/BlueArrowIcon';
import { DetailsLinksType } from '@/types';

const DetailsLinks = ({ demoSite, sourceCode }: DetailsLinksType) => (
  <div className="flex items-center justify-center bg-white-800 pb-[3rem] pt-[1.563rem] dark:bg-black-300 md:pb-[4.125rem]">
    <Link
      className="mr-[2.563rem] flex items-center text-[0.874rem] font-semibold text-primary-light dark:text-primary-dark md:text-[1.25rem]"
      href={demoSite}
      target={'_blank'}
    >
      <WorldIcon className="mr-2" height={20} width={20} />
      <p className="mx-2">Demo Site</p>
      <BlueArrowIcon />
    </Link>

    <Link
      className="flex items-center text-[0.874rem] font-semibold text-primary-light dark:text-primary-dark md:text-[1.25rem]"
      href={sourceCode}
      target={'_blank'}
    >
      <GitIcon className="mr-2" height={20} width={20} />
      <p className="mx-2">Source Code</p>
      <BlueArrowIcon />
    </Link>
  </div>
);

export default DetailsLinks;
