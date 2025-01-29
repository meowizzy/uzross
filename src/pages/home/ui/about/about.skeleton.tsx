import cn from "classnames";
import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

export const AboutSkeleton = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.left}>
        <div className={cn(cls.description, "123131")}>
          <Skeleton
            theme={"dark"}
            height={"21px"}
            width={"90%"}
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            theme={"dark"}
            height={"21px"}
            width={"70%"}
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            theme={"dark"}
            height={"21px"}
            width={"80%"}
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            theme={"dark"}
            height={"21px"}
            width={"60%"}
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            theme={"dark"}
            height={"21px"}
            width={"85%"}
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            theme={"dark"}
            height={"21px"}
            width={"40%"}
            borderRadius={"var(--radius-lg)"}
          />
          <Skeleton
            theme={"dark"}
            height={"21px"}
            width={"30%"}
            borderRadius={"var(--radius-lg)"}
          />
        </div>
        <ul className={cls.list}>
          <li className={cls.listItem}>
            <Skeleton
              theme={"dark"}
              height={"32px"}
              width={"32px"}
              borderRadius={"50%"}
              className={cls.listItemIcon}
            />
            <div className={cls.listText}>
              <span className={cls.label}>
                <Skeleton
                  theme={"dark"}
                  height={"21px"}
                  width={"130px"}
                  borderRadius={"var(--radius-lg)"}
                />
              </span>
              <div className={cls.listTextSkeleton}>
                <Skeleton
                  theme={"dark"}
                  height={"10px"}
                  width={"85%"}
                  borderRadius={"var(--radius-lg)"}
                />
                <Skeleton
                  theme={"dark"}
                  height={"10px"}
                  width={"60%"}
                  borderRadius={"var(--radius-lg)"}
                />
                <Skeleton
                  theme={"dark"}
                  height={"10px"}
                  width={"70%"}
                  borderRadius={"var(--radius-lg)"}
                />
              </div>
            </div>
          </li>
          <li className={cls.listItem}>
            <Skeleton
              theme={"dark"}
              height={"32px"}
              width={"32px"}
              borderRadius={"50%"}
              className={cls.listItemIcon}
            />
            <div className={cls.listText}>
              <span className={cls.label}>
                <Skeleton
                  theme={"dark"}
                  height={"21px"}
                  width={"130px"}
                  borderRadius={"var(--radius-lg)"}
                />
              </span>
              <div className={cls.listTextSkeleton}>
                <Skeleton
                  theme={"dark"}
                  height={"10px"}
                  width={"85%"}
                  borderRadius={"var(--radius-lg)"}
                />
                <Skeleton
                  theme={"dark"}
                  height={"10px"}
                  width={"60%"}
                  borderRadius={"var(--radius-lg)"}
                />
                <Skeleton
                  theme={"dark"}
                  height={"10px"}
                  width={"70%"}
                  borderRadius={"var(--radius-lg)"}
                />
              </div>
            </div>
          </li>
        </ul>
        <Skeleton
          theme={"dark"}
          height={"40px"}
          width={"173px"}
          borderRadius={"var(--radius-lg)"}
        />
      </div>
      <div className={cls.right}>
        <div className={cls.pic}>
          <Skeleton
            theme={"dark"}
            height={"100%"}
            width={"100%"}
            className={cls.skeletonPic}
          />
        </div>
      </div>
    </div>
  );
};
