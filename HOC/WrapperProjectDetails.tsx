import { WrapperInterface } from '@/types';

const WrapperProjectDetails = ({
  children,
  additionalStyles = '',
}: WrapperInterface) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center overflow-hidden px-[1.5rem] py-[2.625rem] md:px-[5rem]  ${additionalStyles}`}
    >
      <div className="w-full max-w-3xl ">{children}</div>
    </div>
  );
};

export default WrapperProjectDetails;
