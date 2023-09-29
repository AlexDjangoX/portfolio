'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Error Page</title>
      </head>
      <body className="bg-gray-100 p-10 text-center font-sans">
        <div className="mx-auto max-w-xl rounded-md bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
          <p className="mb-6 text-red-500">{error.message}</p>
          <button
            onClick={reset}
            className="rounded-md bg-red-500 px-6 py-3 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
