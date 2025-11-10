import React from 'react';

interface KoreanAirLogoIconProps {
  className?: string;
  width?: number;
  height?: number;
  role?: string;
  'aria-hidden'?: boolean;
}

export const KoreanAirLogoIcon: React.FC<KoreanAirLogoIconProps> = ({
  className = '',
  width = 40,
  height = 40,
  role = 'none',
  'aria-hidden': ariaHidden = true,
  ...props
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={role}
      aria-hidden={ariaHidden}
      {...props}
    >
      <g id="Logo">
        <g id="logo">
          <g id="Group 24">
            <mask
              id="mask0_407_41521"
              style={{ maskType: 'luminance' }}
              maskUnits="userSpaceOnUse"
              x="5"
              y="5"
              width="29"
              height="30"
            >
              <path
                id="Clip 23"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.12823 5.12817H33.3101V34.8717H5.12823V5.12817Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_407_41521)">
              <path
                id="Fill 22"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.09128 27.302L6.97224 27.3839C9.39639 31.8528 13.9844 34.8718 19.2191 34.8718C27.0045 34.8718 33.3101 28.2092 33.3101 20.0001C33.3101 17.7394 32.3732 15.8359 31.2653 14.3933C29.793 12.4748 27.6961 11.5528 25.6066 11.5379C23.8815 11.5231 22.097 12.1031 20.8401 13.2407C19.405 14.542 19.0853 16.2152 18.7135 18.9292C18.3046 21.9036 15.9102 23.9559 12.8318 23.9559C8.84609 23.9559 6.37747 21.5021 6.54097 17.7469C6.55592 17.4866 6.57815 17.2265 6.62282 16.9737C7.37381 12.5419 12.1403 7.96884 19.3084 7.9836C24.1194 7.9836 27.7332 9.06178 31.3471 12.6979L31.4662 12.6163C29.042 8.14729 24.4615 5.12817 19.2191 5.12817C11.4412 5.12817 5.12811 11.7907 5.12811 20.0001C5.12811 22.2605 6.06503 24.1641 7.17312 25.6066C8.63792 27.5251 10.7424 28.4396 12.8318 28.4621C14.5569 28.4843 16.3415 27.8968 17.5981 26.7592C19.0334 25.4579 19.3531 23.7849 19.7248 21.0708C20.1338 18.0963 22.5355 16.044 25.6066 16.044C29.5996 16.044 32.0684 18.4979 31.9047 22.253C31.89 22.5133 31.8675 22.7736 31.8231 23.0265C31.0571 27.4582 26.3131 32.0313 19.13 32.0163C14.3189 32.0163 10.7052 30.9382 7.09128 27.302"
                fill="currentColor"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
