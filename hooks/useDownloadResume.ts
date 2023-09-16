'use client';

import { useState, useEffect } from 'react';

import { getProfile } from '@/sanity/sanity.query';

const useDownloadResume = () => {
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  return { resumeUrl, error };
};

export default useDownloadResume;
