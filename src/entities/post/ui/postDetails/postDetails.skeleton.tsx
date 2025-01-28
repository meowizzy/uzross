import cn from "classnames";
import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const PostDetailsSkeleton = () => {
  return (
    <div className={cls.postDetails} aria-hidden={true}>
      <div className={cls.postDetailsImage}>
        <Skeleton
          width={"100%"}
          height={"100%"}
          borderRadius={"var(--radius-lg)"}
        />
      </div>
      <div className={cls.postDetailsBottom}>
        <Skeleton
          width={"150px"}
          height={"10px"}
          borderRadius={"var(--radius-xl)"}
          className={cls.postDetailsDate}
        />
        <Skeleton
          width={"80%"}
          height={"20px"}
          borderRadius={"var(--radius-xl)"}
          className={cls.postDetailsTitle}
        />
        <div
          className={cn(cls.postDetailsDescription, cls.skeletonDescription)}
        >
          <Skeleton
            width={"80%"}
            height={"16px"}
            borderRadius={"var(--radius-xl)"}
          />
          <Skeleton
            width={"100%"}
            height={"16px"}
            borderRadius={"var(--radius-xl)"}
          />
          <Skeleton
            width={"70%"}
            height={"16px"}
            borderRadius={"var(--radius-xl)"}
          />
          <Skeleton
            width={"85%"}
            height={"16px"}
            borderRadius={"var(--radius-xl)"}
          />
          <Skeleton
            width={"90%"}
            height={"16px"}
            borderRadius={"var(--radius-xl)"}
          />
        </div>
      </div>
    </div>
  );
};
