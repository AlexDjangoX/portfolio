import { CircularText } from './CircularText';

const SpinText = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="relative flex h-auto w-[120px] items-center justify-center">
        <CircularText className="animate-spin-slow" />
      </div>
    </div>
  );
};

export default SpinText;
