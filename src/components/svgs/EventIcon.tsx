import React from 'react';

interface EventIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const EventIcon: React.FC<EventIconProps> = ({
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
        d="M12.678 19.628V7.783h5.671V19.27l.477-.543c.572-.65.874-1.396.876-2.158v-9.2a.94.94 0 0 0-.94-.939h-.228V4.618c0-.617-.342-1.166-.898-1.437a1.585 1.585 0 0 0-1.658.155L11.995 5.92 8.012 3.336a1.585 1.585 0 0 0-1.658-.155c-.553.269-.899.82-.899 1.437V6.43H5.23a.94.94 0 0 0-.94.94v12.675a.94.94 0 0 0 .94.939l11.764-.005c.764 0 1.512-.305 2.165-.876l.543-.48-7.032.005h.008ZM16.79 4.425a.239.239 0 0 1 .257-.028c.05.025.137.086.137.218v1.813H13.71l3.082-2.003h-.003Zm-9.974.19c0-.132.087-.193.137-.218a.234.234 0 0 1 .257.028l3.082 2.003H6.816V4.615Zm4.504 15.013H5.648V7.783h5.672v11.845Z"
      />
    </svg>
  );
};
