import { httpGet, HandlerType } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import {
  CompanyProductsListItemModel,
  CompanyProductsListParams,
} from "../types/companyProductsList";

export const fetchCompanyProducts: HandlerType<
  Partial<CompanyProductsListParams>,
  PaginationListModel<CompanyProductsListItemModel>
> = (params) => {
  return httpGet({
    url: "/api/public/v1/company-product/list",
    params,
  });
};
