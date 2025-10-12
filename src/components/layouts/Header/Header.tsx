'use client';

import React from 'react';
import Link from 'next/link';
import { HeaderProps } from './Header.types';
import Image from 'next/image';
import TaegeukgiImage from '@/images/img--taegeukgi.png';
import {
  EventIcon,
  FaqIcon,
  SignUpIcon,
  KoreanAirLogo,
  MobileKoreanAirLogo,
  SkyTeamLogo,
  SearchIcon,
  MenuIcon,
} from '@/components/svgs';
import './Header_styles/Header.scss';

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="kal-header-wrapper">
      {/* PC */}
      <header className="kal-header _mo-hidden">
        <h1 className="kal-header__logo">
          <Link className="kal-header__logo-link" href="/">
            <span className="_hidden">korean air</span>
            <KoreanAirLogo className="kal-header__logo-svg" />
          </Link>

          <Link className="kal-header__logo-sky-link" href="/">
            <span className="_hidden">Sky team</span>
            <SkyTeamLogo className="kal-header__logo-sky-svg" />
          </Link>
        </h1>

        <div className="kal-header__utils">
          <ul className="kal-header__utils-list">
            <li className="kal-header__utils-item">
              <Link href="#none" className="kal-header__utils-link">
                <EventIcon className="kal-header__utils-icon" />
                이벤트
              </Link>
            </li>
            <li className="kal-header__utils-item">
              <Link href="#none" className="kal-header__utils-link -customer">
                <FaqIcon className="kal-header__utils-icon" />
                자주 묻는 질문
              </Link>
            </li>
            <li className="kal-header__utils-item">
              <button type="button" className="kal-header__utils-button">
                <Image src={TaegeukgiImage} alt="태극기" width={24} height={24} className="kal-header__utils-icon" />
                <span className="_hidden">지역선택 및 언어선택 &nbsp;</span>
                <span className="kal-header__utils-value">대한민국</span>
                <span className="_hidden">&nbsp; 한국어 선택됨</span>
              </button>
            </li>
            <li className="kal-header__utils-item">
              <Link href="#none" className="kal-header__utils-link">
                <SignUpIcon className="kal-header__utils-icon" />
                회원가입
              </Link>
            </li>
          </ul>

          <div className="kal-header__actions">
            <div className="kal-header__actions-search">
              <button type="button" className="kal-header-search__button">
                <span className="kal-header-search__button-text">궁금한 것을 검색해 보세요!</span>
                <SearchIcon className="kal-header-search__button-icon" />
              </button>
            </div>
            <div className="kal-header__actions-auth">
              <Link href="#none" className="kal-header-auth-link">
                로그인
              </Link>
            </div>
          </div>
        </div>

        <div className="kal-header__nav-wrapper">
          <nav className="kal-header__nav" aria-label="대분류 메뉴">
            <ul className="kal-header__nav-list">
              <li className="kal-header__nav-item">
                <Link href="#none" className="kal-header__nav-link">
                  예약
                </Link>
              </li>
              <li className="kal-header__nav-item">
                <Link href="#none" className="kal-header__nav-link">
                  여행준비
                </Link>
              </li>
              <li className="kal-header__nav-item">
                <Link href="#none" className="kal-header__nav-link">
                  스카이패스
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile */}
      <header className="kal-mobile-header _pc-hidden">
        <h1 className="kal-mobile-header__logo">
          <Link href="/" className="kal-mobile-header__logo-link">
            <span className="_hidden">korean air</span>
            <MobileKoreanAirLogo className="kal-mobile-header__logo-svg" />
          </Link>
        </h1>

        <div className="kal-mobile-header__actions">
          <div className="kal-mobile-header__actions-auth">
            <Link href="#none" className="kal-mobile-header__auth-link">
              로그인
            </Link>
          </div>

          <button type="button" className="kal-mobile-header__menu-button">
            <span className="_hidden">메뉴</span>
            <MenuIcon className="kal-mobile-header__menu-icon" />
          </button>
        </div>
      </header>
    </div>
  );
};
