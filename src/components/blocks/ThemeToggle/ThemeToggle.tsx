'use client';

import React, { useState, useEffect } from 'react';
import { LightModeIcon, DarkModeIcon } from '@/components/svgs';
import './ThemeToggle_styles/ThemeToggle.scss';

// 초기 테마 감지 함수
const getInitialTheme = (): 'light' | 'dark' => {
  // 1. 먼저 localStorage에서 사용자가 이전에 선택한 테마 확인
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }

    // 2. 저장된 테마가 없으면 OS 테마 설정 확인
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  }

  // 3. 기본값은 light
  return 'light';
};

export const ThemeToggle: React.FC = () => {
  // 서버 렌더링 시에는 기본값(false)을 사용하여 hydration 문제 방지
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  // 컴포넌트 마운트 시 테마 적용
  useEffect(() => {
    setMounted(true);
    const initialTheme = getInitialTheme();
    setIsDark(initialTheme === 'dark');

    // layout.tsx의 스크립트가 이미 테마를 적용했으므로 여기서는 상태만 동기화
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme) {
      setIsDark(currentTheme === 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', initialTheme);
    }

    // OS 테마 변경 감지 (사용자가 테마를 변경하지 않은 경우에만)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // localStorage에 저장된 테마가 없을 때만 OS 테마에 따라 자동 변경
      const savedTheme = localStorage.getItem('theme');
      if (!savedTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        setIsDark(e.matches);
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 테마 토글 함수
  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', newTheme);
    // 사용자가 명시적으로 선택한 테마를 localStorage에 저장
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`${isDark ? '라이트' : '다크'} 모드로 전환`}
      suppressHydrationWarning
    >
      <span className="theme-toggle__icon" suppressHydrationWarning>
        {mounted && isDark ? (
          // 다크모드일 때 - 태양 아이콘 (하얀색)
          <LightModeIcon />
        ) : (
          // 라이트모드일 때 - 달 아이콘
          <DarkModeIcon />
        )}
      </span>
    </button>
  );
};
