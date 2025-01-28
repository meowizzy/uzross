import { ComponentProps, memo, ReactNode } from "react";
import cn from "classnames";
import { Title } from "../../title";
import cls from "./styles.module.scss";

type PropsType = {
  title?: string;
  children?: ReactNode;
  className?: string;
  theme?: "light" | "dark";
} & ComponentProps<"section">;

export const Section = memo((props: PropsType) => {
  const { title, children, theme = "light", className, ...restProps } = props;
  const classesCompose = cn(cls.section, className, cls[theme]);

  return (
    <section className={classesCompose} {...restProps}>
      <div className={"container"}>
        {!!title && <Title className={cls.title} title={title} />}
        {children}
      </div>
    </section>
  );
});
