import React from 'react';

import Highlight from '@/components/reusable/Highlight';
import { HighlightedHeaderProps } from '@/types/index';

const StyledMainHeader: React.FC<HighlightedHeaderProps> = ({
  children,
  className,
  highlightClassName,
}) => {
  let highlightedComponent: React.ReactNode = null;
  const mainTextParts: React.ReactNode[] = [];

  React.Children.forEach(
    children as React.ReactElement<HighlightedHeaderProps>[],
    (child) => {
      if (React.isValidElement(child) && child.type === Highlight) {
        highlightedComponent = React.cloneElement(child, {
          className: 'relative z-20 ' + (child.props.className || ''),
        });
      } else {
        mainTextParts.push(child);
      }
    }
  );

  return (
    <h1
      className={`bg-black-300 px-[1.5rem] text-center text-[2.625rem] font-bold leading-[115%] tracking-[-0.42px] text-white-900 md:px-[5.4rem] md:text-[4rem]  md:leading-[130%] md:tracking-[0.64px] ${className}`}
    >
      {mainTextParts}
      {highlightedComponent && (
        <div
          className={`relative inline-flex items-center whitespace-nowrap ${highlightClassName}`}
        >
          {highlightedComponent}
          <div className="absolute z-10 mt-8 h-[1.02rem] w-full rounded-sm bg-secondary-dark sm:h-[1.1rem] md:mt-12 md:h-[1.6rem]" />
        </div>
      )}
    </h1>
  );
};

export default StyledMainHeader;
