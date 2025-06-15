import React from 'react'
import { FooterProps } from './Footer.types'
import './Footer_styles/Footer.scss'

export const Footer: React.FC<FooterProps> = ({
  companyName = 'UXUI Pub',
  year = new Date().getFullYear(),
  links = [
    { label: '서비스', href: '/services' },
    { label: '포트폴리오', href: '/portfolio' },
    { label: '블로그', href: '/blog' },
    { label: '연락처', href: '/contact' }
  ]
}) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">{companyName}</h3>
            <p className="footer__description">
              사용자 중심의 디자인으로 더 나은 디지털 경험을 만듭니다.
            </p>
          </div>
          
          <nav className="footer__nav">
            <ul className="footer__links">
              {links.map((link, index) => (
                <li key={index} className="footer__link-item">
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} {companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}