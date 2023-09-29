import Image from 'next/image';
import Link from 'next/link';

import { contactReplyImage } from '@/public/assets-png';
import MotionWrapper from '@/HOC/MotionWrapper';
import StyledMainHeader from '@/HOC/StyledMainHeader';
import Highlight from '../reusable/Highlight';

const SuccessPage = () => (
  <section className="flex h-screen w-screen flex-col items-center justify-center bg-black-300 ">
    <MotionWrapper
      aria-label="Successful email card"
      direction="left"
      type="spring"
      delay={0.1}
      duration={1.75}
      className="flex items-center justify-center"
    >
      <StyledMainHeader className="sm:text-[3.6]">
        Thank you for your <Highlight>interest</Highlight>
      </StyledMainHeader>
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
      <StyledMainHeader className="sm:text:[1.8rem]">
        I will reply as soon <Highlight className="mr-2">as possible</Highlight>
      </StyledMainHeader>
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

export default SuccessPage;
