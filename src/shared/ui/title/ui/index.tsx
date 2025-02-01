import { ComponentProps, memo, ReactNode, Ref } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

type PropsType = {
  pageTitle?: boolean;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "xxl";
  bold?: boolean;
} & ComponentProps<"div" | "h1">;

export const Title = memo((props: PropsType) => {
  const {
    children,
    size = "lg",
    className,
    ref,
    pageTitle = false,
    bold = false,
    ...restProps
  } = props;
  const classesCompose = cn(cls.title, cls[size], className, {
    [cls.bold]: bold,
  });

  if (!children) {
    return null;
  }

  if (pageTitle) {
    return (
      <h1 className={classesCompose} ref={ref} {...restProps}>
        <span>{children}</span>
      </h1>
    );
  }

  return (
    <div className={classesCompose} ref={ref} {...restProps}>
      <span>{children}</span>
    </div>
  );
});
