import { VendorProductDetails } from "@entities/product/model/types/vendorProductDetails";
import { HandlerType, httpGet } from "@shared/api";
import { VendorProductFieldsItemModel } from "../types/vendorProductFields";

export const fetchVendorProductDetails: HandlerType<
  number,
  VendorProductDetails
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
