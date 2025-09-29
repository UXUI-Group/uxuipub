'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DarkModeIcon from '@/images/icon/darkmode-icon.svg';
import LightModeIcon from '@/images/icon/lightmode-icon.svg';
import './ThemeToggle_styles/ThemeToggle.scss';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  // 컴포넌트 마운트 시 저장된 테마 불러오기
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setIsDark(initialTheme === 'dark');
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  // 테마 토글 함수
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`${isDark ? '라이트' : '다크'} 모드로 전환`}
      style={
        {
          '--lightmode-icon': `url(${LightModeIcon.src})`,
        } as React.CSSProperties
      }
    >
      {isDark ? (
        // 다크모드일 때 - Image 태그 사용
        <Image src={DarkModeIcon} alt="라이트 모드로 전환" width={24} height={24} className="theme-toggle__icon" />
      ) : (
        // 라이트모드일 때 - span 태그에 background-image (SCSS에서 처리)
        <span className="theme-toggle__icon theme-toggle__icon--bg" />
      )}
    </button>
  );
};
