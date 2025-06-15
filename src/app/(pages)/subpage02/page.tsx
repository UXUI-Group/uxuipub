import React from 'react'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
import { Card } from '@/components/blocks/Card'
import './subpage02.scss'

export default function SubPage02() {
  const services = [
    {
      id: 1,
      title: "웹 디자인",
      content: "현대적이고 사용자 친화적인 웹사이트 디자인을 제공합니다."
    },
    {
      id: 2,
      title: "모바일 앱",
      content: "iOS와 Android를 위한 네이티브 앱 디자인을 제작합니다."
    },
    {
      id: 3,
      title: "브랜딩",
      content: "기업의 정체성을 반영하는 브랜드 디자인을 개발합니다."
    }
  ]

  return (
    <div className="subpage02">
      <Header logo="UXUI Pub" />
      
      <main className="subpage02-main">
        <div className="container">
          <section className="services-section">
            <h1 className="page-title">서브페이지 02</h1>
            <p className="page-description">
              두 번째 서브페이지입니다. 다양한 서비스를 소개합니다.
            </p>
            
            <div className="services-grid">
              {services.map((service) => (
                <Card
                  key={service.id}
                  title={service.title}
                  content={service.content}
                  variant="elevated"
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}