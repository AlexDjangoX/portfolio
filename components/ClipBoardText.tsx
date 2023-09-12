'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { frame } from '@/public/assets';

interface ClipboardTextProps {
  text: string;
}

const ClipboardText: React.FC<ClipboardTextProps> = ({ text }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div
      onClick={handleCopyClick}
      className="flex w-full cursor-pointer items-center justify-center rounded-full bg-white-900 px-4 py-2 text-center text-baseplus font-semibold leading-extraLoose text-white-500 dark:bg-black-200 dark:text-white-900"
    >
      <span className="flex-1">{text}</span>
      <Image className="mx-6" src={frame} alt="frame" width={21} height={21} />
      {isCopied && <span>Copied!</span>}
    </div>
  );
};

export default ClipboardText;
