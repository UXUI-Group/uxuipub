import React from 'react';

interface LightModeIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const LightModeIcon: React.FC<LightModeIconProps> = ({
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
      fill="none"
      viewBox="0 0 24 24"
      role={role}
      aria-hidden={ariaHidden}
      {...props}
    >
      <circle cx="12" cy="12" r="5" fill="currentColor" />
      <path
        d="M12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
