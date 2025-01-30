import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchLicenseList } from "../api/fetchLicenseList";
import { LicenseFilesItemModel } from "../types/licenseList";

export const $licenseList = createXHRStore(
  fetchLicenseList,
  new XHRDataStoreState<Array<LicenseFilesItemModel> | null>(null),
  {
    doneReducer: (state, response) => {
      const data = response.result.data?.content;

      const newData = data.reduce((acc, item) => {
        acc.push(...item.files);

        return acc;
      }, []);

      return {
        ...state,
        data: [...newData],
        loading: false,
        fulfilled: true,
      };
    },
  },
);
