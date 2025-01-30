import {
  VendorTopProductsItemModel,
  VendorTopProductsListParams,
} from "@entities/product/model/types/vendorTopProducts";
import { HandlerType, httpGet } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";

export const fetchVendorTopProducts: HandlerType<
  VendorTopProductsListParams,
  PaginationListModel<VendorTopProductsItemModel>
> = () => {
  return httpGet({
    url: "/api/public/v1/product/top-products",
  });
};
