import { memo, useEffect } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Button } from "@ui/button";
import { usePagination } from "../lib/usePagination";
import cls from "./styles.module.scss";

export interface PaginationProps {
  total: number;
  page: number;
  className?: string;
  onChange: (page: number) => void;
  direction?: "left" | "middle" | "right";
}

export const Pagination = memo((props: PaginationProps) => {
  const { total, page, onChange, className, direction = "middle" } = props;
  const { t } = useTranslation();
  const classesCompose = cn(cls.paginationWrapper, className, cls[direction]);

  const { active, next, previous, range, setPage } = usePagination({
    total,
    page,
    onChange,
    siblings: 2,
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  if (total < 2) return null;

  return (
    <div className={classesCompose}>
      <div className={cls.pagination}>
        <Button
          className={cls.prev}
          theme={"clear"}
          disabled={page === 1}
          onClick={previous}
        >
          {t("pagination.prev")}
        </Button>
        <div className={cls.range}>
          {range.map((item, idx) => {
            const isNumberItem = item !== "dots";
            const isActive = active === item;

            return isNumberItem ? (
              <Button
                className={cn(cls.item, {
                  [cls.activeItem]: isActive,
                })}
                theme={"clear"}
                disabled={item === page}
                key={idx}
                onClick={() => setPage(item)}
              >
                {item}
              </Button>
            ) : (
              <span className={cn(cls.item, cls.dots)} key={idx}>
                ...
              </span>
            );
          })}
        </div>
        <Button
          className={cls.next}
          disabled={page === total}
          theme={"clear"}
          onClick={next}
        >
          {t("pagination.next")}
        </Button>
      </div>
    </div>
  );
});
