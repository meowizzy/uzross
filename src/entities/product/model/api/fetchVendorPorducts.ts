import { httpGet, HandlerType } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import {
  VendorProductsListItemModel,
  VendorProductsListParams,
} from "../types/vendorProductsList";

export const fetchVendorProducts: HandlerType<
  Partial<VendorProductsListParams>,
  PaginationListModel<VendorProductsListItemModel>
> = (params) => {
  return httpGet({
    url: "/api/public/v1/product/short-info-list",
    params,
  });
};
