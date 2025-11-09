import React from 'react';

interface SearchIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const SearchIcon: React.FC<SearchIconProps> = ({
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
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m14.538 13.934 6.212 6.316-.491-.117-.43-.103a6.081 6.081 0 0 1-2.823-1.56l-.09-.09-3.368-3.425c.366-.302.698-.645.99-1.021ZM9.573 3.5c3.486 0 6.323 2.89 6.323 6.444 0 3.553-2.837 6.443-6.323 6.443S3.25 13.497 3.25 9.944C3.25 6.39 6.087 3.5 9.573 3.5Zm0 1.289c-2.79 0-5.058 2.312-5.058 5.155 0 2.842 2.269 5.154 5.058 5.154 2.79 0 5.059-2.312 5.059-5.154 0-2.843-2.27-5.155-5.059-5.155Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
