import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center px-10 py-8 pt-12">
      <Image
        src="https://i.ibb.co/ck1SGFJ/Group.png"
        alt="Background Illustration"
        width={400}
        height={400}
      />
      <h1 className="my-2 text-2xl font-bold text-gray-800 dark:text-white-800">
        Looks like you have found the doorway to the great nothing
      </h1>

      <p className="my-2 text-gray-800 dark:text-white-800">
        Sorry about that! Please visit our homepage to get where you need to be.
      </p>
      <Link href="/" className="mt-4 flex justify-center">
        <button className="my-2 rounded border bg-indigo-600 px-8 py-4 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 sm:w-full lg:w-auto">
          Homepage
        </button>
      </Link>
      <div className="p-6">
        <Image
          src="https://i.ibb.co/G9DC8S0/404-2.png"
          alt="Error Illustration"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
