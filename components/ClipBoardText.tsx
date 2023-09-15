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
      className="flex w-full cursor-pointer items-center justify-center rounded-full bg-white-900  px-4 py-2 text-center text-white-500  dark:bg-black-200 dark:text-white-900"
    >
      <p className="flex-1  text-[0.875rem] font-semibold leading-[1.375rem] md:text-[1.125rem]">
        {text}
      </p>
      <Image className="mx-6" src={frame} alt="frame" width={21} height={21} />
    </div>
  );
};

export default ClipboardText;
