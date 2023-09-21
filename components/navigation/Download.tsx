'use client';

import DownloadIcon from '../reusable/DownloadIcon';
import useDownloadResume from '@/hooks/useDownloadResume';

const DownloadResume = () => {
  const { resumeUrl, error } = useDownloadResume();

  if (!resumeUrl || error) {
    return null;
  }

  return (
    <a
      className="flex items-center "
      href={resumeUrl}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      <DownloadIcon />
      <p className="ml-1 text-[0.785rem] font-normal text-black-200 dark:text-white-900">
        Resume
      </p>
    </a>
  );
};

export default DownloadResume;
