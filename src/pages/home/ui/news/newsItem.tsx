import { RoutePaths } from "@shared/config/routes";
import { Link } from "react-router-dom";
import { Image } from "@ui/image";
import cls from "./styles.module.scss";

type PropsType = {
  id: number;
  imagePath?: string;
  title: string;
  date: string;
};

export const NewsItem = (props: PropsType) => {
  const { imagePath, title, date, id } = props;

  return (
    <article className={cls.newsItem}>
      {!!imagePath && (
        <div className={cls.newsPic}>
          <Link to={RoutePaths.NEWS_DETAILS + id}>
            <Image src={imagePath} alt={title} />
          </Link>
        </div>
      )}
      <time className={cls.newsDate} dateTime={date}>
        {date}
      </time>
      <div className={cls.newsTitle}>
        <Link to={RoutePaths.NEWS_DETAILS + id}>
          <span>{title}</span>
        </Link>
      </div>
    </article>
  );
};
