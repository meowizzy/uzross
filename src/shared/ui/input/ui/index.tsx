import { ChangeEventHandler, ComponentProps, memo, ReactNode } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

type PropsType = Omit<ComponentProps<"input">, "prefix"> & {
  className?: string;
  wrapperClassName?: string;
  fullWidth?: boolean;
  value?: string;
  label?: string;
  type?: "text" | "email" | "password";
  prefix?: ReactNode;
  suffix?: ReactNode;
  theme?: "primary" | "danger" | "accent";
  dimension?: "sm" | "md" | "lg";
  onChange?: (value: string) => void;
};

export const Input = memo((props: PropsType) => {
  const {
    value,
    onChange,
    type = "text",
    theme = "primary",
    dimension = "lg",
    label,
    prefix,
    suffix,
    fullWidth = false,
    className,
    wrapperClassName,
    ...restProps
  } = props;

  const inputClassesCompose = cn(
    cls.input,
    cls[theme],
    cls[dimension],
    className,
    {
      [cls.withPrefix]: !!prefix,
      [cls.withSuffix]: !!suffix,
    },
  );

  const inputWrapperClassesCompose = cn(cls.inputWrapper, wrapperClassName, {
    [cls.fullWidth]: fullWidth,
  });

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={inputWrapperClassesCompose}>
      <label>
        {!!label && <p className={cls.label}>{label}</p>}
        <input
          value={value}
          type={type}
          className={inputClassesCompose}
          onChange={onChangeInput}
          {...restProps}
        />
        {!!prefix && <span className={cls.prefix}>{prefix}</span>}
        {!!suffix && <span className={cls.suffix}>{suffix}</span>}
      </label>
    </div>
  );
});
