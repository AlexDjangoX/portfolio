import Image from 'next/image';

import { FigmaType } from '@/types';

const FigmaDesign = ({ figmaDesignUrl, figmaDesignAlt }: FigmaType) => (
  <div>
    <div className="flex h-[6.6rem] w-full items-center justify-center bg-primary-light dark:bg-primary-dark">
      <p className=" text-[0.875rem] font-semibold leading-[145%] tracking-[-0.16px] text-white-900 md:text-[2rem] md:leading-[105%]">
        HIGH FIDELITY FIGMA DESIGN
      </p>
    </div>
    <Image
      className="h-[30rem] w-full object-cover "
      src={figmaDesignUrl}
      alt={figmaDesignAlt}
      width={500}
      height={300}
    />
  </div>
);

export default FigmaDesign;
