'use client';

import React from 'react';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { Card } from '@/components/blocks/Card';
import { Button } from '@/components/elements/Button';
import { config } from '@/config';
import { ThemeToggle } from '@/components/blocks/ThemeToggle';
import { NoticeBoard } from '@/components/blocks/NoticeBoard'
import './home.scss';

export default function Home() {
  const featuredProjects = [
    {
      id: 1,
      title: '디자인 시스템',
      content: '체계적인 UI 컴포넌트 라이브러리를 구축하여 일관된 사용자 경험을 제공합니다.',
      imageUrl: `${config.basePath}/next.svg`,
    },
    {
      id: 2,
      title: '모바일 앱 UI',
      content: '반응형 웹과 네이티브 앱을 위한 현대적인 UI/UX 디자인을 제작합니다.',
      imageUrl: `${config.basePath}/vercel.svg`,
    },
    {
      id: 3,
      title: '웹 접근성',
      content: '모든 사용자가 접근 가능한 웹사이트를 위한 접근성 가이드라인을 준수합니다.',
      imageUrl: `${config.basePath}/next.svg`,
    },
  ];

  return (
    <div className="home-page">
      <Header logo="UXUI Pub" />

      <main className="home-main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__container">
            <h1 className="hero__title">
              창조적인 UI/UX 디자인으로
              <br />
              사용자 경험을 혁신합니다
            </h1>
            <p className="hero__description">
              체계적인 디자인 시스템과 현대적인 웹 기술을 통해
              <br />
              사용자 중심의 디지털 경험을 만들어갑니다.
            </p>
            <div className="hero__actions">
              <Button variant="type_a" size="large">
                프로젝트 보기
              </Button>
              <Button variant="core" size="large">
                문의하기
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="featured">
          <div className="featured__container">
            <h2 className="featured__title">주요 프로젝트</h2>
            <p className="featured__description">다양한 프로젝트를 통해 축적된 경험과 노하우를 확인해보세요.</p>

            <div className="featured__grid">
              {featuredProjects.map(project => (
                <Card
                  key={project.id}
                  title={project.title}
                  content={project.content}
                  imageUrl={project.imageUrl}
                  variant="elevated"
                  actions={
                    <div className="card-actions">
                      <Button variant="core" size="small">
                        자세히 보기
                      </Button>
                      <Button variant="type_a" size="small">
                        데모 보기
                      </Button>
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="cta__container">
            <h2 className="cta__title">프로젝트를 시작해보세요</h2>
            <p className="cta__description">새로운 아이디어를 현실로 만들어드립니다.</p>
            <Button variant="type_a" size="large">
              지금 시작하기
            </Button>
          </div>
        </section>


          <section className="notice-section">
            <NoticeBoard
              title="알려드립니다"
              viewAllLink="/notices"
              notices={[
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
              ]}
            />
          </section>

        <ThemeToggle />
      </main>

      <Footer />
    </div>
  );
}
