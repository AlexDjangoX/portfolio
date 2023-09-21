import ArrowRightIcon from './ArrowRightIcon';
import { ArrowRightControlType } from '@/types';

const ArrowRightControl = ({
  onClick,
  isHiddenOnLg = false,
}: ArrowRightControlType) => {
  let className =
    'mx-[0.4rem] h-[3rem] w-[3rem] cursor-pointer flex items-center justify-center rounded-full bg-white-900 px-[1rem] dark:bg-black-200';
  className += isHiddenOnLg ? ' lg:hidden' : ' hidden lg:flex';

  return (
    <div onClick={onClick} className={className}>
      <ArrowRightIcon />
    </div>
  );
};

export default ArrowRightControl;
