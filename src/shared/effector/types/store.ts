import { Event, EventCallable, Store } from "effector";
import { ErrorResponseModel } from "../models";
import { HandlerType } from "./handler";
import { ReducersCollectionType } from "./reducer";

export interface XHRDataStoreType<T> {
  fulfilled?: boolean;
  loading: boolean;
  data: T;
  error?: ErrorResponseModel;
}

export interface XHRSuccessStoreType {
  fulfilled?: boolean;
  loading: boolean;
  success: boolean;
  error: any;
}

export interface CreateStoreReturnType<E, S> {
  effect: E;
  store: Store<S>;
  reset: EventCallable<void>;
}

export type CreateXHRStoreType = <P, R, S>(
  handler: HandlerType<P, R>,
  initialState: S,
  reducers?: ReducersCollectionType<R, S>,
  resets?: Array<any>,
) => CreateStoreReturnType<typeof handler, S>;

export interface AdvancedFilterStore<P, A> {
  queryParams: P;
  additionalParams?: A;
}

export type CreateAdvancedFilterStorePropTypes = <P, A = undefined>(
  initialState: AdvancedFilterStore<P, A>,
  resets?: Array<any>,
) => {
  update: Event<AdvancedFilterStore<P, A>>;
  store: Store<AdvancedFilterStore<P, A>>;
  reset: Event<void>;
};
