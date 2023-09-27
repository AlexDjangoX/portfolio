import { HeadingType } from '@/types';

const SectionHeading = ({
  subHeading,
  mainHeading,
  additionalStylesMainHeading,
  additionalStylesSubHeading,
}: HeadingType) => {
  return (
    <>
      <p
        className={`${additionalStylesSubHeading} pb-[0.625rem] text-[0.75rem] font-semibold leading-[145%] text-primary-light dark:text-primary-dark md:text-[0.875rem]`}
      >
        {subHeading}
      </p>
      <h4
        className={`${additionalStylesMainHeading}  font-semibold dark:text-white-900  md:text-[2rem] md:leading-[105%] md:tracking-[-0.16px]`}
      >
        {mainHeading}
      </h4>
    </>
  );
};

export default SectionHeading;
