'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { download, downloadLight } from '../public/assets/index';
import { useData } from '@/context/dataContext';

const DownloadResume: React.FC = () => {
  const { theme } = useTheme();
  const imgSrc = theme === 'dark' ? downloadLight : download;

  const { profile } = useData();
  const resumeURL = profile?.[0]?.resumeURL;

  if (!resumeURL) {
    return null;
  }

  return (
    <a
      className="flex items-center"
      href={resumeURL}
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
