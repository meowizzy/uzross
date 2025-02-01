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
  paddings?: boolean;
} & ComponentProps<"section">;

export const Section = memo((props: PropsType) => {
  const {
    title,
    children,
    theme = "light",
    className,
    size = "xl",
    titleSize = "lg",
    paddings = true,
    ...restProps
  } = props;
  const classesCompose = cn(cls.section, className, cls[theme], cls[size], {
    [cls.paddings]: paddings,
  });

  return (
    <section className={classesCompose} {...restProps}>
      <div className={"container"}>
        {!!title && (
          <Title className={cls.title} size={titleSize} bold>
            {title}
          </Title>
        )}
        {children}
      </div>
    </section>
  );
});
