import { sendCallbackForm } from "@features/callback/model/api";
import { createXHRStore } from "@shared/effector";
import { XHRSuccessStoreState } from "@shared/effector/constructors";

export const $callbackForm = createXHRStore(
  sendCallbackForm,
  new XHRSuccessStoreState(),
);
