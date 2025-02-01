import { CSSProperties, memo, ReactNode, useRef } from "react";
import cn from "classnames";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Button } from "@ui/button";
import { useSkeleton } from "@ui/skeleton";
import NavigationNextIcon from "@assets/svg/arrowNext.svg";
import NavigationPrevIcon from "@assets/svg/arrowPrev.svg";
import cls from "./styles.module.scss";

type PropsType<T> = {
  slides: Array<T>;
  gap?: number;
  items?: number;
  render: (slide: T, idx?: number) => ReactNode;
  className?: string;
  loading?: boolean;
  theme?: "light" | "dark";
};

export const Carousel = memo(<T = unknown,>(props: PropsType<T>) => {
  const {
    slides,
    render,
    gap = 16,
    items = 4,
    className,
    loading,
    theme = "light",
  } = props;
  const skeletonItems = useSkeleton(items);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperRef>(null);

  if (loading && !slides) {
    const styles = {
      "--items": items,
      "--gap": `${gap}px`,
    } as CSSProperties;

    return (
      <div className={cls.skeleton} style={styles}>
        {skeletonItems.map((item, idx) => render(item, idx))}
      </div>
    );
  }

  const onClickNextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const onClickPrevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className={cls.carousel}>
      <Swiper
        ref={swiperRef}
        className={className}
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          0: {
            spaceBetween: 10,
            slidesPerView: 2,
          },
          481: {
            spaceBetween: gap,
            slidesPerView: 3,
          },
          769: {
            spaceBetween: gap,
            slidesPerView: items,
          },
        }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>{render(slide, idx)}</SwiperSlide>
        ))}
      </Swiper>
      {slides?.length > items && (
        <div className={cn(cls.navigation, cls[theme])}>
          <Button
            className={cls.prev}
            onClick={onClickPrevSlide}
            theme={"clear"}
            ref={navigationPrevRef}
            icon={<NavigationPrevIcon />}
          />
          <Button
            className={cls.next}
            theme={"clear"}
            onClick={onClickNextSlide}
            ref={navigationNextRef}
            icon={<NavigationNextIcon />}
          />
        </div>
      )}
    </div>
  );
});
