import { VendorProductsListItemModel } from "@entities/product/model/types/vendorProductsList";
import { HandlerType, httpGet } from "@shared/api";

export const fetchVendorProductDetails: HandlerType<
  number,
  VendorProductsListItemModel
> = (id) => {
  return httpGet({
    url: `/api/public/v1/product/${id}/details`,
  });
};
