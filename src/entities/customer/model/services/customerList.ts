import { CustomerItemModel } from "@entities/customer/model/types/customer";
import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchCustomers } from "../api/fetchCustomers";

export const $customersList = createXHRStore(
  fetchCustomers,
  new XHRDataStoreState<PaginationListModel<CustomerItemModel>>(
    new PaginationList(),
  ),
);
