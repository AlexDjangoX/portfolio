import React from 'react';

type HighlightProps = {
  children: React.ReactNode;
  className?: string;
};

const Highlight = ({ children, className }: HighlightProps) => {
  return <span className={className}>{children}</span>;
};

export default Highlight;
