import React, { memo } from "react";
import { ImageHeight } from "@widgets/card/types";
import cn from "classnames";
import { Skeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

type PropsType = {
  theme?: "light" | "dark" | "darken";
  children?: React.ReactNode;
  imageHeight?: ImageHeight;
  onlyImage?: boolean;
};

export const CardSkeleton = memo((props: PropsType) => {
  const { theme, children, imageHeight = "sm", onlyImage = false } = props;

  return (
    <div className={cls.card}>
      <div className={cn(cls.cardImage, cls[imageHeight])}>
        <Skeleton width={"100%"} height={"100%"} theme={theme} />
      </div>
      {!onlyImage && (
        <>
          <div className={cn(cls.cardName, cls.skeletonName)}>
            <Skeleton
              width={"90%"}
              height={"16px"}
              borderRadius={"var(--radius-lg)"}
              theme={theme}
            />
            <Skeleton
              width={"70%"}
              height={"16px"}
              borderRadius={"var(--radius-lg)"}
              theme={theme}
            />
          </div>
          {children && <div className={cn(cls.cardBottom)}>{children}</div>}
        </>
      )}
    </div>
  );
});
