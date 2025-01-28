import { PostsListItemModel } from "@entities/post";
import { createXHRStore } from "@shared/effector";
import {
  PaginationList,
  XHRDataStoreState,
} from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { fetchPosts } from "../api/fetchPosts";

export const $postsList = createXHRStore(
  fetchPosts,
  new XHRDataStoreState<PaginationListModel<PostsListItemModel>>(
    new PaginationList(),
  ),
);
