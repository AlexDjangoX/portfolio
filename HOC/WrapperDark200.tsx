import { WrapperDark200Interface } from '@/types';

const WrapperDark200 = ({ children }: WrapperDark200Interface) => (
  <section className="flex w-full items-center justify-center bg-white-800 px-[1.2rem] py-[4.5rem] dark:bg-black-300 md:px-[5.3125rem]">
    <div className="max-w-[80rem]">{children}</div>
  </section>
);

export default WrapperDark200;
