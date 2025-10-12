'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../../elements/Button'
import { Navigation } from '../../elements/Navigation'
import { HeaderProps } from './Header.types'
import './Header_styles/Header.scss'

export const Header: React.FC<HeaderProps> = ({
  logo = 'UXUI Pub',
  isLoggedIn = false,
  userName,
  onLoginClick,
  onLogoutClick
}) => {
  return (
    <header className="header">
      <div className="header__container">
        <Link href="/" className="header__logo-link">
          <h1 className="header__logo">
            {logo}
          </h1>
        </Link>
        
        <Navigation />
        
        <div className="header__actions">
          {isLoggedIn ? (
            <>
              <span className="header__username">안녕하세요, {userName}님</span>
              <Button variant="core" onClick={onLogoutClick}>
                로그아웃
              </Button>
            </>
          ) : (
            <Button variant="type_a" onClick={onLoginClick}>
              로그인
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}