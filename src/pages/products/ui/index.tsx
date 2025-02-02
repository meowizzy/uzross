import React, { memo } from "react";
import { $companyProductsList, $vendorProductsList } from "@entities/product";
import { RoutePaths } from "@shared/config/routes";
import { Card } from "@widgets/card";
import { Content } from "@widgets/content";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Tabs, TabsDataType } from "@ui/tabs";
import { ProductsList } from "./productsList";

const tabsItems: Array<TabsDataType> = [
  {
    key: "companyProducts",
    label: "Наша продукция",
    children: (
      <ProductsList
        $store={$companyProductsList}
        params={{
          size: 8,
        }}
        render={(product) => {
          return (
            <Card
              title={product.title}
              imagePath={product.filePath}
              imageHeight={"md"}
              path={RoutePaths.PRODUCTS_DETAILS + product.id}
            />
          );
        }}
      />
    ),
  },
  {
    key: "vendorProducts",
    label: "Прочая продукция",
    children: (
      <ProductsList
        $store={$vendorProductsList}
        params={{
          size: 8,
        }}
        render={(product) => {
          const mainImage = product?.files.find((file) => file.main);

          return (
            <Card
              imageHeight={"md"}
              title={product.name}
              imagePath={mainImage.filePath}
              path={RoutePaths.PRODUCTS_DETAILS_VENDOR + product.id}
            />
          );
        }}
      />
    ),
  },
];

const ProductsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet title={`${t("menuList.products")} | UzRoss`} />
      <Content title={t("menuList.products")}>
        <Tabs items={tabsItems} defaultKey={"companyProducts"} />
      </Content>
    </>
  );
};

export default memo(ProductsPage);
