import { memo, ReactNode } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

type PropsType = {
  pageTitle?: boolean;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  bold?: boolean;
};

export const Title = memo((props: PropsType) => {
  const {
    children,
    size = "lg",
    className,
    pageTitle = false,
    bold = false,
  } = props;
  const classesCompose = cn(cls.title, cls[size], className, {
    [cls.bold]: bold,
  });

  if (!children) {
    return null;
  }

  if (pageTitle) {
    return (
      <h1 className={classesCompose}>
        <span>{children}</span>
      </h1>
    );
  }

  return (
    <div className={classesCompose}>
      <span>{children}</span>
    </div>
  );
});
