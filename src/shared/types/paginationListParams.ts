export interface PaginationListParams {
  id: number;
  userId: number;
  creatorId: number;
  status: string;
  parentId: number;
  from: string;
  to: string;
  type: string;
  check: boolean;
  page: number;
  size: number;
  search: string;
  orderBy: string;
  sortOrder: "asc" | "desc";
}
