import { fetchLicenseList } from "@entities/license/model/api/fetchLicenseList";
import { ServicesListItemModel } from "@entities/service";
import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";

export const $licenseList = createXHRStore(
  fetchLicenseList,
  new XHRDataStoreState<PaginationListModel<ServicesListItemModel>>(
    new PaginationList(),
  ),
);
