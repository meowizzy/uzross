import { PostsListItemModel } from "@entities/post";
import { fetchPostDetails } from "@entities/post/model/api/fetchPostDetails";
import { createXHRStore } from "@shared/effector";
import { XHRDataStoreState } from "@shared/effector/constructors";

export const $postsDetails = createXHRStore(
  fetchPostDetails,
  new XHRDataStoreState<PostsListItemModel | null>(null),
  {
    doneReducer: (state, response) => {
      const data = response.result?.data;

      return {
        ...state,
        loading: false,
        fulfilled: true,
        data: data.content[0],
      };
    },
  },
);
