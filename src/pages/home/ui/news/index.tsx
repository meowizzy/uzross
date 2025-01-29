import { useEffect } from "react";
import { $postsList } from "@entities/post";
import { RoutePaths } from "@shared/config/routes";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useIntersection } from "@hooks/useIntersection";
import { Button } from "@ui/button";
import { Section } from "@ui/section";
import { NewsSkeleton } from "./news.skeleton";
import { NewsItem } from "./newsItem";
import cls from "./styles.module.scss";

export const News = () => {
  const navigate = useNavigate();
  const { t: tHome } = useTranslation("home");
  const { t } = useTranslation();
  const [ref, isVisible] = useIntersection();

  const { data, loading, error, fulfilled } = useUnit($postsList.store);
  const { content: newsData } = data;
  const firstItem = newsData && newsData[0];

  useEffect(() => {
    return () => {
      $postsList.reset();
    };
  }, []);

  useEffect(() => {
    if (isVisible && !fulfilled && !newsData.length) {
      $postsList.effect({
        size: 5,
      });
    }
  }, [isVisible]);

  const onClickReadMore = () => {
    navigate(RoutePaths.NEWS);
  };

  const renderContent = () => {
    if (loading) {
      return <NewsSkeleton />;
    }

    return (
      <div className={cls.newsWrapper}>
        {!!firstItem && (
          <div className={cls.left}>
            <NewsItem
              id={firstItem.id}
              imagePath={firstItem.filePath}
              title={firstItem.title}
              date={firstItem.createdDate}
            />
          </div>
        )}
        <div className={cls.right}>
          <div className={cls.rightTitle}>
            <span>{tHome("sections.news_section.anotherNews")}</span>
          </div>
          <div className={cls.newsList}>
            {newsData.map((item, idx) => {
              if (idx > 0) {
                return (
                  <NewsItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    date={item.createdDate}
                  />
                );
              }
            })}
          </div>
          <Button onClick={onClickReadMore}>{t("buttons.readAll")}</Button>
        </div>
      </div>
    );
  };

  if (error || (!newsData.length && fulfilled)) return null;

  return (
    <Section title={tHome("sections.news_section.title")} ref={ref}>
      {renderContent()}
    </Section>
  );
};
