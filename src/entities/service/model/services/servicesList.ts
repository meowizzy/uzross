import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchServices } from "../api/fetchServices";
import { ServicesListItemModel } from "../types/servicesList";

export const $servicesList = createXHRStore(
  fetchServices,
  new XHRDataStoreState<PaginationListModel<ServicesListItemModel>>(
    new PaginationList(),
  ),
);
