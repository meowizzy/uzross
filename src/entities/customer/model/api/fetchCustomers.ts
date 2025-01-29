import { HandlerType, httpGet } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import { CustomerItemModel } from "../types/customer";

export const fetchCustomers: HandlerType<
  void,
  PaginationListModel<CustomerItemModel>
> = () => {
  return httpGet({
    url: "/api/public/v1/customers/list",
  });
};
