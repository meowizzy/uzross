import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchPartners } from "../api/fetchPartners";
import { PartnersItemModel } from "../types/partner";

export const $partnersList = createXHRStore(
  fetchPartners,
  new XHRDataStoreState<PaginationListModel<PartnersItemModel>>(
    new PaginationList(),
  ),
);
