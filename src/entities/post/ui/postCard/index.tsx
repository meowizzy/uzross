import { memo } from "react";
import { RoutePaths } from "@shared/config/routes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@ui/button";
import { Image } from "@ui/image";
import { PostsListItemModel } from "../../model/types/posts";
import cls from "./Post.module.scss";

type PropsType = {
  data: PostsListItemModel;
};

export const PostCard = memo((props: PropsType) => {
  const { data } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClickVisitDetails = () => {
    if (data?.id) {
      navigate(RoutePaths.NEWS_DETAILS + data.id);
    }
  };

  return (
    <article className={cls.postCard}>
      <div className={cls.postCardTop}>
        <div className={cls.postCardImage}>
          <Image src={data.filePath} alt={data.title} />
        </div>
      </div>
      <div className={cls.postCardBottom}>
        {!!data.title && (
          <div className={cls.postCardTitle}>
            <span>{data.title}</span>
          </div>
        )}
        {!!data.createdDate && (
          <div className={cls.postCardDate}>
            <span>{data.createdDate}</span>
          </div>
        )}
        <Button
          theme={"accent"}
          size={"sm"}
          onClick={onClickVisitDetails}
          className={cls.postCardButton}
        >
          {t("viewMore")}
        </Button>
      </div>
    </article>
  );
});
