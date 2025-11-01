import React from 'react';

interface ArrowLeftIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const ArrowLeftIcon: React.FC<ArrowLeftIconProps> = ({
  className = '',
  width = 24,
  height = 24,
  role = 'none',
  'aria-hidden': ariaHidden = true,
  ...props
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 96 96"
      fill="none"
      role={role}
      aria-hidden={ariaHidden}
      {...props}
    >
      <g clipPath="url(#clip0_9_16853)">
        <path
          d="M50.1472 28.9602L54.306 33.1492L39.3041 47.9999L55.7427 64.5443L51.5536 68.7031L30.926 47.9697L50.1472 28.9602Z"
          fill="currentColor"
        />
        <path
          d="M59.0701 28.3857C60.1215 27.2402 60.9313 25.8945 61.4509 24.429C61.9706 22.9636 62.1895 21.4084 62.0946 19.8564V16.9074L61.1873 17.8148L60.9907 18.0114L45.8678 33.1342L50.0871 37.3687L59.0701 28.3857Z"
          fill="currentColor"
        />
        <path
          d="M59.0699 67.7654C60.1236 68.9094 60.9347 70.2549 61.4545 71.7207C61.9743 73.1866 62.192 74.7425 62.0945 76.2947V79.2437L61.1871 78.3363L60.9905 78.1397L45.8677 63.0168L50.0869 58.7975L59.0699 67.7654Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_9_16853">
          <rect width="96" height="96" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
