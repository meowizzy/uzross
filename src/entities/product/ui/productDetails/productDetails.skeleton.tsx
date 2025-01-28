import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const ProductDetailsSkeleton = () => {
  return (
    <div className={cls.productDetails} aria-hidden={true}>
      <div className={cls.productDetailsLeft}>
        <div className={cls.skeletonTitle}>
          <Skeleton
            width="90%"
            height="32px"
            borderRadius={"var(--radius-xl)"}
          />
          <Skeleton
            width="70%"
            height="32px"
            borderRadius={"var(--radius-xl)"}
          />
          <Skeleton
            width="60%"
            height="32px"
            borderRadius={"var(--radius-xl)"}
          />
        </div>
        <div className={cls.skeletonDescription}>
          <Skeleton
            width="100%"
            height="12px"
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            width="70%"
            height="12px"
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            width="80%"
            height="12px"
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            width="90%"
            height="12px"
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            width="40%"
            height="12px"
            borderRadius={"var(--radius-lg)"}
          />
        </div>
      </div>
      <div className={cls.productDetailsRight}>
        <div className={cls.productDetailsImage}>
          <Skeleton
            width="100%"
            height="100%"
            borderRadius={"var(--radius-lg)"}
            className={cls.skeletonImage}
          />
        </div>
        <div className={cls.skeletonThumbs}>
          <Skeleton
            width="100%"
            height="92px"
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            width="100%"
            height="92px"
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            width="100%"
            height="92px"
            borderRadius={"var(--radius-lg)"}
          />
        </div>
      </div>
    </div>
  );
};
