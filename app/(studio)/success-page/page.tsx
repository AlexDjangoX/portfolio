import Image from 'next/image';
import Link from 'next/link';

import { contactReplyImage } from '@/public/assets-png';
import MotionWrapper from '@/HOC/MotionWrapper';

const SuccessPage = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center bg-black-300 ">
      <MotionWrapper
        aria-label="Successful email card"
        direction="left"
        type="spring"
        delay={0.1}
        duration={1.75}
        className="flex items-center justify-center"
      >
        <h1 className=" bg-black-300 text-[1.6rem] font-bold leading-[3.0rem]  tracking-[-0.42px] text-white-900 sm:text-[2.625rem] sm:text-[3.6]  lg:text-[3.8rem] lg:leading-[5.2rem] lg:tracking-[0.64px]">
          Thank you for your{' '}
          <div className="relative inline-flex items-center whitespace-nowrap">
            <p className="z-20">interest</p>
            <div className="absolute z-10 mt-8 h-[1.02rem] w-full  rounded-sm bg-secondary-dark sm:h-[1.1rem] lg:mt-12 lg:h-[1.6rem]" />
          </div>
        </h1>
      </MotionWrapper>
      <MotionWrapper
        aria-label="Successful email card"
        direction="right"
        type="spring"
        delay={0.1}
        duration={1.75}
      >
        <Image
          src={contactReplyImage}
          alt="Alexander working on his computer"
          width={400}
          height={400}
          className="py-12"
        />
      </MotionWrapper>
      <MotionWrapper
        aria-label="Successful email card"
        direction="left"
        type="spring"
        delay={0.1}
        duration={1.75}
        className="mb-[1.25rem] bg-black-200 sm:mb-[2.25rem]"
      >
        <h1 className=" sm:text:[1.8rem] bg-black-300 text-[1.6rem] font-bold  leading-[3.0rem] tracking-[-0.42px] text-white-900 sm:text-[2.625rem]  lg:text-[3.8rem] lg:leading-[5.2rem] lg:tracking-[0.64px]">
          I will reply{' '}
          <div className="relative inline-flex items-center whitespace-nowrap">
            <p className="z-20">as soon</p>
            <div className="absolute z-10 mt-8 h-[1.02rem] w-full  rounded-sm bg-secondary-dark sm:h-[1.1rem] lg:mt-12 lg:h-[1.6rem]" />
          </div>{' '}
          as possible
        </h1>
      </MotionWrapper>
      <MotionWrapper
        aria-label="Successful email card"
        direction="right"
        type="spring"
        delay={0.1}
        duration={1.75}
        className="mb-[1.25rem]  sm:mb-[2.25rem]"
      >
        <Link
          href="/"
          className="flex h-16  items-center justify-center rounded-full bg-primary-light px-8 py-2 text-2xl font-thin text-white-800 shadow-md hover:bg-primary-dark hover:text-white-900 hover:shadow-lg dark:bg-primary-dark"
        >
          Return to Homepage
        </Link>
      </MotionWrapper>
    </section>
  );
};

export default SuccessPage;
