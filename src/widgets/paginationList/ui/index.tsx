import { CSSProperties, ReactNode } from "react";
import cn from "classnames";
import { Pagination, PaginationProps } from "@ui/pagination";
import cls from "./styles.module.scss";

type PropsType<T> = {
  data: Array<T>;
  items?: number;
  className?: string;
  gap?: number;
  render: (item: T, idx?: number) => ReactNode;
  pagination?: Omit<PaginationProps, "className">;
};

export const PaginationList = <T = unknown,>(props: PropsType<T>) => {
  const { data, items = 3, render, gap = 30, className, pagination } = props;
  const classesCompose = cn(cls.paginationList, className);

  const styles = {
    "--gap": `${gap}px`,
    "--items": items,
  } as CSSProperties;

  return (
    <>
      <div className={classesCompose} style={styles}>
        {data.map((item, index) => (
          <div key={index} className={cls.paginationListColumn}>
            {render(item, index)}
          </div>
        ))}
      </div>
      {!!pagination && (
        <Pagination className={cls.pagination} {...pagination} />
      )}
    </>
  );
};
