import { PaginationListParams } from "@shared/types/paginationListParams";

export interface CompanyProductsListParams extends PaginationListParams {}

export interface CompanyProductsListItemModel {
  id: number;
  fileId: number;
  title: string;
  description: string;
  filePath: string;
  status: string;
  topProduct: boolean;
}
