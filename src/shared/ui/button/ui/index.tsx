import { ComponentProps, memo, ReactNode } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

type PropsType = ComponentProps<"button"> & {
  theme?: "primary" | "secondary" | "danger" | "clear" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  loading?: boolean;
};

export const Button = memo((props: PropsType) => {
  const {
    theme = "primary",
    size = "md",
    className,
    icon,
    children,
    loading,
    disabled,
    ...restProps
  } = props;

  const onlyIcon = !!icon && !children;

  const classesCompose = cn(
    { [cls.isLoading]: loading },
    { [cls.onlyIcon]: onlyIcon },
    { [cls[size]]: theme !== "clear" },
    cls.button,
    cls[theme],
    className,
  );

  return (
    <button
      className={classesCompose}
      disabled={disabled || loading}
      {...restProps}
    >
      {!!icon && !loading && icon}
      {!!children && <span>{children}</span>}
    </button>
  );
});
