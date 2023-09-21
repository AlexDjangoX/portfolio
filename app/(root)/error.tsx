'use client';

import { useEffect } from 'react';

import ErrorPage from '@/components/ErrorPage';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <ErrorPage />
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
