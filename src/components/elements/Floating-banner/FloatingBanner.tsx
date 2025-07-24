import React, { useState } from 'react';
import './Floating-banner_styles/FloatingBanner.scss';

export interface FloatingBannerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export const FloatingBanner = ({ children, style, className }: FloatingBannerProps) => {
  const [visible, setVisible] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 1초 동안 스크롤 상단으로 이동하는 애니메이션 함수
  const scrollToTopAnimated = () => {
    const duration = 1000;
    const start = window.scrollY || window.pageYOffset;
    const startTime = performance.now();

    function animateScroll(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }
    requestAnimationFrame(animateScroll);
  };

  // 스크롤 상단 이동 함수
  const handleScrollTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if ((window.scrollY || window.pageYOffset) === 0) return;
    scrollToTopAnimated();
  };

  // 확장/축소 토글 함수
  const handleExpanderClick = () => {
    setExpanded(prev => !prev);
  };

  // 모드 토글 함수
  const handleModeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDarkMode(prev => !prev);
  };

  // 챗봇/이벤트 링크 클릭 void 처리
  const handleVoidClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
  };

  if (!visible) return null;
  return (
    <div className="floating-button" role="navigation" style={{ bottom: '20px' }} aria-labelledby="floating-label">
      <div className="floating-button__wrap">
        <button
          id="floating-label"
          type="button"
          className="floating-button__expander"
          data-click-area="Main-Floating banner"
          data-click-name="Close"
          aria-expanded={expanded}
          onClick={handleExpanderClick}
        >
          <span className="_hidden">모드 변경, 이벤트, 챗봇 링크 더보기</span>
        </button>
        <div className="floating-button__expand" aria-hidden={!expanded}>
          <ul className="floating-button__list">
            <li className="floating-button__item">
              <a
                href="#"
                className="floating-button__link -chatbot -outter"
                data-click-area="Main-Floating banner"
                data-click-name="Chatbot"
                data-ga4-click-area="Floating Button"
                data-ga4-click-name="ChatBot"
                onClick={handleVoidClick}
              >
                <p className="floating-button__txt">챗봇</p>
                <span className="_hidden">챗봇 새창 열기</span>
              </a>
            </li>
            <li className="floating-button__item">
              <a
                href="#"
                className="floating-button__link -event -outter"
                data-click-area="Main-Floating banner"
                data-click-name="Promotion"
                onClick={handleVoidClick}
              >
                <p className="floating-button__txt">이벤트</p>
                <span className="_hidden">이벤트 새창 열기</span>
              </a>
            </li>
            <li className="floating-button__item">
              <a
                href="#"
                className={`floating-button__link -mode -outter ${!isDarkMode ? ' -light' : ''}`}
                data-click-area="Main-Floating banner"
                data-click-name="Mode"
                data-ga4-click-area="Floating Button"
                data-ga4-click-name="Mode"
                onClick={e => {
                  handleVoidClick(e);
                  handleModeClick(e);
                }}
              >
                <p className="floating-button__txt">{isDarkMode ? 'Dark' : 'Light'}</p>
                <span className="_hidden">{isDarkMode ? 'Dark 모드 변경' : 'Light 모드 변경'}</span>
              </a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="floating-button__top"
          data-click-area="Main-Floating banner"
          data-click-name="Top"
          style={{ display: 'block' }}
          onClick={e => {
            handleVoidClick(e);
            handleScrollTop(e);
          }}
        >
          <span className="_hidden">콘텐츠 처음으로 바로 가기</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingBanner;
