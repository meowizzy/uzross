import { PaginationListParams } from "@shared/types/paginationListParams";

export interface VendorTopProductsListParams extends PaginationListParams {
  unitId: number;
  brandId: number;
  categoryId: number;
  fromPrice: number;
  toPrice: number;
}

export interface VendorTopProductsFilesItemModel {
  id: number;
  filePath: string;
  main: boolean;
}

export interface VendorTopProductsItemModel {
  id: number;
  name: string;
  description: string;
  price: number;
  files: Array<VendorTopProductsFilesItemModel>;
}
