'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card } from '../Card';
import { CardSwiperProps } from './CardSwiper.types';
import './CardSwiper_styles/CardSwiper.scss';

export const CardSwiper: React.FC<CardSwiperProps> = ({
  cards,
  title,
  subtitle,
  className = '',
  slidesPerView = 3,
  spaceBetween = 24,
  centeredSlides = false,
  loop = false,
  autoplay = false,
  navigation = true,
  pagination = true,
  breakpoints = {
    320: {
      slidesPerView: 1.08, // 다음 카드가 살짝 보이도록
      spaceBetween: 16,
    },
    1060: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  onSlideChange,
  onSwiper,
}) => {
  const swiperModules = [
    ...(navigation ? [Navigation] : []),
    ...(pagination ? [Pagination] : []),
    ...(autoplay ? [Autoplay] : []),
  ];

  return (
    <div className={`card-swiper ${className}`}>
      {(title || subtitle) && (
        <div className="card-swiper__header">
          {title && <h2 className="card-swiper__header-title">{title}</h2>}
          {subtitle && <p className="card-swiper__header-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="card-swiper__container">
        <Swiper
          modules={swiperModules}
          slidesPerView={slidesPerView}
          spaceBetween={spaceBetween}
          centeredSlides={centeredSlides}
          loop={loop}
          autoplay={autoplay}
          navigation={navigation}
          pagination={pagination ? { clickable: true } : false}
          breakpoints={breakpoints}
          onSlideChange={onSlideChange}
          onSwiper={onSwiper}
        >
          {cards.map(card => (
            <SwiperSlide key={card.id}>
              <Card
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                image={card.image}
                link={card.link}
                badge={card.badge}
                price={card.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
