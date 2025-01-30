import { PaginationListParams } from "@shared/types/paginationListParams";

export interface CompanyTopProductsListParams extends PaginationListParams {}

export interface CompanyTopProductsListItemModel {
  id: number;
  title: string;
  description: string;
  status: string;
  filePath: string;
  topProduct: boolean;
}
