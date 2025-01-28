import { type CSSProperties, type FC } from "react";
import cn from "classnames";
import cls from "./styles.module.scss";

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  theme?: "light" | "dark" | "darken";
}
export const Skeleton: FC<SkeletonProps> = (props) => {
  const { className, width, height, borderRadius, theme = "light" } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius,
  };

  return (
    <div className={cn(cls.skeleton, className, cls[theme])} style={styles} />
  );
};
