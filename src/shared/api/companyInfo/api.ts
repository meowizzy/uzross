import { HandlerType, httpGet } from "@shared/api";
import { CompanyInfoModel } from "@shared/api/companyInfo/model";

export const fetchCompanyInfo: HandlerType<void, CompanyInfoModel> = () => {
  return httpGet({
    url: "/api/public/v1/company",
  });
};
