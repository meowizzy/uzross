import { CompanyProductsListItemModel } from "@entities/product/model/types/companyProductsList";
import { HandlerType, httpGet } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";

export const fetchCompanyProductDetails: HandlerType<
  number,
  PaginationListModel<CompanyProductsListItemModel>
> = (id) => {
  return httpGet({
    url: "/api/public/v1/company-product/list",
    params: {
      id,
    },
  });
};
