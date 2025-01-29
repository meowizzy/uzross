import { Section } from "@ui/section";
import { Skeleton, useSkeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const ContactsSkeleton = () => {
  const skeletonItems = useSkeleton(5);

  return (
    <Section size={"lg"} titleSize={"xxl"}>
      <Skeleton
        width={"150px"}
        height={"30px"}
        borderRadius={"var(--radius-lg)"}
        className={cls.skeletonTitle}
      />
      <div className={cls.contacts}>
        {skeletonItems.map((_, index) => (
          <Skeleton
            className={cls.contactsItem}
            key={index}
            width={"100%"}
            height={"100%"}
            borderRadius={"var(--radius-lg)"}
          />
        ))}
      </div>
    </Section>
  );
};
