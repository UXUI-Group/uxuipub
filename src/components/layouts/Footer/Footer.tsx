"use client"
import React, { useState } from 'react'
import { FooterProps } from './Footer.types'
import './Footer_styles/Footer.scss'
import {
  GooglePlayDownIcon,
  AppStoreDownIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
} from '@/components/svgs';

export const Footer: React.FC<FooterProps> = ({
  companyName = '대한항공',
  year = new Date().getFullYear(),
  sections = [
    {
      title: '회사소개',
      links: [
        { label: 'Our Transformation', href: '/transformation' },
        { label: '대한항공에 대하여', href: '/about' },
        { label: '기업지배구조', href: '/governance' },
        { label: '투자정보', href: '/investor' },
        { label: '지속가능경영', href: '/sustainability' },
        { label: '뉴스룸', href: '/newsroom' }
      ]
    },
    {
      title: '고객지원',
      links: [
        { label: '공지사항', href: '/notices' },
        { label: '고객의 말씀', href: '/feedback' },
        { label: '서비스 센터', href: '/service-center' },
        { label: 'e-서식함', href: '/e-forms' },
        { label: '웹접근성', href: '/accessibility' }
      ]
    },
    {
      title: '약관 및 규정',
      links: [
        { label: '개인정보 처리방침', href: '/privacy' },
        { label: '이용 약관', href: '/terms' },
        { label: '운송약관 및 고지사항', href: '/carriage' },
        { label: '소비자 안전 관련 정보', href: '/safety' },
        { label: '운임 및 서비스 요금표', href: '/fares' },
        { label: '쿠키 설정', href: '/cookies' }
      ]
    },
    {
      title: '기타 안내',
      links: [
        { label: '기업 출장 / 전용기', href: '/corporate' },
        { label: '고객 안내 서비스', href: '/customer-service' },
        { label: '항공교통이용자 서비스계획', href: '/service-plan' },
        { label: '항공교통이용자 피해 구제', href: '/redress' },
        { label: '관련 사이트', href: '/related-sites' },
        { label: '사이트맵', href: '/sitemap' }
      ]
    },
    {
      title: '인기 방문국가',
      links: [
        { label: '독일', href: '/germany' },
        { label: '중국', href: '/china' },
        { label: '미국', href: '/usa' },
        { label: '뉴질랜드', href: '/newzealand' },
        { label: '일본', href: '/japan' }
      ]
    }
  ]
}) => {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set())
  const [isCompanyOpenMobile, setIsCompanyOpenMobile] = useState<boolean>(false)

  const toggleSection = (index: number) => {
    const newOpenSections = new Set(openSections)
    if (newOpenSections.has(index)) {
      newOpenSections.delete(index)
    } else {
      newOpenSections.add(index)
    }
    setOpenSections(newOpenSections)
  }

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {sections.map((section, index) => (
            <div key={index} className="footer__section">
              <button
                className="footer__section-header"
                onClick={() => toggleSection(index)}
                aria-expanded={openSections.has(index)}
              >
                <h3 className="footer__section-title">{section.title}</h3>
                <span className="footer__section-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`footer__chevron ${openSections.has(index) ? 'footer__chevron--open' : ''}`}
                  >
                    <path
                      fill="currentColor"
                      d="M19.0735 8.47635H19.8108L15.7542 12.533L15.7502 12.5291L11.9924 16.2683L8.29028 12.5252L8.28345 12.533L4.50317 8.75174L4.45337 8.70291L4.22681 8.47635H4.96411C5.35211 8.45262 5.7413 8.50756 6.10767 8.63748C6.47386 8.76741 6.81067 8.96945 7.09692 9.23221L9.34204 11.4783L9.33618 11.4832L12.0002 14.1736L14.7053 11.4842L14.6995 11.4783L16.9417 9.23221C17.2275 8.96896 17.5637 8.76644 17.9299 8.6365C18.2963 8.50658 18.6855 8.452 19.0735 8.47635Z"
                      // stroke="currentColor"
                      // strokeWidth="1.5"
                      // strokeLinecap="round"
                      // strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div className={`footer__section-content ${openSections.has(index) ? 'footer__section-content--open' : ''}`}>
                <ul className="footer__links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="footer__link-item">
                      <a href={link.href} className="footer__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="footer__extras">
          <div className="footer__badges">
            <a href="#" className="footer__badge footer__badge--gp" aria-label="Get it on Google Play">
              <GooglePlayDownIcon className="footer__badge-text" />
            </a>
            <a href="#" className="footer__badge footer__badge--as" aria-label="Download on the App Store">
              <AppStoreDownIcon className="footer__badge-text" />
            </a>
          </div>
          <div className="footer__socials">
            <a className="footer__social" href="#" aria-label="YouTube">
              <YoutubeIcon className="footer__social-icon" />
            </a>
            <a className="footer__social" href="#" aria-label="Instagram">
              <InstagramIcon className="footer__social-icon" />
            </a>
            <a className="footer__social" href="#" aria-label="Facebook">
              <FacebookIcon className="footer__social-icon" />
            </a>
            <a className="footer__social" href="#" aria-label="Twitter">
              <TwitterIcon className="footer__social-icon" />
            </a>
          </div>
        </div>

        <div className="footer__company-desktop">
          <ul className="footer__company-info">
            <li className="footer__company-info-text"><strong>(주){companyName}</strong> 대표: 우기홍 외 1명</li>
            <li className="footer__company-info-text">주소: 서울특별시 강서구 하늘길 260 </li>
            <li className="footer__company-info-text">전화: 1588-2001 / 02-2656-2001</li>
            <li className="footer__company-info-text">사업자등록번호: 110-81-14794</li>
            <li className="footer__company-info-text">통신판매업신고: 강서 제16-3010</li>
            <li className="footer__company-info-text">개인정보보호책임자: 임지영 대한항공 정보보안실장</li>
          </ul>
        </div>

        <div className="footer__company-mobile">
          <button
            className="footer__company-toggle"
            onClick={() => setIsCompanyOpenMobile((v) => !v)}
            aria-expanded={isCompanyOpenMobile}
          >
            <span className="footer__company-name"><strong>(주){companyName}</strong> 대표: 우기홍 외 1명</span>
            <span className={`footer__company-chevron ${isCompanyOpenMobile ? 'footer__company-chevron--open' : ''}`}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                // className={`footer__chevron ${openSections.has(index) ? 'footer__chevron--open' : ''}`}
              >
                <path
                  fill="currentColor"
                  d="M19.0735 8.47635H19.8108L15.7542 12.533L15.7502 12.5291L11.9924 16.2683L8.29028 12.5252L8.28345 12.533L4.50317 8.75174L4.45337 8.70291L4.22681 8.47635H4.96411C5.35211 8.45262 5.7413 8.50756 6.10767 8.63748C6.47386 8.76741 6.81067 8.96945 7.09692 9.23221L9.34204 11.4783L9.33618 11.4832L12.0002 14.1736L14.7053 11.4842L14.6995 11.4783L16.9417 9.23221C17.2275 8.96896 17.5637 8.76644 17.9299 8.6365C18.2963 8.50658 18.6855 8.452 19.0735 8.47635Z"
                  // stroke="currentColor"
                  // strokeWidth="1.5"
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <div className={`footer__company-content ${isCompanyOpenMobile ? 'footer__company-content--open' : ''}`}>
            <ul className="footer__company-info">
              <li className="footer__company-info-text">주소: 서울특별시 강서구 하늘길 260 </li>
              <li className="footer__company-info-text">전화: 1588-2001 / 02-2656-2001</li>
              <li className="footer__company-info-text">사업자등록번호: 110-81-14794</li>
              <li className="footer__company-info-text">통신판매업신고: 강서 제16-3010</li>
              <li className="footer__company-info-text">개인정보보호책임자: 임지영 대한항공 정보보안실장</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 1997-{year} KOREAN AIR</p>
        </div>
      </div>
    </footer>
  )
}