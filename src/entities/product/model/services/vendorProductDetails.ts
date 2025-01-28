import { createXHRStore } from "@shared/effector";
import { XHRDataStoreState } from "@shared/effector/constructors";
import { fetchVendorProductDetails } from "../api/fetchVendorProductDetail";
import { VendorProductsListItemModel } from "../types/vendorProductsList";

export const $vendorProductDetails = createXHRStore(
  fetchVendorProductDetails,
  new XHRDataStoreState<VendorProductsListItemModel | null>(null),
);
