import { PaginationListParams } from "@shared/types/paginationListParams";

export interface PostsListParams extends PaginationListParams {}

export interface PostsListItemModel {
  id: number;
  fileId: number;
  title: string;
  description: string;
  filePath: string;
  createdDate: string;
}
