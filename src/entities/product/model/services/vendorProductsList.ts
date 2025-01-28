import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchVendorProducts } from "../api/fetchVendorPorducts";
import { VendorProductsListItemModel } from "../types/vendorProductsList";

export const $vendorProductsList = createXHRStore(
  fetchVendorProducts,
  new XHRDataStoreState<PaginationListModel<VendorProductsListItemModel>>(
    new PaginationList(),
  ),
);
