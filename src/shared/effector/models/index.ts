export interface PaginationListModel<T> {
  content: Array<T>;
  page: number;
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    pageSize: number;
    pageNumber: number;
    offset: number;
    unpaged: boolean;
    paged: boolean;
  };
  totalPages: number;
  last: boolean;
  totalElements: number;
  first: boolean;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}

export interface ErrorResponseModel {
  detail: string;
  message: string;
  path: string;
  status?: number;
  title: string;
}

export interface ResponseType<T = any> {
  result: {
    data: T;
    headers?: any;
    status: number;
    statusText: string;
  };
  params?: any;
}
