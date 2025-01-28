import { HandlerType, httpGet } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import {
  TopProductsListItemModel,
  TopProductsListParams,
} from "../types/topProductsList";

export const fetchTopProducts: HandlerType<
  TopProductsListParams,
  PaginationListModel<TopProductsListItemModel>
> = (params) => {
  return httpGet({
    url: "/api/public/v1/company-product/top-products",
  });
};
