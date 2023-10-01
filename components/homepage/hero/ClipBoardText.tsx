'use client';

import Image from 'next/image';

import { frame } from '@/public/assets';
import { ClipboardTextInterface } from '@/types';
import useClipboardText from '@/hooks/useClipboardText';

const ClipboardText = ({ text }: ClipboardTextInterface) => {
  const { handleCopyClick } = useClipboardText(text);

  return (
    <div
      onClick={handleCopyClick}
      className="flex w-full cursor-pointer items-center justify-center rounded-full bg-white-900  p-2 px-4 text-center text-white-500  dark:bg-black-200 dark:text-white-900"
    >
      <p className="text-[0.875rem] font-semibold leading-[1.375rem] md:text-[1.125rem]">
        {text}
      </p>
      <Image className="mx-6" src={frame} alt="frame" width={21} height={21} />
    </div>
  );
};

export default ClipboardText;
