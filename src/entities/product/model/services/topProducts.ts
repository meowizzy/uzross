import { fetchTopProducts } from "@entities/product/model/api/fetchTopProducts";
import { TopProductsListItemModel } from "@entities/product/model/types/topProductsList";
import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";

export const $topProducts = createXHRStore(
  fetchTopProducts,
  new XHRDataStoreState<PaginationListModel<TopProductsListItemModel>>(
    new PaginationList(),
  ),
);
