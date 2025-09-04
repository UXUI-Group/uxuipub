import React, { useState, useEffect } from 'react';
import './Floating-banner_styles/FloatingBanner.scss';

export type FloatingBannerProps = Record<never, never>;

export const FloatingBanner = ({}: FloatingBannerProps) => {
  const [visible] = useState(true);
  const [expanded, setExpanded] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false); // 항상 라이트모드로 시작

  // body class 토글
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('-dark');
      document.body.classList.remove('-light');
    } else {
      document.body.classList.add('-light');
      document.body.classList.remove('-dark');
    }
  }, [isDarkMode]);

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

  // 모드 토글 함수 (dark <-> light)
  const handleModeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsDarkMode(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
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
          onClick={() => setExpanded(prev => !prev)}
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
                className={`floating-button__link -mode -outter ${isDarkMode ? '-light' : '-dark'}`}
                data-click-area="Main-Floating banner"
                data-click-name="Mode"
                data-ga4-click-area="Floating Button"
                data-ga4-click-name="Mode"
                onClick={e => {
                  handleVoidClick(e);
                  handleModeClick(e);
                }}
              >
                <p className="floating-button__txt">{isDarkMode ? 'Light' : 'Dark'}</p>
                <span className="_hidden">{isDarkMode ? 'Light 모드 변경' : 'Dark 모드 변경'}</span>
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
            scrollToTopAnimated();
          }}
        >
          <span className="_hidden">콘텐츠 처음으로 바로 가기</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingBanner;
