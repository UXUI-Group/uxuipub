'use client';

import React from 'react';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { Card } from '@/components/blocks/Card';
import { Button } from '@/components/elements/Button';
import { config } from '@/config';
import { ThemeToggle } from '@/components/blocks/ThemeToggle';
import { CardSwiper } from '@/components/blocks/CardSwiper';
import Card01Image from '@/images/img--card01.jpg';
import Card02Image from '@/images/img--card02.jpg';
import Card03Image from '@/images/img--card03.jpg';
import Card04Image from '@/images/img--card04.png';
import Card05Image from '@/images/img--card05.jpg';
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

  const cards = [
    { id: 1, title: '카드 1', description: '대한항공 기프트카드로 여행을 선물하세요', image: Card01Image },
    {
      id: 2,
      title: '카드 2',
      description: '인천공항 미리보기 서비스를 대한항공 앱에서 만나보세요',
      image: Card02Image,
    },
    {
      id: 3,
      title: '카드 3',
      description: '1천원당 최대 5마일 적립에 항공권 최대 20만원 할인까지',
      image: Card03Image,
    },
    {
      id: 4,
      title: '카드 4',
      description: '여러 개의 회원번호를 보유한 회원이라면, 하나로 통합하세요',
      image: Card04Image,
    },
    { id: 5, title: '카드 5', description: '신규 취항 및 운항 재개 노선 스케줄을 확인하세요', image: Card05Image },
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

        {/* Card Swiper Section */}
        <section className="section-swiper">
          <CardSwiper cards={cards} autoplay={{ delay: 5000 }} />
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

        <ThemeToggle />
      </main>

      <Footer />
    </div>
  );
}
