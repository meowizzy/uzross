import { memo, ReactNode } from "react";
import { BreadCrumbs } from "@widgets/content/ui/breadCrumbs";
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
        {!!title && <h1 className={cls.heading}>{title}</h1>}
        {!!children && <div className={cls.contentInner}>{children}</div>}
      </div>
    </div>
  );
});
