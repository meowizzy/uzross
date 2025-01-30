import { fetchVendorTopProducts } from "@entities/product/model/api/fetchVendorTopProducts";
import { VendorTopProductsItemModel } from "@entities/product/model/types/vendorTopProducts";
import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";

export const $vendorTopProducts = createXHRStore(
  fetchVendorTopProducts,
  new XHRDataStoreState<PaginationListModel<VendorTopProductsItemModel>>(
    new PaginationList(),
  ),
);
