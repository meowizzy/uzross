import { Image } from "@ui/image";
import { FilesType } from "../../model/types/vendorProductsList";
import { ProductDetailsSlider } from "./slider";
import cls from "./styles.module.scss";

type PropsType = {
  title: string;
  description: string;
  images: Array<FilesType> | string;
};

export const ProductDetails = (props: PropsType) => {
  const { title, description, images } = props;

  const renderImages = () => {
    if (Array.isArray(images)) {
      return <ProductDetailsSlider images={images} />;
    }

    return (
      <div className={cls.productDetailsImage}>
        <Image src={images} alt={title} />
      </div>
    );
  };

  return (
    <div className={cls.productDetails}>
      <div className={cls.productDetailsLeft}>
        <h1 className={cls.productDetailsTitle}>{title}</h1>
        {!!description && (
          <p className={cls.productDetailsDescription}>{description}</p>
        )}
      </div>
      {!!images && (
        <div className={cls.productDetailsRight}>{renderImages()}</div>
      )}
    </div>
  );
};
