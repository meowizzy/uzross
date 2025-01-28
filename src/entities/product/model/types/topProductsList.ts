import { PaginationListParams } from "@shared/types/paginationListParams";

export interface TopProductsListParams extends PaginationListParams {}

export interface TopProductsListItemModel {
  id: number;
  title: string;
  description: string;
  status: string;
  filePath: string;
  topProduct: boolean;
}
