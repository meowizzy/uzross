import { memo, useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Image } from "@ui/image";
import { FilesType } from "../../../model/types/vendorProductsList";
import cls from "../styles.module.scss";

type PropsType = {
  images: Array<FilesType>;
};

export const ProductDetailsSlider = memo((props: PropsType) => {
  const { images } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={cls.slider}>
      <div className={cls.sliderMain}>
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={cls.swiperMain}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id} className={cls.swiperSlide}>
              <Image src={img.filePath} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cls.sliderThumbs}>
        <Swiper
          onSwiper={setThumbsSwiper}
          slidesPerView={5}
          spaceBetween={16}
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Navigation, Thumbs]}
          direction={"vertical"}
          className={cls.swiperThumbs}
        >
          {images.map((img) => (
            <SwiperSlide key={img.id} className={cls.swiperThumb}>
              <Image src={img.filePath} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});
