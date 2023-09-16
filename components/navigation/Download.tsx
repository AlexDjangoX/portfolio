'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { download, downloadLight } from '@/public/assets/index';
import useDownloadResume from '@/hooks/useDownloadResume';

const DownloadResume: React.FC = () => {
  const { theme } = useTheme();
  const imgSrc = theme === 'dark' ? downloadLight : download;

  const { resumeUrl, error } = useDownloadResume();

  if (!resumeUrl || error) {
    return null;
  }

  return (
    <a
      className="flex items-center"
      href={resumeUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image className="" src={imgSrc} height={20} width={20} alt="download" />
      <p className="ml-1 text-[0.785rem] font-normal text-black-200 dark:text-white-900">
        Resume
      </p>
    </a>
  );
};

export default DownloadResume;
