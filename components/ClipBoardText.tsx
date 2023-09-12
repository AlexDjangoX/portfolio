'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import { frame } from '@/public/assets';
import { ToastContext } from '@/components/toast/ToastContext';

interface ClipboardTextProps {
  text: string;
}

const ClipboardText: React.FC<ClipboardTextProps> = ({ text }) => {
  const showToast = useContext(ToastContext);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (showToast) {
          showToast('Success, email copied to clipboard!', 'success');
        }
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div
      onClick={handleCopyClick}
      className="flex w-full cursor-pointer items-center justify-center rounded-full bg-white-900 px-4 py-2 text-center text-baseplus font-semibold leading-leadingRelaxed text-white-500 dark:bg-black-200 dark:text-white-900"
    >
      <span className="md:[1.125rem] flex-1 font-semibold text-[0.875] ">
        {text}
      </span>
      <Image className="mx-6" src={frame} alt="frame" width={21} height={21} />
    </div>
  );
};

export default ClipboardText;
