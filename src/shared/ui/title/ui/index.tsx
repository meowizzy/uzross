import { memo, ReactNode } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

type PropsType = {
  title: string;
  className?: string;
  size?: "md" | "lg" | "xl" | "xxl";
};

export const Title = memo((props: PropsType) => {
  const { title, size = "xl", className } = props;

  if (!title) {
    return null;
  }

  return (
    <div className={cn(cls.title, cls[size], className)}>
      <span>{title}</span>
    </div>
  );
});
