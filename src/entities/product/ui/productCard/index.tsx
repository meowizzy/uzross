import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Image } from "@ui/image";
import cls from "./styles.module.scss";

type PropsType = {
  imagePath: string;
  title: string;
  path: string;
};

export const ProductCard = memo((props: PropsType) => {
  const { path, title, imagePath } = props;

  return (
    <div className={cls.productCard}>
      <div className={cls.productImage}>
        <Link to={path}>
          <Image src={imagePath} alt={title} />
        </Link>
      </div>
      <div className={cls.productName}>
        <Link to={path}>{title}</Link>
      </div>
    </div>
  );
});
