import { ErrorResponseModel } from "../models";
import { XHRDataStoreType, XHRSuccessStoreType } from "../types/store";

export class XHRDataStoreState<D> implements XHRDataStoreType<D> {
  fulfilled: boolean;
  loading: boolean;
  data: D;
  error: ErrorResponseModel | undefined;

  constructor(data: D) {
    this.fulfilled = false;
    this.loading = false;
    this.data = data;
    this.error = undefined;
  }
}

export class XHRSuccessStoreState implements XHRSuccessStoreType {
  fulfilled: boolean;
  loading: boolean;
  success: boolean;
  error: ErrorResponseModel | undefined;

  constructor(success = false) {
    this.fulfilled = false;
    this.loading = false;
    this.success = success;
    this.error = undefined;
  }
}

export class PaginationList {
  content: any[];
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

  constructor() {
    this.content = [];
    this.page = 0;
    this.pageable = {
      sort: {
        sorted: false,
        unsorted: false,
        empty: false,
      },
      pageSize: 0,
      pageNumber: 0,
      offset: 0,
      unpaged: false,
      paged: false,
    };
    this.totalPages = 0;
    this.last = false;
    this.totalElements = 0;
    this.first = false;
    this.sort = {
      sorted: false,
      unsorted: false,
      empty: false,
    };
    this.numberOfElements = 0;
    this.size = 0;
    this.number = 0;
    this.empty = false;
  }
}
