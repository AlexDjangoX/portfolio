import Image from 'next/image';

type CardProps = {
  heading: string;
  content: string;
  imgSrcWhite?: string;
  imgSrcBlue?: string;
};

const SkillsCard = ({
  imgSrcWhite,
  imgSrcBlue,
  heading,
  content,
}: CardProps) => {
  return (
    <div className="group relative h-[16.5625rem] w-[18.125rem] rounded-md bg-white-900 p-4 transition duration-300 hover:translate-y-[1.2rem] hover:bg-primary-light dark:bg-black-200">
      <div className="absolute left-[1.5625rem] top-[1.875rem] flex h-[3.875rem] w-[3.875rem] items-center justify-center rounded-lg bg-primary-light transition-colors duration-300 group-hover:bg-white">
        <Image
          src={imgSrcWhite || '/assets/redux.svg'}
          alt={heading}
          width="20"
          height="20"
          className="object-cover group-hover:hidden"
        />
        <Image
          src={imgSrcBlue || '/assets/redux.svg'}
          alt={heading}
          width="20"
          height="20"
          className="hidden object-cover group-hover:block"
        />
      </div>
      <h2 className="mt-[5.75rem] text-[1.5rem] font-semibold leading-[1.9rem] text-black-200 transition-colors duration-300 group-hover:text-white-900 dark:text-white-900">
        {heading}
      </h2>
      <p className="mt-2 text-[0.875rem] leading-[1.375rem] text-white-500 transition-colors duration-300 group-hover:text-[#F3F8FF]">
        {content}
      </p>
    </div>
  );
};

export default SkillsCard;
