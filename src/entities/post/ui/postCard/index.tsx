import { memo } from "react";
import { RoutePaths } from "@shared/config/routes";
import { Card } from "@widgets/card";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { Button } from "@ui/button";
import { PostsListItemModel } from "../../model/types/posts";
import cls from "./Post.module.scss";

type PropsType = {
  data: PostsListItemModel;
};

export const PostCard = memo((props: PropsType) => {
  const { data } = props;
  const { t } = useTranslation();
  const path = RoutePaths.NEWS_DETAILS + data?.id;

  return (
    <article className={cls.postCard}>
      <Card path={path} imagePath={data.filePath} title={data.title}>
        {!!data.createdDate && (
          <div className={cls.postCardDate}>
            <span>{dayjs(data.createdDate).format("MMMM DD, YYYY")}</span>
          </div>
        )}
        <Button
          theme={"accent"}
          size={"sm"}
          path={path}
          className={cls.postCardButton}
        >
          {t("buttons.viewMore")}
        </Button>
      </Card>
    </article>
  );
});
