'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { download, downloadLight } from '../public/assets/index';
import { getProfile } from '@/sanity/sanity.query';

const DownloadResume: React.FC = () => {
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();
  const imgSrc = theme === 'dark' ? downloadLight : download;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProfile();
        setResumeUrl(data?.[0]?.resumeURL);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to fetch profile.');
      }
    }

    fetchData();
  }, []);

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
