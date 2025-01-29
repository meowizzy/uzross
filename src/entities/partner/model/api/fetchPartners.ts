import { HandlerType, httpGet } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import { PartnersItemModel } from "../types/partner";

export const fetchPartners: HandlerType<
  void,
  PaginationListModel<PartnersItemModel>
> = () => {
  return httpGet({
    url: "/api/public/v1/company-partners/list",
  });
};
