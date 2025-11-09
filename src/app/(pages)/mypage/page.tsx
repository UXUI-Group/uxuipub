import React from 'react'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
import { Card } from '@/components/blocks/Card'
import { Button } from '@/components/elements/Button'
import './mypage.scss'

export default function MyPage() {
  return (
    <div className="mypage">
      <Header logo="UXUI Pub" />
      
      <main className="mypage-main">
        <div className="container">
          <section className="profile-section">
            <h1 className="page-title">마이페이지</h1>
            <p className="page-description">개인 정보와 활동 내역을 확인하세요.</p>
            
            <div className="profile-grid">
              <Card
                title="프로필 정보"
                content="개인 정보를 수정하고 계정을 관리할 수 있습니다."
                variant="outlined"
                actions={
                  <Button variant="type_a" size="medium">
                    정보 수정
                  </Button>
                }
              />
              
              <Card
                title="프로젝트 히스토리"
                content="참여했던 프로젝트들의 기록을 확인하세요."
                variant="outlined"
                actions={
                  <Button variant="core" size="medium">
                    히스토리 보기
                  </Button>
                }
              />
              
              <Card
                title="설정"
                content="알림, 보안, 개인정보 설정을 변경할 수 있습니다."
                variant="outlined"
                actions={
                  <Button variant="core" size="medium">
                    설정하기
                  </Button>
                }
              />
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}