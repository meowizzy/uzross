import { CSSProperties, ReactNode } from "react";
import cn from "classnames";
import { Pagination, PaginationProps } from "@ui/pagination";
import cls from "./styles.module.scss";

type ColumnsInRow = {
  sm: number;
  md: number;
  lg: number;
};

type PropsType<T> = {
  data: Array<T>;
  columnsInRow?: Partial<ColumnsInRow>;
  className?: string;
  gap?: number;
  render: (item: T, idx?: number) => ReactNode;
  pagination?: Omit<PaginationProps, "className">;
};

export const PaginationList = <T = unknown,>(props: PropsType<T>) => {
  const { data, render, gap = 30, className, pagination, columnsInRow } = props;
  const cols: ColumnsInRow = {
    sm: 2,
    md: 3,
    lg: 3,
    ...columnsInRow,
  };
  const classesCompose = cn(cls.paginationList, className);

  const styles = {
    "--gap": `${gap}px`,
    "--sm": cols.sm,
    "--md": cols.md,
    "--lg": cols.lg,
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
