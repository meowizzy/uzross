import { memo, useMemo, useRef, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperRef } from "swiper/swiper-react";
import { Button } from "@ui/button";
import { Image } from "@ui/image";
import NavigationNextIcon from "@assets/svg/arrowNext.svg";
import NavigationPrevIcon from "@assets/svg/arrowPrev.svg";
import { FilesType } from "../../../model/types/vendorProductsList";
import cls from "../styles.module.scss";

type PropsType = {
  images: Array<FilesType>;
};

export const ProductDetailsSlider = memo((props: PropsType) => {
  const { images } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperRef>(null);

  const filteredImages = useMemo(() => {
    const mainImage = images?.find((image) => image.main);
    const filtered = images?.filter((image) => !image.main);

    return [mainImage, ...filtered];
  }, [images]);

  const onClickNextSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  };

  const onClickPrevSlide = () => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className={cls.slider}>
      <div className={cls.sliderMain}>
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          className={cls.swiperMain}
          ref={swiperRef}
          loop
        >
          {filteredImages.map((img) => (
            <SwiperSlide key={img.id} className={cls.swiperSlide}>
              <Image src={img.filePath} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cls.sliderThumbs}>
        <Button
          className={cls.prev}
          ref={navigationPrevRef}
          onClick={onClickPrevSlide}
          theme={"clear"}
          size={"lg"}
          icon={<NavigationPrevIcon />}
        />
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          spaceBetween={16}
          modules={[Navigation, Thumbs]}
          className={cls.swiperThumbs}
          loop
          breakpoints={{
            0: {
              direction: "horizontal",
              slidesPerView: 3,
            },
            769: {
              direction: "vertical",
              slidesPerView: 5,
            },
          }}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id} className={cls.swiperThumb}>
              <Image src={img.filePath} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          className={cls.next}
          theme={"clear"}
          onClick={onClickNextSlide}
          ref={navigationNextRef}
          icon={<NavigationNextIcon />}
        />
      </div>
    </div>
  );
});
