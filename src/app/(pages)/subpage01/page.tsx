import React from 'react'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
import { Button } from '@/components/elements/Button'
import './subpage01.scss'

export default function SubPage01() {
  return (
    <div className="subpage01">
      <Header logo="UXUI Pub" />
      
      <main className="subpage01-main">
        <div className="container">
          <section className="content-section">
            <h1 className="page-title">서브페이지 01</h1>
            <p className="page-description">
              첫 번째 서브페이지입니다. 여기에 원하는 콘텐츠를 추가할 수 있습니다.
            </p>
            
            <div className="content-area">
              <div className="feature-box">
                <h3>주요 기능 1</h3>
                <p>이 페이지의 첫 번째 주요 기능에 대한 설명입니다.</p>
                <Button variant="type_a">자세히 보기</Button>
              </div>
              
              <div className="feature-box">
                <h3>주요 기능 2</h3>
                <p>이 페이지의 두 번째 주요 기능에 대한 설명입니다.</p>
                <Button variant="core">문의하기</Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}