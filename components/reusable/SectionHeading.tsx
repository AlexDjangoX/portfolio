import React, { ReactNode, ReactElement } from 'react';

import { SectionHeadingProps } from '@/types';
const SectionHeading: React.FC<SectionHeadingProps> = ({
  children,
  className,
}) => {
  let sub: ReactElement | null = null;
  let main: ReactNode | null = null;
  let subClasses: string | undefined;

  React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === 'sub') {
      sub = child;
      subClasses = child.props.className;
    } else {
      main = child;
    }
  });

  return (
    <>
      <p
        className={`${subClasses} pb-[0.625rem] text-[0.75rem] font-semibold leading-[145%] text-primary-light dark:text-primary-dark md:text-[0.875rem]`}
      >
        {sub}
      </p>
      <h4
        className={`${className} font-semibold dark:text-white-900 md:text-[2rem] md:leading-[105%] md:tracking-[-0.16px]`}
      >
        {main}
      </h4>
    </>
  );
};

export default SectionHeading;
