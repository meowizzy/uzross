import cn from "classnames";
import { Skeleton } from "@ui/skeleton";
import cls from "./Post.module.scss";

export const PostCardSkeleton = () => {
  return (
    <div className={cls.postCard} aria-hidden={true}>
      <div className={cls.postCardTop}>
        <div className={cls.postCardImage}>
          <Skeleton width="100%" height="100%" className={cls.skeletonImage} />
        </div>
      </div>
      <div className={cn(cls.postCardBottom, cls.skeletonBottom)}>
        <Skeleton width="90%" height="20px" borderRadius="10px" />
        <Skeleton width="45%" height="16px" borderRadius="10px" />
        <Skeleton
          width="150px"
          height="var(--height-sm)"
          borderRadius="250px"
        />
      </div>
    </div>
  );
};
