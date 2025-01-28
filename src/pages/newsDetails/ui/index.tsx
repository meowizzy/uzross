import { memo, useEffect } from "react";
import { PostDetails, PostDetailsSkeleton } from "@entities/post";
import { $postsDetails } from "@entities/post/model/services/postDetails";
import { Content } from "@widgets/content";
import { useUnit } from "effector-react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id } = useParams();
  const { data, fulfilled, error } = useUnit($postsDetails.store);

  useEffect(() => {
    return () => {
      $postsDetails.reset();
    };
  }, []);

  useEffect(() => {
    if (id) {
      $postsDetails.effect(Number(id));
    }
  }, []);

  const renderChildren = () => {
    if (!data) {
      return <PostDetailsSkeleton />;
    }

    return <PostDetails data={data} />;
  };

  return <Content crumb={!!data && data.title}>{renderChildren()}</Content>;
};

export default memo(NewsDetails);
