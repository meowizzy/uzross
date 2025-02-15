import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const ServiceCardSkeleton = () => {
  return (
    <div className={cls.serviceCard}>
      <div className={cls.serviceCardPic}>
        <Skeleton className={cls.skeletonPic} />
      </div>
      <Skeleton
        className={cls.serviceCardTitle}
        height={"19px"}
        width={"60%"}
        borderRadius={"var(--radius-lg)"}
      />
      <div className={cls.skeletonList}>
        <Skeleton
          height={"15px"}
          width={"90%"}
          borderRadius={"var(--radius-lg)"}
        />
        <Skeleton
          height={"15px"}
          width={"70%"}
          borderRadius={"var(--radius-lg)"}
        />
        <Skeleton
          height={"15px"}
          width={"50%"}
          borderRadius={"var(--radius-lg)"}
        />
      </div>
    </div>
  );
};
