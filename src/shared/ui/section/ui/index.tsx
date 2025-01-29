import { ComponentProps, memo, ReactNode } from "react";
import cn from "classnames";
import { Title } from "../../title";
import cls from "./styles.module.scss";

type PropsType = {
  title?: string;
  size?: "md" | "lg" | "xl";
  titleSize?: "md" | "lg" | "xl" | "xxl";
  children?: ReactNode;
  className?: string;
  theme?: "light" | "dark";
} & ComponentProps<"section">;

export const Section = memo((props: PropsType) => {
  const {
    title,
    children,
    theme = "light",
    className,
    size = "xl",
    titleSize = "xl",
    ...restProps
  } = props;
  const classesCompose = cn(cls.section, className, cls[theme], cls[size]);

  return (
    <section className={classesCompose} {...restProps}>
      <div className={"container"}>
        {!!title && (
          <Title className={cls.title} title={title} size={titleSize} />
        )}
        {children}
      </div>
    </section>
  );
});
