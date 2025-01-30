import { ChangeEventHandler, ComponentProps, memo, ReactNode } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

type PropsType = Omit<ComponentProps<"textarea">, "prefix"> & {
  className?: string;
  wrapperClassName?: string;
  fullWidth?: boolean;
  value?: string;
  label?: string;
  theme?: "primary" | "danger" | "accent";
  onChange?: (value: string) => void;
};

export const Textarea = memo((props: PropsType) => {
  const {
    value,
    onChange,
    theme = "primary",
    label,
    fullWidth = false,
    className,
    wrapperClassName,
    ...restProps
  } = props;

  const onChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={cn(wrapperClassName, cls.textAreaWrapper)}>
      <label>
        {!!label && <p className={cls.label}>{label}</p>}
        <textarea
          value={value}
          className={cls.textArea}
          onChange={onChangeTextarea}
          {...restProps}
        />
      </label>
    </div>
  );
});
