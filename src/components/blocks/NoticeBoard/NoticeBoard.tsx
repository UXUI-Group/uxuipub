import React from 'react';
import Image from 'next/image';
import { NoticeBoardProps } from './NoticeBoard.types';
import './NoticeBoard_styles/NoticeBoard.scss';
import BannerImage from '@/images/A_PC_NEW_CI_ko.png';

export const NoticeBoard: React.FC<NoticeBoardProps> = ({
  title = '알려드립니다',
  viewAllLink = '/notices',
  notices = [
    {
      id: 1,
      title: '마일리지 몰 기획전 SKYPASS Deal 안내',
      date: '2025년 06월 23일',
      href: '/notices/1',
    },
    {
      id: 2,
      title: '개인정보 처리방침 개정',
      date: '2025년 06월 23일',
      href: '/notices/2',
    },
    {
      id: 3,
      title: '한국 출발 국제선 유류할증료(2025년 7월)',
      date: '2025년 06월 23일',
      href: '/notices/3',
    },
    {
      id: 4,
      title: '신규 취항 및 재개 노선 스케줄 안내',
      date: '2025년 06월 23일',
      href: '/notices/4',
    },
  ],
  className = '',
}) => {
  return (
    <div className={`notice-board ${className}`}>
      <div className="notice-board__header">
        <h2 className="notice-board__title">{title}</h2>
        <a href={viewAllLink} className="notice-board__view-all">
          목록보기
        </a>
      </div>

      <div className="notice-board__content">
        <div className="notice-board__list">
          <ul>
            {notices.map(notice => (
              <li key={notice.id} className="notice-board__item">
                <a href={notice.href} className="notice-board__link">
                  <span className="notice-board__notice-title">{notice.title}</span>
                  <span className="notice-board__notice-date">{notice.date}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="notice-board__banner">
          <div className="notice-board__banner-inner">
            <p className="notice-board__banner-inner-title">대한항공 My 앱</p>
            <p className="notice-board__banner-inner-sub">내 손안의 여행 큐레이터</p>
          </div>
          <Image src={BannerImage} alt="banner img" className="notice-board__banner-image" />
        </div>
      </div>
    </div>
  );
};
