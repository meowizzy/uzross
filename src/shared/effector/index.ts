import {
  Store,
  createEffect,
  createEvent,
  createStore,
  StoreWritable,
} from "effector";
import {
  DoneReducerType,
  FailReducerType,
  GetReducerType,
  ReducerType,
} from "./types/reducer";
import {
  CreateAdvancedFilterStorePropTypes,
  CreateXHRStoreType,
} from "./types/store";

const zeroReducerDefault: ReducerType = (state) => ({
  ...state,
  loading: true,
});
const doneReducerDefault: DoneReducerType<any> = (state, response) => {
  return {
    ...state,
    fulfilled: true,
    loading: false,
    data: response.result.data,
    error: undefined,
  };
};
const doneSuccessReducerDefault: ReducerType = (state) => ({
  ...state,
  fulfilled: true,
  loading: false,
  success: true,
  error: undefined,
});

const failReducerDefault: FailReducerType = (
  state,
  { error },
  initialState,
) => ({
  ...state,
  fulfilled: true,
  loading: false,
  error: error.response && error.response.data,
  data: initialState.data,
});

const getDoneReducer: GetReducerType = (initialState) => {
  return "data" in initialState
    ? doneReducerDefault
    : doneSuccessReducerDefault;
};

export const globalReset = createEvent<void>();

export const createXHRStore: CreateXHRStoreType = (
  handler,
  initialState,
  reducers = {},
  resets,
) => {
  const zeroReducer =
    reducers.zeroReducer !== undefined
      ? reducers.zeroReducer
      : zeroReducerDefault;
  const doneReducer =
    reducers.doneReducer !== undefined
      ? reducers.doneReducer
      : getDoneReducer<typeof initialState>(initialState);
  const failReducer =
    reducers.failReducer !== undefined
      ? reducers.failReducer
      : failReducerDefault;

  const effect = createEffect<typeof handler>({ handler });
  const reset = createEvent<void>();
  const store: StoreWritable<typeof initialState> = createStore(initialState)
    .reset(reset)
    .reset(globalReset);

  if (zeroReducer) {
    store.on(effect, zeroReducer);
  }

  if (doneReducer) {
    store.on(effect.done, doneReducer);
  }

  if (failReducer) {
    store.on(effect.fail, (prevState, response) =>
      failReducer(prevState, response, initialState),
    );
  }

  if (resets) {
    if (Array.isArray(resets)) {
      resets.forEach((func) => {
        store.reset(func);
      });
    } else {
      store.reset(resets);
    }
  }

  return {
    effect,
    store,
    reset,
  };
};

export const createAdvancedFilterStore: CreateAdvancedFilterStorePropTypes = (
  initialState,
  resets,
) => {
  const handler = (
    prevStore: typeof initialState,
    props: typeof initialState,
  ) => ({
    queryParams: {
      ...prevStore.queryParams,
      ...props.queryParams,
    },
    additionalParams: {
      ...prevStore.additionalParams,
      ...props.additionalParams,
    },
  });

  const update = createEvent<typeof initialState>();
  const reset = createEvent<void>();
  const store: StoreWritable<typeof initialState> = createStore<any, any>(
    initialState,
  )
    .on(update, handler)
    .reset(reset);

  if (resets) {
    if (Array.isArray(resets)) {
      resets.forEach((func) => {
        store.reset(func);
      });
    } else {
      store.reset(resets);
    }
  }

  return {
    update,
    store,
    reset,
  };
};
