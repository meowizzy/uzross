import { PaginationListParams } from "@shared/types/paginationListParams";

export interface ServiceListParams extends PaginationListParams {}

export interface ServicesListItemModel {
  id: number;
  fileId: number;
  title: string;
  description: string;
  filePath: string;
  topService: true;
}
