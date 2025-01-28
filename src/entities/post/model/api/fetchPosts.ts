import { httpGet, HandlerType } from "@shared/api";
import { PaginationListModel } from "@shared/effector/models";
import { PostsListItemModel, PostsListParams } from "../types/posts";

export const fetchPosts: HandlerType<
  PostsListParams,
  PaginationListModel<PostsListItemModel>
> = (params) => {
  return httpGet({
    url: "/api/public/v1/company-news/list",
    params,
  });
};
