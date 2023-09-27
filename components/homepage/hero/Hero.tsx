import Image from 'next/image';

import HeroHeadingContent from './HeroHeadingContent';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white-800 px-[1.5rem] dark:bg-black-300 md:px-[5.3125rem] lg:flex-row 2xl:px-[11rem]">
      <HeroHeadingContent />

      <div className="relative mt-6 flex-1 lg:mt-[9.9375rem]">
        <Image
          src="/illustrations-png/3Dcomputer.png"
          alt="3D Computer"
          width="757"
          height="541"
        />
      </div>
    </section>
  );
};

export default Hero;
