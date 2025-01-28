import { createXHRStore } from "@shared/effector";
import { XHRDataStoreState } from "@shared/effector/constructors";
import { fetchCompanyProductDetails } from "../api/fetchCompanyProductDetails";
import { CompanyProductsListItemModel } from "../types/companyProductsList";

export const $companyProductDetails = createXHRStore(
  fetchCompanyProductDetails,
  new XHRDataStoreState<CompanyProductsListItemModel | null>(null),
  {
    doneReducer: (state, response) => {
      const data = response.result?.data;

      return {
        ...state,
        loading: false,
        fulfilled: true,
        data: data.content[0],
      };
    },
  },
);
