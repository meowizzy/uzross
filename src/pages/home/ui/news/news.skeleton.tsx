import { Fragment } from "react";
import { Skeleton, useSkeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const NewsSkeleton = () => {
  const skeletonItems = useSkeleton(4);

  return (
    <div className={cls.newsWrapper}>
      <div className={cls.left}>
        <div className={cls.newsPic}>
          <Skeleton className={cls.skeletonPic} />
        </div>
        <Skeleton
          width={"120px"}
          height={"14px"}
          borderRadius={"var(--radius-lg)"}
          className={cls.newsDate}
        />
        <div className={cls.skeletonTitle}>
          <Skeleton
            width={"100%"}
            height={"16px"}
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            width={"40%"}
            height={"16px"}
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            width={"45%"}
            height={"16px"}
            borderRadius={"var(--radius-lg)"}
          />
        </div>
      </div>
      <div className={cls.right}>
        <div className={cls.rightTitle}>
          <Skeleton
            width={"120px"}
            height={"18px"}
            borderRadius={"var(--radius-lg)"}
          />
        </div>
        {skeletonItems.map((_, idx) => (
          <Fragment key={idx}>
            <Skeleton
              width={"120px"}
              height={"14px"}
              borderRadius={"var(--radius-lg)"}
              className={cls.newsDate}
            />
            <div className={cls.newsItem}>
              <div className={cls.skeletonTitle}>
                <Skeleton
                  width={"100%"}
                  height={"16px"}
                  borderRadius={"var(--radius-lg)"}
                />
                <Skeleton
                  width={"40%"}
                  height={"16px"}
                  borderRadius={"var(--radius-lg)"}
                />
                <Skeleton
                  width={"45%"}
                  height={"16px"}
                  borderRadius={"var(--radius-lg)"}
                />
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};
