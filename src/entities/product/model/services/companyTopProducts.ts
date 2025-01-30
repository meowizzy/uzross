import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchCompanyTopProducts } from "../api/fetchCompanyTopProducts";
import { CompanyTopProductsListItemModel } from "../types/companyTopProductsList";

export const $companyTopProducts = createXHRStore(
  fetchCompanyTopProducts,
  new XHRDataStoreState<PaginationListModel<CompanyTopProductsListItemModel>>(
    new PaginationList(),
  ),
);
