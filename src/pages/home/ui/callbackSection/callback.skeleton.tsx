import { Skeleton, useSkeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const CallbackSkeleton = () => {
  const skeletonItems = useSkeleton(2);

  return (
    <div className={cls.wrapper}>
      <div className={cls.left}>
        <div className={cls.phones}>
          <Skeleton
            theme={"dark"}
            width={"120px"}
            height={"120px"}
            borderRadius={"var(--radius-lg)"}
            className={cls.skeletonPhonesIcon}
          />
          <div className={cls.skeletonPhonesList}>
            {skeletonItems.map((_, index) => (
              <Skeleton
                theme={"dark"}
                key={index}
                width={"350px"}
                height={"32px"}
                borderRadius={"var(--radius-lg)"}
              />
            ))}
          </div>
        </div>
        <div className={cls.links}>
          {skeletonItems.map((_, index) => (
            <Skeleton
              theme={"dark"}
              key={index}
              width={"249px"}
              height={"24px"}
              borderRadius={"var(--radius-lg)"}
            />
          ))}
        </div>
      </div>
      <div className={cls.right}></div>
    </div>
  );
};
