import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchLicenseList } from "../api/fetchLicenseList";
import { LicenseListItemModel } from "../types/licenseList";

export const $licenseList = createXHRStore(
  fetchLicenseList,
  new XHRDataStoreState<PaginationListModel<LicenseListItemModel>>(
    new PaginationList(),
  ),
);
