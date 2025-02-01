import { FileModel } from "@entities/product/model/types/vendorProductDetails";
import { Image } from "@ui/image";
import { Title } from "@ui/title";
import { Tooltip } from "@ui/tooltip";
import { FilesType } from "../../model/types/vendorProductsList";
import { ProductDetailsSlider } from "./slider";
import cls from "./styles.module.scss";

type PropsType = {
  title: string;
  description: string;
  brand?: FileModel;
  operatingSystem?: Array<FileModel>;
  images: Array<FilesType> | string;
};

export const ProductDetails = (props: PropsType) => {
  const { title, description, images, brand, operatingSystem } = props;

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
        <Title size={"xl"} bold>
          {title}
        </Title>
        {!!description && (
          <p className={cls.productDetailsDescription}>{description}</p>
        )}
        <div className={cls.additionalInfo}>
          {!!brand && (
            <div className={cls.option}>
              <Title size={"sm"} className={cls.optionLabel} bold>
                Бренд:
              </Title>
              <div className={cls.optionValue}>
                <Tooltip title={brand.name}>
                  <Image src={brand.filePath} />
                </Tooltip>
              </div>
            </div>
          )}
          {!!operatingSystem && (
            <div className={cls.option}>
              <Title size={"sm"} className={cls.optionLabel} bold>
                Операционные системы:
              </Title>
              <div className={cls.optionValue}>
                {operatingSystem.map((op, idx) => {
                  let separator = ",";

                  return (
                    <div className={cls.optionValues} key={op.id}>
                      <Tooltip title={op.name}>
                        <Image src={op.filePath} />
                      </Tooltip>
                      {idx !== operatingSystem.length - 1 && separator}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      {!!images && (
        <div className={cls.productDetailsRight}>{renderImages()}</div>
      )}
    </div>
  );
};
