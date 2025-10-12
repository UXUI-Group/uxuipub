import React from 'react';

interface MenuIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const MenuIcon: React.FC<MenuIconProps> = ({
  className = '',
  width = 28,
  height = 28,
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
      viewBox="0 0 28 28"
      role={role}
      aria-hidden={ariaHidden}
      {...props}
    >
      <path
        fill="currentColor"
        d="M22.417 21.246H5.5v-1.649h16.917v1.649Zm0-6.548H5.5v-1.65h16.917v1.65Zm0-8.198v1.649H5.5v-1.65h16.917Z"
      />
    </svg>
  );
};
