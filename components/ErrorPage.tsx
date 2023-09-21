import Image from 'next/image';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:px-44 md:py-20 lg:flex-row lg:p-24">
      <div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-2xl font-bold text-gray-800 dark:text-white-800">
                Looks like you havefound the doorway to the great nothing
              </h1>
              <div className="">
                <Image
                  src="https://i.ibb.co/G9DC8S0/404-2.png"
                  alt="Error Illustration"
                  width={200}
                  height={200}
                />
              </div>
              <p className="my-2 text-gray-800 dark:text-white-800">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>
              <Link href="/" className="ml-[85px] flex items-center">
                <button className="my-2 rounded border bg-indigo-600 px-8 py-4 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 sm:w-full lg:w-auto">
                  Take me there!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="https://i.ibb.co/ck1SGFJ/Group.png"
          alt="Background Illustration"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default ErrorPage;
