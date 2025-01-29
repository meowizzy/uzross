import { createXHRStore } from "@shared/effector";
import { XHRDataStoreState } from "@shared/effector/constructors";
import {
  fetchVendorProductDetails,
  fetchVendorProductFields,
} from "../api/fetchVendorProductDetail";
import { VendorProductFieldsItemModel } from "../types/vendorProductFields";
import { VendorProductsListItemModel } from "../types/vendorProductsList";

export const $vendorProductDetails = createXHRStore(
  fetchVendorProductDetails,
  new XHRDataStoreState<VendorProductsListItemModel | null>(null),
);

export const $vendorProductFields = createXHRStore(
  fetchVendorProductFields,
  new XHRDataStoreState<Array<VendorProductFieldsItemModel> | null>(null),
);
