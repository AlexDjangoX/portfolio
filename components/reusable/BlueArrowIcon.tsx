import { IconType } from '@/types';

export const BlueArrowIcon = ({
  className,
  height = 24,
  width = 24,
}: IconType) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6663 8.2666L20.3996 11.9999M20.3996 11.9999L16.6663 15.7333M20.3996 11.9999H3.59961"
      className="stroke-primary-light dark:stroke-primary-dark"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
