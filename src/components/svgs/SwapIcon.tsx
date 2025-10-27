import React from 'react';

interface SwapIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const SwapIcon: React.FC<SwapIconProps> = ({
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
        d="M20.109 6.08256L23.9111 9.8847L23.942 9.90676L20.1266 13.7133L20.0693 13.7707L19.809 14.0353V13.2017C19.7845 12.301 20.1175 11.4272 20.7353 10.7713L20.775 10.7272H8.56138C7.30687 10.7231 6.0807 10.3537 5.03271 9.66416L4.61809 9.39069L4.14613 9.08193H20.7573L20.6824 9.00695C20.3833 8.68741 20.1513 8.3113 19.9998 7.90073C19.8483 7.49017 19.7804 7.05345 19.8002 6.61627V5.7738L20.056 6.02963L20.109 6.08256ZM23.0995 18.3623L23.4788 18.6314L23.9111 18.9666H7.29986L7.36602 19.0151C7.66463 19.335 7.89645 19.7111 8.04792 20.1216C8.1994 20.5321 8.26748 20.9687 8.24819 21.4058V22.2306L7.99236 21.9748L7.93943 21.9175L4.14611 18.1197H4.12405L7.93061 14.3088L7.98795 14.2514L8.24819 13.9912V14.8248C8.2722 15.7254 7.93925 16.599 7.32191 17.2552L7.28221 17.2949H19.8487C21.0173 17.3015 22.1544 17.6749 23.0995 18.3623Z"
      />
    </svg>
  );
};
