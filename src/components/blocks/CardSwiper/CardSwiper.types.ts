export interface CardData {
  id: string | number;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  link?: string;
  badge?: string;
  price?: string;
}

export interface CardSwiperProps {
  cards: CardData[];
  title?: string;
  subtitle?: string;
  className?: string;
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  centeredSlides?: boolean;
  loop?: boolean;
  autoplay?:
    | boolean
    | {
        delay: number;
        disableOnInteraction?: boolean;
      };
  navigation?: boolean;
  pagination?: boolean;
  breakpoints?: {
    [key: number]: {
      slidesPerView: number | 'auto';
      spaceBetween?: number;
    };
  };
  onSlideChange?: (swiper: any) => void;
  onSwiper?: (swiper: any) => void;
}
