import React from 'react';
import './quicklink_styles/quicklink.scss';

export interface QuicklinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  hasSublinks?: boolean;
  type?: 'button' | 'submit' | 'reset';
  'aria-controls'?: string;
  'aria-expanded'?: boolean;
  id?: string; // id 속성 추가
}

const Quicklink: React.FC<QuicklinkProps> = ({
  href,
  children,
  className = '',
  target = '_self',
  rel,
  onClick,
  hasSublinks = false,
  type = 'button',
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }
  };

  // 서브링크가 있는 경우 버튼으로 렌더링
  if (hasSublinks) {
    return (
      <button
        type={type}
        className={`quicklink ${className}`}
        onClick={handleClick}
        aria-controls={ariaControls}
        aria-expanded={ariaExpanded}
      >
        {children}
      </button>
    );
  }

  // 일반 링크로 렌더링
  return (
    <a
      href={href}
      className={`quicklink ${className}`}
      target={target}
      rel={rel}
      onClick={handleClick}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
    >
      {children}
    </a>
  );
};

export default Quicklink;
