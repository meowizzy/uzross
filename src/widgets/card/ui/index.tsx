import React, { memo, ReactNode } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { Image } from "@ui/image";
import { ImageHeight } from "../types";
import cls from "./styles.module.scss";

type PropsType = {
  imagePath: string;
  title?: string;
  path?: string;
  className?: string;
  children?: ReactNode;
  withZoom?: boolean;
  imageHeight?: ImageHeight;
};

export const Card = memo((props: PropsType) => {
  const {
    imagePath,
    title,
    path,
    className,
    children,
    imageHeight = "sm",
    withZoom = false,
  } = props;
  const classesCompose = cn(cls.card, className);
  const imageClassesCompose = cn(cls.cardImage, cls[imageHeight], {
    [cls.withZoom]: withZoom,
  });

  return (
    <div className={classesCompose}>
      <div className={imageClassesCompose}>
        {!!path ? (
          <Link to={path}>
            <Image src={imagePath} alt={title} />
          </Link>
        ) : (
          <Image src={imagePath} alt={title} />
        )}
      </div>
      {!!title && (
        <div className={cls.cardName}>
          {!!path ? <Link to={path}>{title}</Link> : <span>{title}</span>}
        </div>
      )}
      {!!children && <div className={cls.cardBottom}>{children}</div>}
    </div>
  );
});
