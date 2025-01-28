import { HandlerType, httpGet } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import { LicenseListItemModel, LicenseListParams } from "../types/licenseList";

export const fetchLicenseList: HandlerType<
  LicenseListParams,
  PaginationListModel<LicenseListItemModel>
> = (params) => {
  return httpGet({
    url: "/api/public/v1/license-patent/list",
    params,
  });
};
