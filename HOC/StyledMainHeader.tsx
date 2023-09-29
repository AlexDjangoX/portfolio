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
      className={`bg-black-300 text-[1.6rem] font-bold leading-[3.0rem] tracking-[-0.42px] text-white-900 sm:text-[2.625rem] lg:text-[3.8rem] lg:leading-[5.2rem] lg:tracking-[0.64px] ${className}`}
    >
      {mainTextParts}
      {highlightedComponent && (
        <div
          className={`relative inline-flex items-center whitespace-nowrap ${highlightClassName}`}
        >
          {highlightedComponent}
          <div className="absolute z-10 mt-8 h-[1.02rem] w-full rounded-sm bg-secondary-dark sm:h-[1.1rem] lg:mt-12 lg:h-[1.6rem]" />
        </div>
      )}
    </h1>
  );
};

export default StyledMainHeader;
