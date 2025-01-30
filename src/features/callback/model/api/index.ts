import { CallbackFormParams } from "@features/callback/model/types";
import { HandlerType, httpPost } from "@shared/api";

export const sendCallbackForm: HandlerType<CallbackFormParams, void> = (
  data,
) => {
  return httpPost({
    url: "/api/public/v1/appeal",
    data,
  });
};
