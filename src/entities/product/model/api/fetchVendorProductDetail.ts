import { HandlerType, httpGet } from "@shared/api";
import { VendorProductFieldsItemModel } from "../types/vendorProductFields";
import { VendorProductsListItemModel } from "../types/vendorProductsList";

export const fetchVendorProductDetails: HandlerType<
  number,
  VendorProductsListItemModel
> = (id) => {
  return httpGet({
    url: `/api/public/v1/product/${id}/details`,
  });
};

export const fetchVendorProductFields: HandlerType<
  number,
  Array<VendorProductFieldsItemModel>
> = (id) => {
  return httpGet({
    url: `/api/public/v1/product/${id}/field-details`,
  });
};
