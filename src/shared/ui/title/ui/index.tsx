import { memo } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

type PropsType = {
  title: string;
  className?: string;
};

export const Title = memo((props: PropsType) => {
  const { title, className } = props;

  if (!title) {
    return null;
  }

  return (
    <div className={cn(cls.title, className)}>
      <span>{title}</span>
    </div>
  );
});
