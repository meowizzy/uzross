import React, { useMemo } from "react";
import { $companyTopProducts, $vendorTopProducts } from "@entities/product";
import {
  VendorTopProductsItemModel,
  CompanyTopProductsListItemModel,
} from "@entities/product";
import { RoutePaths } from "@shared/config/routes";
import { Card, CardSkeleton } from "@widgets/card";
import { Carousel } from "@widgets/carousel/ui";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "@hooks/useIntersection";
import { Section } from "@ui/section";
import { Tabs, TabsDataType } from "@ui/tabs";

export const Products = () => {
  const { t } = useTranslation("home");
  const [intersectionRef, isVisible] = useIntersection();

  const {
    data: companyTopProductsData,
    loading: companyTopProductsLoading,
    error: companyTopProductsError,
  } = useUnit($companyTopProducts.store);
  const {
    data: vendorTopProductsData,
    loading: vendorTopProductsLoading,
    error: vendorTopProductsError,
  } = useUnit($vendorTopProducts.store);
  const { content: vendorTopProductsItems } = vendorTopProductsData;
  const { content: companyTopProductsItems } = companyTopProductsData;

  if (
    (companyTopProductsError && vendorTopProductsError) ||
    (!companyTopProductsData && !vendorTopProductsData)
  ) {
    return null;
  }

  const tabsItems: Array<TabsDataType> = useMemo(() => {
    return [
      {
        key: "products",
        label: t("sections.products"),
        children: companyTopProductsError ? null : (
          <Carousel
            slides={companyTopProductsItems}
            loading={companyTopProductsLoading}
            theme={"dark"}
            render={(slide: CompanyTopProductsListItemModel) => {
              if (companyTopProductsLoading) {
                return <CardSkeleton imageHeight={"md"} />;
              }

              return (
                <Card
                  path={RoutePaths.PRODUCTS_DETAILS + slide?.id}
                  title={slide?.title}
                  imageHeight={"md"}
                  imagePath={slide?.filePath}
                />
              );
            }}
          />
        ),
      },
      {
        key: "vendorProducts",
        label: t("sections.vendorProducts"),
        children: vendorTopProductsError ? null : (
          <Carousel
            slides={vendorTopProductsItems}
            loading={vendorTopProductsLoading}
            theme={"dark"}
            render={(slide: VendorTopProductsItemModel) => {
              if (vendorTopProductsLoading) {
                return <CardSkeleton imageHeight={"md"} />;
              }

              return (
                <Card
                  path={RoutePaths.PRODUCTS_DETAILS_VENDOR + slide?.id}
                  imageHeight={"md"}
                  title={slide?.name}
                  imagePath={slide?.files.find((file) => file.main).filePath}
                />
              );
            }}
          />
        ),
      },
    ];
  }, [
    companyTopProductsError,
    vendorTopProductsError,
    vendorTopProductsLoading,
    companyTopProductsLoading,
    companyTopProductsItems,
    vendorTopProductsItems,
  ]);

  const onChangeTabs = (key: string) => {
    if (key === "products" && !companyTopProductsItems.length) {
      $companyTopProducts.effect({});
    } else if (key === "vendorProducts" && !vendorTopProductsItems.length) {
      $vendorTopProducts.effect({});
    }
  };

  return (
    <Section ref={intersectionRef} title={t("sections.products")}>
      <Tabs
        items={tabsItems}
        trigger={isVisible}
        defaultKey={"products"}
        onChange={onChangeTabs}
      />
    </Section>
  );
};
