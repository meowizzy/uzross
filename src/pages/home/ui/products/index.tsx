import React, { useMemo } from "react";
import {
  $companyTopProducts,
  $vendorTopProducts,
  ProductCard,
} from "@entities/product";
import { CompanyTopProductsListItemModel } from "@entities/product/model/types/companyTopProductsList";
import { VendorProductsListItemModel } from "@entities/product/model/types/vendorProductsList";
import { ProductCardSkeleton } from "@entities/product/ui/productCard/productCard.skeleton";
import { RoutePaths } from "@shared/config/routes";
import { Carousel } from "@widgets/carousel/ui";
import { useUnit } from "effector-react";
import error from "eslint-plugin-react/lib/util/error";
import { useTranslation } from "react-i18next";
import { useIntersection } from "@hooks/useIntersection";
import { Section } from "@ui/section";
import { Tabs, TabsDataType } from "@ui/tabs";
import products from "../../../products";

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

  if (companyTopProductsError && vendorTopProductsError) {
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
                return <ProductCardSkeleton />;
              }

              return (
                <ProductCard
                  path={RoutePaths.PRODUCTS_DETAILS + slide?.id}
                  title={slide?.title}
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
            render={(slide: VendorProductsListItemModel) => {
              if (vendorTopProductsLoading) {
                return <ProductCardSkeleton />;
              }

              return (
                <ProductCard
                  path={RoutePaths.PRODUCTS_DETAILS_VENDOR + slide?.id}
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
