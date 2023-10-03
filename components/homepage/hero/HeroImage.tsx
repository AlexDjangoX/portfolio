import Image from 'next/image';

import HeroHeadingContent from './HeroHeadingContent';

const Hero = () => (
  <section className="bg-white-800 dark:bg-black-300">
    <div className="flex flex-col items-center justify-center overflow-hidden px-[1.5rem] md:px-[5.3125rem]  xl:flex-row xl:items-center  2xl:mx-auto 2xl:max-w-[90rem]">
      <HeroHeadingContent />

      <div className="flex xl:mt-[9.9375rem]">
        <Image
          src="/illustrations-png/3Dcomputer.png"
          alt="3D Computer"
          width="757"
          height="541"
        />
      </div>
    </div>
  </section>
);

export default Hero;
