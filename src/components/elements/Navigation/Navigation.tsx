'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationProps } from './Navigation.types'
import './Navigation_styles/Navigation.scss'

export const Navigation: React.FC<NavigationProps> = () => {
  const pathname = usePathname()

  const navItems = [
    { label: '홈', href: '/' },
    { label: '마이페이지', href: '/mypage' },
    { label: '서브페이지 01', href: '/subpage01' },
    { label: '서브페이지 02', href: '/subpage02' },
  ]

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map((item) => (
          <li key={item.href} className="navigation__item">
            <Link 
              href={item.href}
              className={`navigation__link ${
                pathname === item.href ? 'navigation__link--active' : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}