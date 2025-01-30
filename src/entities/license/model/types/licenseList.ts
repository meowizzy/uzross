import { PaginationListParams } from "@shared/types/paginationListParams";

export interface LicenseListParams extends PaginationListParams {}

export interface LicenseFilesItemModel {
  id: number;
  filePath: string;
  main: boolean;
}

export interface LicenseListItemModel {
  id: number;
  title: string;
  description: string;
  files: Array<LicenseFilesItemModel>;
}
