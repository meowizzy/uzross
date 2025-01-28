import { Image } from "@ui/image";
import { FilesType } from "../../model/types/vendorProductsList";
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
      // should be slider
      return null;
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
