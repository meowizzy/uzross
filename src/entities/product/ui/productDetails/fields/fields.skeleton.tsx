import { Section } from "@ui/section";
import { Skeleton, useSkeleton } from "@ui/skeleton";
import cls from "../styles.module.scss";

export const FieldsSkeleton = () => {
  const rowItems = useSkeleton(7);

  return (
    <div className={cls.fields}>
      <Section className={cls.fieldsGroup}>
        <Skeleton
          className={cls.fieldsSkeletonTitle}
          width={"130px"}
          height={"20px"}
          borderRadius={"var(--radius-lg)"}
        />
        <ul className={cls.fieldsSkeletonList}>
          {rowItems.map((_, index) => (
            <Skeleton
              width={"100%"}
              height={"30px"}
              borderRadius={"var(--radius-md)"}
            />
          ))}
        </ul>
      </Section>
    </div>
  );
};
