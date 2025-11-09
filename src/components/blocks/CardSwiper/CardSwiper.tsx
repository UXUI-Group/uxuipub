'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CardSwiperProps, CardData } from './CardSwiper.types';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/svgs';
import './CardSwiper_styles/CardSwiper.scss';

// CardSwiper 내부에서 사용할 간단한 카드 컴포넌트
const SwiperCard: React.FC<CardData & { index: number; total: number }> = ({ description, image, index, total }) => {
  const CardContent = (
    <div className="swiper-card">
      <a href="#none" className="swiper-card__link">
        {image && (
          <div className="swiper-card__image">
            <Image
              className="swiper-card__image-img"
              src={image}
              alt=""
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <span aria-hidden="true" className="swiper-card__pagination">
              <span className="swiper-card__pagination-current">{index + 1}</span>/{total}
            </span>

            <span className="_hidden">
              {total}번째 목록 중 {index + 1}번째
            </span>
          </div>
        )}
        <div className="swiper-card__content">
          {description && <p className="swiper-card__description">{description}</p>}
        </div>
      </a>
    </div>
  );

  return CardContent;
};

export const CardSwiper: React.FC<CardSwiperProps> = ({
  cards,
  className = '',
  slidesPerView = 3,
  spaceBetween = 24,
  centeredSlides = false,
  loop = false,
  autoplay = false,
  navigation = true,
  pagination = false,
  breakpoints = {
    0: {
      slidesPerView: 1.06,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1.7,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 2.08,
      spaceBetween: 16,
    },
    1060: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  onSlideChange,
  onSwiper,
}) => {
  const [swiperInitialized, setSwiperInitialized] = useState(false);

  const swiperModules = [
    ...(navigation ? [Navigation] : []),
    ...(pagination ? [Pagination] : []),
    ...(autoplay ? [Autoplay] : []),
  ];

  return (
    <div className={`card-swiper ${className} ${swiperInitialized ? 'swiper-initialized' : ''}`}>
      <div className="card-swiper__container">
        <Swiper
          modules={swiperModules}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          centeredSlides={centeredSlides}
          loop={loop}
          autoplay={autoplay}
          navigation={
            navigation
              ? {
                  prevEl: '.card-swiper__button-prev',
                  nextEl: '.card-swiper__button-next',
                }
              : false
          }
          pagination={pagination ? { clickable: true } : false}
          breakpoints={breakpoints}
          onSlideChange={onSlideChange}
          onSwiper={swiper => {
            setSwiperInitialized(true);
            onSwiper?.(swiper);
          }}
          wrapperTag="ul"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={card.id} tag="li">
              <SwiperCard {...card} index={index} total={cards.length} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button type="button" className="card-swiper__button-prev">
          <span className="card-swiper__button-prev-icon">
            <ArrowLeftIcon width={20} height={20} />
          </span>
          <span className="_hidden">이전</span>
        </button>
        <button type="button" className="card-swiper__button-next">
          <span className="card-swiper__button-next-icon">
            <ArrowRightIcon width={20} height={20} />
          </span>
          <span className="_hidden">다음</span>
        </button>
      </div>
    </div>
  );
};
