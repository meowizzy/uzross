import { CSSProperties, memo } from "react";
import cn from "classnames";
import { Skeleton, useSkeleton } from "@ui/skeleton";
import cls from "./styles.module.scss";

type PropsType = {
  items: Array<string>;
  count: number;
  loading: boolean;
  duration?: number;
  className?: string;
};

export const Marquee = memo((props: PropsType) => {
  const { items, count, loading, className, duration = 30 } = props;
  const skeletonItems = useSkeleton(5);
  const classesCompose = cn(cls.wrap, className);

  if (loading) {
    return (
      <div className={cn(className, cls.skeleton)}>
        {skeletonItems.map((_, idx) => (
          <Skeleton
            key={idx}
            height={"80px"}
            borderRadius={"var(--radius-md)"}
          />
        ))}
      </div>
    );
  }

  const styles = {
    "--items": items.length,
    "--count": count,
    "--duration": `${duration}s`,
  } as CSSProperties;

  const isValidCount = items.length >= count;
  const marqueeClassesCompose = cn(cls.marquee, {
    [cls.animate]: isValidCount,
  });

  return (
    <div className={classesCompose} style={styles}>
      <div className={cls.items}>
        <div className={marqueeClassesCompose}>
          {items.map((path) => (
            <div className={cls.item} key={path}>
              <img src={path} />
            </div>
          ))}
        </div>
        {isValidCount && (
          <div className={marqueeClassesCompose} aria-hidden>
            {items.map((path) => (
              <div className={cls.item} key={path}>
                <img src={path} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
});
