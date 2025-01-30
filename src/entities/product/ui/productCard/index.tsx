import React, { memo } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { Image } from "@ui/image";
import cls from "./styles.module.scss";

type PropsType = {
  imagePath: string;
  title?: string;
  path?: string;
  className?: string;
};

export const ProductCard = memo((props: PropsType) => {
  const { path, title, imagePath, className } = props;

  return (
    <div className={cn(cls.productCard, className)}>
      <div className={cn(cls.productImage, "cardImage")}>
        {!!path ? (
          <Link to={path}>
            <Image src={imagePath} alt={title} />
          </Link>
        ) : (
          <Image src={imagePath} alt={title} />
        )}
      </div>
      {!!title && (
        <div className={cls.productName}>
          {!!path ? <Link to={path}>{title}</Link> : <span>{title}</span>}
        </div>
      )}
    </div>
  );
});
