import React, { useState, useEffect } from 'react';
import Quicklink from './Quicklink';
import './quicklink_styles/quicklink.scss';

export interface QuicklinkSubItem {
  id: string;
  href: string;
  label: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  className?: string;
  icon?: React.ReactNode;
}

export interface QuicklinkItem {
  id: string;
  href?: string;
  label: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  className?: string;
  sublinks?: QuicklinkSubItem[];
  icon?: React.ReactNode;
}

export interface QuicklinkGroupProps {
  links: QuicklinkItem[];
  className?: string;
  layout?: 'horizontal' | 'vertical' | 'grid';
  variant?: 'default' | 'compact' | 'spacious';
  onLinkClick?: (link: QuicklinkItem, event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  onSubLinkClick?: (
    parentLink: QuicklinkItem,
    subLink: QuicklinkSubItem,
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => void;
}

const QuicklinkGroup: React.FC<QuicklinkGroupProps> = ({
  links,
  className = '',
  layout = 'horizontal',
  variant = 'default',
  onLinkClick,
  onSubLinkClick,
}) => {
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1059);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // quicklink-sublinks가 실제로 열렸을 때만 quicklinks 섹션의 높이 조정 (PC에서만)
  useEffect(() => {
    const quicklinksSection = document.querySelector('.quicklinks') as HTMLElement;
    // 열려있는 서브메뉴가 실제로 존재하는지 확인
    const openedLink = links.find(link => link.id === openSubmenu && link.sublinks && link.sublinks.length > 0);
    if (quicklinksSection && !isMobile && openedLink) {
      quicklinksSection.style.paddingBottom = '10rem';
    } else if (quicklinksSection && !isMobile) {
      quicklinksSection.style.paddingBottom = '5rem';
    } else if (quicklinksSection && isMobile) {
      quicklinksSection.style.paddingBottom = '';
    }
  }, [openSubmenu, isMobile, links]);

  const handleLinkClick = (link: QuicklinkItem, event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (onLinkClick) {
      onLinkClick(link, event);
    }
  };

  const handleSubLinkClick = (
    parentLink: QuicklinkItem,
    subLink: QuicklinkSubItem,
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (onSubLinkClick) {
      onSubLinkClick(parentLink, subLink, event);
    }
  };

  const handleMouseEnter = (linkId: string) => {
    if (!isMobile) {
      // 기존 타이머 클리어
      if (closeTimer) {
        clearTimeout(closeTimer);
        setCloseTimer(null);
      }
      setOpenSubmenu(linkId);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      // 새로운 타이머 설정
      const timer = setTimeout(() => {
        setOpenSubmenu(null);
      }, 150);
      setCloseTimer(timer);
    }
  };

  const handleSubmenuMouseEnter = () => {
    if (!isMobile) {
      // 서브메뉴에 마우스가 들어오면 타이머 클리어
      if (closeTimer) {
        clearTimeout(closeTimer);
        setCloseTimer(null);
      }
    }
  };

  const handleSubmenuMouseLeave = () => {
    if (!isMobile) {
      setOpenSubmenu(null);
    }
  };

  const handleFocus = (linkId: string) => {
    if (!isMobile) {
      setOpenSubmenu(linkId);
    }
  };

  const handleBlur = (event: React.FocusEvent) => {
    if (!isMobile) {
      setTimeout(() => {
        const relatedTarget = event.relatedTarget;
        const currentTarget = event.currentTarget;

        if (
          relatedTarget &&
          relatedTarget instanceof Node &&
          currentTarget &&
          currentTarget.contains &&
          !currentTarget.contains(relatedTarget)
        ) {
          setOpenSubmenu(null);
        }
      }, 100);
    }
  };

  const handleButtonClick = (linkId: string) => {
    if (isMobile) {
      setOpenSubmenu(openSubmenu === linkId ? null : linkId);
    }
  };

  return (
    <div className={`quicklink-group quicklink-group--${layout} quicklink-group--${variant} ${className}`}>
      {links.map(link => (
        <div
          key={link.id}
          className={`quicklink-item ${openSubmenu === link.id ? 'quicklink-item--active' : ''}`}
          onMouseEnter={() => handleMouseEnter(link.id)}
          onMouseLeave={handleMouseLeave}
          onFocus={() => handleFocus(link.id)}
          onBlur={handleBlur}
        >
          <Quicklink
            href={link.href}
            target={link.target}
            rel={link.rel}
            className={`${link.className || ''} ${link.sublinks ? 'quicklink--has-sublinks' : ''}`}
            onClick={link.sublinks ? () => handleButtonClick(link.id) : event => handleLinkClick(link, event)}
            hasSublinks={!!link.sublinks}
            aria-controls={link.sublinks ? `sublinks-${link.id}` : undefined}
            aria-expanded={link.sublinks ? openSubmenu === link.id : undefined}
            id={`quicklink-${link.id}`}
          >
            {link.label}
            {link.icon && <span className="quicklink__icon">{link.icon}</span>}
          </Quicklink>

          {link.sublinks && (
            <div
              className={`quicklink-sublinks ${
                openSubmenu === link.id ? 'quicklink-sublinks--visible' : 'quicklink-sublinks--hidden'
              }`}
              id={`sublinks-${link.id}`}
              role="region"
              aria-labelledby={`quicklink-${link.id}`}
              onMouseEnter={handleSubmenuMouseEnter}
              onMouseLeave={handleSubmenuMouseLeave}
            >
              <ul className="quicklink-sublinks__list">
                {link.sublinks.map((subLink, index) => (
                  <li
                    key={subLink.id}
                    className={`quicklink-sublinks__item ${
                      index === link.sublinks!.length - 1 ? 'quicklink-sublinks__item--last' : ''
                    }`}
                  >
                    <Quicklink
                      href={subLink.href}
                      target={subLink.target}
                      rel={subLink.rel}
                      className={`quicklink-sublink ${subLink.className || ''}`}
                      onClick={event => handleSubLinkClick(link, subLink, event)}
                    >
                      {subLink.icon && <span className="quicklink-sublink__icon">{subLink.icon}</span>}
                      {subLink.label}
                    </Quicklink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuicklinkGroup;
