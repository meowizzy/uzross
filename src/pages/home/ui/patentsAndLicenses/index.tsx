import { memo, useEffect } from "react";
import { $licenseList } from "@entities/license";
import { LicenseFilesItemModel } from "@entities/license/model/types/licenseList";
import { Card, CardSkeleton } from "@widgets/card";
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
    if (isVisible && !data) {
      $licenseList.effect({});
    }
  }, [isVisible]);

  if (error || !data) {
    return null;
  }

  return (
    <Section
      title={t("sections.certificates")}
      theme={"dark"}
      ref={intersectionRef}
    >
      <Carousel
        loading={loading}
        slides={data?.length ? data : []}
        items={4}
        render={(item: LicenseFilesItemModel) => {
          if (loading) {
            return <CardSkeleton onlyImage theme={"dark"} imageHeight={"lg"} />;
          }

          return (
            <div className={cls.card}>
              <Card
                imagePath={item.filePath}
                className={cls.licenseCard}
                imageHeight={"lg"}
              />
            </div>
          );
        }}
      />
    </Section>
  );
});
