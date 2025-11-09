import React from 'react';

interface FacebookIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const FacebookIcon: React.FC<FacebookIconProps> = ({
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
        d="M22.2281 20.6252L22.9375 16.0002H18.5V12.999C18.5 11.7337 19.12 10.5002 21.1075 10.5002H23.125V6.56274C23.125 6.56274 21.2941 6.25024 19.5434 6.25024C15.8888 6.25024 13.5 8.46524 13.5 12.4752V16.0002H9.4375V20.6252H13.5V31.8059C14.3147 31.9337 15.1494 32.0002 16 32.0002C16.8506 32.0002 17.6853 31.9337 18.5 31.8059V20.6252H22.2281Z"
      />

    </svg>
  );
};
