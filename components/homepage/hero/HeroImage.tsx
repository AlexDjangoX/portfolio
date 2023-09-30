import Image from 'next/image';

import HeroHeadingContent from './HeroHeadingContent';

const Hero = () => (
  <section className="flex flex-col items-center justify-center overflow-hidden bg-white-800 px-[1.5rem] dark:bg-black-300 md:px-[5.3125rem] xl:flex-row xl:pr-[0] 2xl:px-[8rem]">
    <HeroHeadingContent />

    <div className="mt-6 grow xl:mt-[9.9375rem] ">
      <Image
        src="/illustrations-png/3Dcomputer.png"
        alt="3D Computer"
        width="757"
        height="541"
      />
    </div>
  </section>
);

export default Hero;
