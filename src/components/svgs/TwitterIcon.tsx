import React from 'react';

interface TwitterIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const TwitterIcon: React.FC<TwitterIconProps> = ({
  className = '',
  width = 32,
  height = 32,
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
      fill="none"
      viewBox="0 0 32 32"
      role={role}
      aria-hidden={ariaHidden}
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.9027 14.8923L25.3482 6.00024H23.5838L17.119 13.7211L11.9555 6.00024H6L13.8082 17.6755L6 27.0002H7.76443L14.5915 18.8468L20.0445 27.0002H26L17.9023 14.8923H17.9027ZM15.4861 17.7784L14.695 16.6158L8.40018 7.36491H11.1102L16.1902 14.8307L16.9813 15.9933L23.5847 25.6976H20.8746L15.4861 17.7789V17.7784Z"
      />

    </svg>
  );
};
