import React from 'react'
import { NoticeBoard } from './NoticeBoard'

export const NoticeBoardExample: React.FC = () => {
  const customNotices = [
    {
      id: 1,
      title: '마일리지 몰 기획전 SKYPASS Deal 안내',
      date: '2025년 06월 23일',
      href: '/notices/1'
    },
    {
      id: 2,
      title: '개인정보 처리방침 개정',
      date: '2025년 06월 23일',
      href: '/notices/2'
    },
    {
      id: 3,
      title: '한국 출발 국제선 유류할증료(2025년 7월)',
      date: '2025년 06월 23일',
      href: '/notices/3'
    },
    {
      id: 4,
      title: '신규 취항 및 재개 노선 스케줄 안내',
      date: '2025년 06월 23일',
      href: '/notices/4'
    }
  ]

  return (
    <div style={{ padding: '1rem', backgroundColor: '#1a1a1a', minHeight: '100vh' }}>
      <h1 style={{ color: 'white', marginBottom: '2rem', fontSize: '1.5rem' }}>NoticeBoard 컴포넌트 예제</h1>

      <NoticeBoard
        title="알려드립니다"
        viewAllLink="/notices"
        notices={customNotices}
      />

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#2c2c2c', borderRadius: '8px' }}>
        <p style={{ color: 'white', fontSize: '0.875rem', margin: 0 }}>
          💡 모바일 화면(768px 이하)에서 확인해보세요!
        </p>
      </div>
    </div>
  )
}
