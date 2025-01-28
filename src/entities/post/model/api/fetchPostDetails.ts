import { httpGet, HandlerType } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import { PostsListItemModel } from "../types/posts";

export const fetchPostDetails: HandlerType<
  number,
  PaginationListModel<PostsListItemModel>
> = (id) => {
  return httpGet({
    url: "/api/public/v1/company-news/list",
    params: {
      id,
    },
  });
};
