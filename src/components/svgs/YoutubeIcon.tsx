import React from 'react';

interface YoutubeIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const YoutubeIcon: React.FC<YoutubeIconProps> = ({
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
        d="M24.7937 11.8019C24.5556 10.9686 23.9603 10.3733 23.127 10.1352C21.6984 9.77808 15.627 9.77808 15.627 9.77808C15.627 9.77808 9.67462 9.77808 8.127 10.1352C7.29366 10.3733 6.69842 10.9686 6.46032 11.8019C6.22223 13.3495 6.22223 16.4447 6.22223 16.4447C6.22223 16.4447 6.22223 19.54 6.57938 21.0876C6.81747 21.9209 7.4127 22.5162 8.24603 22.7543C9.67461 23.1114 15.746 23.1114 15.746 23.1114C15.746 23.1114 21.6984 23.1114 23.246 22.7543C24.0794 22.5162 24.6746 21.9209 24.9127 21.0876C25.2699 19.54 25.2698 16.4447 25.2698 16.4447C25.2698 16.4447 25.2699 13.3495 24.7937 11.8019ZM13.8413 19.3019V13.5876L18.8413 16.4447L13.8413 19.3019Z"
      />

    </svg>
  );
};
