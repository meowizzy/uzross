import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchCompanyProducts } from "../api/fetchCompanyProducts";
import { CompanyProductsListItemModel } from "../types/companyProductsList";

export const $companyProductsList = createXHRStore(
  fetchCompanyProducts,
  new XHRDataStoreState<PaginationListModel<CompanyProductsListItemModel>>(
    new PaginationList(),
  ),
);
