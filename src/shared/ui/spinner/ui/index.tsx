import { memo } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

type PropsType = {
  className?: string;
  size?: "sm" | "md" | "lg";
  absolute?: boolean;
};

export const Spinner = memo((props: PropsType) => {
  const { className, size = "md", absolute = false } = props;
  const classesCompose = cn(cls.spinner, className, cls[size], {
    [cls.abs]: absolute,
  });

  return (
    <span className={classesCompose}>
      <span></span>
    </span>
  );
});
