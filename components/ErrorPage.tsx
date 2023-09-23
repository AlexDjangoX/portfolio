import Image from 'next/image';
import Link from 'next/link';

import { errorImage } from '@/public/assets-png';

const ErrorPage = () => {
  return (
    <section className=" flex h-full w-full flex-col items-center justify-center bg-error-background px-10   pt-16">
      <header>
        <h1 className="my-2 pt-8 text-2xl font-bold text-gray-800 dark:text-gray-700">
          Looks like you have found the doorway to the great nothing
        </h1>
        <Image
          src={errorImage}
          alt="error-image-broken-connection"
          width={200}
          height={200}
        />
      </header>

      <p className="my-2 text-gray-800 dark:text-gray-700">
        Sorry about that! Please visit our homepage to get where you need to be.
      </p>
      <Link href="/" className="mt-4 flex justify-center">
        <button className="my-2 rounded border bg-indigo-600 px-8 py-4 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 sm:w-full lg:w-auto">
          Homepage
        </button>
      </Link>
      <div className="p-3">
        <p className="text-7xl dark:text-gray-700">404</p>
      </div>
    </section>
  );
};

export default ErrorPage;
