import React from "react";
import { PostsListItemModel } from "@entities/post";
import cn from "classnames";
import dayjs from "dayjs";
import { Image } from "@ui/image";
import cls from "./styles.module.scss";

type PropsType = {
  data: Partial<
    Pick<
      PostsListItemModel,
      "title" | "filePath" | "createdDate" | "description"
    >
  >;
  titlePosition?: "left" | "center" | "right";
  className?: string;
};

export const PostDetails = (props: PropsType) => {
  const { data, className, titlePosition = "left" } = props;
  const classesCompose = cn(cls.postDetails, className);

  return (
    <article className={classesCompose}>
      <div className={cls.postDetailsImage}>
        <Image src={data.filePath} alt={data.title} />
      </div>
      <div className={cls.postDetailsBottom}>
        {!!data.createdDate && (
          <time className={cls.postDetailsDate} dateTime={data.createdDate}>
            {dayjs(data.createdDate).format("MMMM DD, YYYY")}
          </time>
        )}
        {!!data.title && (
          <h1 className={cn(cls.postDetailsTitle, cls[titlePosition])}>
            {data.title}
          </h1>
        )}
        {!!data.description && (
          <div className={cls.postDetailsDescription}>{data.description}</div>
        )}
      </div>
    </article>
  );
};
