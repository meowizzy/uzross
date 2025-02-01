import { Skeleton, useSkeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const ContactsSkeleton = () => {
  const skeletonItems = useSkeleton(5);

  return (
    <div className={cls.contactsList}>
      {skeletonItems.map((_, index) => (
        <Skeleton
          key={index}
          width={"300px"}
          theme={"darken"}
          height={"24px"}
          borderRadius={"var(--radius-md)"}
        />
      ))}
    </div>
  );
};
