import { memo, useEffect, useMemo } from "react";
import {
  $companyProductDetails,
  $vendorProductDetails,
  ProductDetails,
  ProductDetailsSkeleton,
} from "@entities/product";
import { $vendorProductFields } from "@entities/product/model/services/vendorProductDetails";
import { Content } from "@widgets/content";
import { useUnit } from "effector-react/effector-react.umd";
import { useLocation, useParams } from "react-router-dom";
import { ProductDetailsFields } from "./fields";

const ProductsDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const isVendor = useMemo(() => {
    return location.pathname.split("/").includes("vendor");
  }, [location.pathname]);

  const {
    data: companyProductDetailsData,
    loading: companyProductDetailsLoading,
    error: companyProductDetailsError,
  } = useUnit($companyProductDetails.store);
  const {
    data: vendorProductDetailsData,
    loading: vendorProductDetailsLoading,
    error: vendorProductDetailsError,
  } = useUnit($vendorProductDetails.store);

  useEffect(() => {
    return () => {
      $vendorProductDetails.reset();
      $companyProductDetails.reset();
    };
  }, []);

  const getProductDetails = () => {
    const _id = Number(id);

    if (isVendor) {
      $vendorProductDetails.effect(_id);
    } else {
      $companyProductDetails.effect(_id);
    }
  };

  useEffect(() => {
    if (id) {
      getProductDetails();
    }
  }, []);

  const renderContent = () => {
    if (companyProductDetailsLoading || vendorProductDetailsLoading) {
      return <ProductDetailsSkeleton />;
    }

    if (isVendor) {
      return (
        <ProductDetails
          title={vendorProductDetailsData?.name}
          description={vendorProductDetailsData?.description}
          images={vendorProductDetailsData?.files}
        />
      );
    }

    return (
      <ProductDetails
        title={companyProductDetailsData?.title}
        description={companyProductDetailsData?.description}
        images={companyProductDetailsData?.filePath}
      />
    );
  };

  return (
    <Content
      crumb={
        isVendor
          ? vendorProductDetailsData?.name
          : companyProductDetailsData?.title
      }
    >
      {renderContent()}
      {isVendor && <ProductDetailsFields id={Number(id)} />}
    </Content>
  );
};

export default memo(ProductsDetailsPage);
