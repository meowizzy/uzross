import {
  ServiceListParams,
  ServicesListItemModel,
} from "@entities/service/model/types/servicesList";
import { HandlerType, httpGet } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";

export const fetchServices: HandlerType<
  ServiceListParams,
  PaginationListModel<ServicesListItemModel>
> = (params) => {
  return httpGet({
    url: "/api/public/v1/company-service/list",
    params: {
      size: 2,
    },
  });
};
