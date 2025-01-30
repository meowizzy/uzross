import { HandlerType, httpGet } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import {
  CompanyTopProductsListItemModel,
  CompanyTopProductsListParams,
} from "../types/companyTopProductsList";

export const fetchCompanyTopProducts: HandlerType<
  CompanyTopProductsListParams,
  PaginationListModel<CompanyTopProductsListItemModel>
> = (params) => {
  return httpGet({
    url: "/api/public/v1/company-product/top-products",
    params: {
      size: 20,
      ...params,
    },
  });
};
