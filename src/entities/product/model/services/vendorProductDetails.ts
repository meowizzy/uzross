import { VendorProductDetails } from "@entities/product/model/types/vendorProductDetails";
import { createXHRStore } from "@shared/effector";
import { XHRDataStoreState } from "@shared/effector/constructors";
import {
  fetchVendorProductDetails,
  fetchVendorProductFields,
} from "../api/fetchVendorProductDetail";
import { VendorProductFieldsItemModel } from "../types/vendorProductFields";

export const $vendorProductDetails = createXHRStore(
  fetchVendorProductDetails,
  new XHRDataStoreState<VendorProductDetails | null>(null),
);

export const $vendorProductFields = createXHRStore(
  fetchVendorProductFields,
  new XHRDataStoreState<Array<VendorProductFieldsItemModel> | null>(null),
);
