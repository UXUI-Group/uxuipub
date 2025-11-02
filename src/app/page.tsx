'use client';

import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/layouts/Header';
import { Footer } from '@/components/layouts/Footer';
import { Card } from '@/components/blocks/Card';
import { Button } from '@/components/elements/Button';
import { Tabs } from '@/components/elements/Tabs';
import { config } from '@/config';
import { ThemeToggle } from '@/components/blocks/ThemeToggle';
import { CardSwiper } from '@/components/blocks/CardSwiper';
import Card01Image from '@/images/img--card01.jpg';
import Card02Image from '@/images/img--card02.jpg';
import Card03Image from '@/images/img--card03.jpg';
import Card04Image from '@/images/img--card04.png';
import Card05Image from '@/images/img--card05.jpg';
import { NoticeBoard } from '@/components/blocks/NoticeBoard';
import './home.scss';
import QuicklinkGroup from '@/components/elements/Quicklink/QuicklinkGroup';
import krcardImage from '@/images/tsconfig.png';
import giftcardImage from '@/images/gift-card.png';
import hotelImage from '@/images/hotel.png';
import rentacarImage from '@/images/car.png';
import dutyfreeImage from '@/images/inflight-duty-free.png';
import insuranceImage from '@/images/travel-insurance.png';
import travelImage from '@/images/travel-packages.png';

const KrcardIcon = () => (
  <span>
    <Image src={krcardImage} alt="대한항공카드" width={24} height={24} />
  </span>
);
const GiftcardIcon = () => (
  <span>
    <Image src={giftcardImage} alt="기프트카드" width={24} height={24} />
  </span>
);
const HotelImage = () => (
  <span>
    <Image src={hotelImage} alt="호텔" width={24} height={24} />
  </span>
);

const RentacarImage = () => (
  <span>
    <Image src={rentacarImage} alt="렌터카" width={24} height={24} />
  </span>
);

const DutyfreeImage = () => (
  <span>
    <Image src={dutyfreeImage} alt="기내 면세점" width={24} height={24} />
  </span>
);

const InsuranceImage = () => (
  <span>
    <Image src={insuranceImage} alt="여행자 보험" width={24} height={24} />
  </span>
);

const TravelImage = () => (
  <span>
    <Image src={travelImage} alt="여행 상품" width={24} height={24} />
  </span>
);

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

  const links = [
    {
      id: '1',
      href: 'https://www.koreanair.com/contents/promotion/guide/plcc_hub?eventCode=KAL18',
      label: '대한항공카드',
      icon: <KrcardIcon />,
      target: '_blank' as const,
    },
    {
      id: '2',
      href: 'https://www.koreanair.com/contents/booking/reservation-guide/gift-card',
      label: '기프트카드',
      icon: <GiftcardIcon />,
      target: '_blank' as const,
    },
    {
      id: '3',
      label: '호텔',
      icon: <HotelImage />,
      sublinks: [
        { id: '1-1', href: 'https://www.agoda.com/koreanair?ds=W8KvWe4oLvc0ef%2B1', label: '아고다' },
        {
          id: '1-2',
          href: 'https://kr.hotels.com/lp/b/koreanair?locale=ko_KR&rffrid=aff.hcom.KR.038.000.1100l877&affcid=HCOM-KR.DIRECT.PHG.1100l877',
          label: 'Hotels.com',
        },
      ],
    },
    {
      id: '4',
      label: '렌터카',
      icon: <RentacarImage />,
      sublinks: [
        { id: '1-1', href: 'https://www.koreanair.com/skypass/hertzrentacar/reservation/step1', label: 'Hertz' },
        { id: '1-2', href: 'https://rent.skdirect.co.kr/?dcnm=koreanAir', label: 'SK렌터카' },
        { id: '1-3', href: 'https://www.lotterentacar.net/tcompany/kor/main.do', label: '롯데렌터카' },
        { id: '1-4', href: 'https://koreanair.rentalcars.com/?adplat=mileage&enabler=pbx1', label: 'Rentalcars.com' },
      ],
    },
    {
      id: '5',
      href: 'https://www.koreanairdfs.com/?_C_=567666',
      label: '기내 면세점',
      icon: <DutyfreeImage />,
      target: '_blank' as const,
    },
    {
      id: '6',
      href: 'https://www.koreanair.com/contents/booking/book-and-manage/partner-service/ke-insurance',
      label: '여행자 보험',
      icon: <InsuranceImage />,
      target: '_blank' as const,
    },
    {
      id: '7',
      label: '여행 상품',
      icon: <TravelImage />,
      sublinks: [
        { id: '1-1', href: 'https://koreanair.kaltour.com/Main/Index_Kal', label: '한진관광' },
        { id: '1-2', href: 'https://koreanairkp.kaltour.com/Main/Index_KP', label: 'KALPAK' },
      ],
    },
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
    <div className="home-page" id="top">
      <Header logo="UXUI Pub" />

      <main className="home-main">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__container">
            <Tabs variant="type_a" size="medium"></Tabs>
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

        <section className="quicklinks">
          <div className="quicklinks__wrap">
            <h2 className="quicklinks__title">여행의 완성을 위한 경험</h2>
            <QuicklinkGroup links={links} layout="grid" />
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
            ]}
          />
        </section>

        <ThemeToggle />
      </main>

      <Footer />
    </div>
  );
}
