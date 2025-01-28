import { fetchCompanyInfo } from "@shared/api/companyInfo/api";
import { CompanyInfoModel } from "@shared/api/companyInfo/model";
import { createXHRStore } from "@shared/effector";
import { XHRDataStoreState } from "@shared/effector/constructors";

export const $companyInfo = createXHRStore(
  fetchCompanyInfo,
  new XHRDataStoreState<CompanyInfoModel>(null),
);
