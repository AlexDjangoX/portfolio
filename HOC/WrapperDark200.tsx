import React from 'react';

import { WrapperDark200Props } from '@/types';

const WrapperDark200: React.FC<WrapperDark200Props> = ({ children }) => (
  <section className="bg-white-800 px-[1.2rem] py-[4.5rem] dark:bg-black-300 md:px-[5.3125rem]">
    {children}
  </section>
);

export default WrapperDark200;
