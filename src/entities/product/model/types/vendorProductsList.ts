import { PaginationListParams } from "@shared/types/paginationListParams";

export interface VendorProductsListParams extends PaginationListParams {
  unitId: number;
  brandId: number;
  categoryId: number;
  fromPrice: number;
  toPrice: number;
}

export type FilesType = {
  id: number;
  filePath: string;
  main: true;
};

export interface VendorProductsListItemModel {
  id: number;
  name: string;
  description: string;
  price: number;
  files: Array<FilesType>;
}
