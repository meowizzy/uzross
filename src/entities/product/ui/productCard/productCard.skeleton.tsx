import React from "react";
import cn from "classnames";
import { Skeleton } from "@ui/skeleton";
import cls from "@entities/product/ui/productCard/styles.module.scss";

type PropsType = {
  theme?: "light" | "dark" | "darken";
};

export const ProductCardSkeleton = (props: PropsType) => {
  const { theme } = props;

  return (
    <div className={cls.productCard}>
      <div className={cls.productImage}>
        <Skeleton width={"100%"} height={"100%"} theme={theme} />
      </div>
      <div className={cn(cls.productName, cls.skeletonBottom)}>
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
    </div>
  );
};
