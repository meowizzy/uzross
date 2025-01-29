import { memo, ReactNode } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type PropsType<T> = {
  slides: Array<T>;
  gap?: number;
  items?: number;
  render: (slide: T, idx: number) => ReactNode;
  className?: string;
  loading?: boolean;
};

export const Carousel = memo(<T = unknown,>(props: PropsType<T>) => {
  const { slides, render, gap = 16, items = 4, className } = props;

  return (
    <Swiper
      className={className}
      modules={[Navigation]}
      spaceBetween={gap}
      slidesPerView={items}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>{render(slide, idx)}</SwiperSlide>
      ))}
    </Swiper>
  );
});
