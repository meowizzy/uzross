import { memo, ReactNode } from "react";
import { BreadCrumbs } from "@widgets/content/ui/breadCrumbs";
import { Title } from "@ui/title";
import cls from "./styles.module.scss";

type PropsType = {
  children?: ReactNode;
  title?: string;
  crumb?: string;
};

export const Content = memo((props: PropsType) => {
  const { title, children, crumb } = props;

  return (
    <div className={cls.content}>
      <div className={"container"}>
        <BreadCrumbs dynamicCrumb={crumb} />
        {!!title && (
          <Title className={cls.heading} size={"md"} pageTitle bold>
            {title}
          </Title>
        )}
        {!!children && <div className={cls.contentInner}>{children}</div>}
      </div>
    </div>
  );
});
