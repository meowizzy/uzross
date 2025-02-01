import { ComponentProps, memo, ReactNode } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import cls from "./styles.module.scss";

type PropsType = ComponentProps<"button"> & {
  theme?: "primary" | "secondary" | "danger" | "clear" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: ReactNode;
  loading?: boolean;
  path?: string;
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
    path,
    ...restProps
  } = props;
  const onlyIcon = !!icon && !children;
  const isDisabled = disabled || loading;

  const classesCompose = cn(
    { [cls.isLoading]: loading },
    { [cls.onlyIcon]: onlyIcon },
    { [cls[size]]: theme !== "clear" },
    cls.button,
    cls[theme],
    className,
  );

  const buttonChildren = (
    <>
      {!!icon && !loading && icon}
      {!!children && <span>{children}</span>}
    </>
  );

  return path ? (
    <Link
      to={path}
      className={cn(classesCompose, { [cls.disabled]: isDisabled })}
    >
      {buttonChildren}
    </Link>
  ) : (
    <button className={classesCompose} disabled={isDisabled} {...restProps}>
      {buttonChildren}
    </button>
  );
});
