import { memo, useEffect } from "react";
import { $licenseList } from "@entities/license";
import { LicenseListItemModel } from "@entities/license/model/types/licenseList";
import { ProductCard } from "@entities/product";
import { ProductCardSkeleton } from "@entities/product/ui/productCard/productCard.skeleton";
import { Carousel } from "@widgets/carousel/ui";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "@hooks/useIntersection";
import { Section } from "@ui/section";
import cls from "./styles.module.scss";

export const PatentsAndLicenses = memo(() => {
  const { t } = useTranslation("home");
  const [intersectionRef, isVisible] = useIntersection();
  const { data, loading, error } = useUnit($licenseList.store);

  useEffect(() => {
    if (isVisible && !data.content.length && !data.content.length) {
      $licenseList.effect({});
    }
  }, [isVisible]);

  return (
    <Section
      title={t("sections.certificates")}
      theme={"dark"}
      ref={intersectionRef}
    >
      <Carousel
        slides={data.content}
        loading={loading}
        items={4}
        render={(item: LicenseListItemModel) => {
          if (loading) {
            return <ProductCardSkeleton theme={"dark"} />;
          }

          return (
            <ProductCard
              title={item?.title}
              imagePath={item?.files[0]?.filePath}
              className={cls.licenseCard}
            />
          );
        }}
      />
    </Section>
  );
});
