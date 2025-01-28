import { useEffect } from "react";
import { $postsList } from "@entities/post";
import { useUnit } from "effector-react";
import { useIntersection } from "@hooks/useIntersection";
import { Section } from "@ui/section";
import { NewsSkeleton } from "./news.skeleton";
import { NewsItem } from "./newsItem";
import cls from "./styles.module.scss";

export const News = () => {
  const { data, loading, error, fulfilled } = useUnit($postsList.store);
  const { content: newsData } = data;
  const firstItem = newsData && newsData[0];
  const [ref, isVisible] = useIntersection();

  useEffect(() => {
    if (isVisible && !newsData.length) {
      $postsList.effect({
        sortOrder: "asc",
        size: 5,
      });
    }
  }, [isVisible]);

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
            <span>Boshqa yangiliklar</span>
          </div>
          {newsData &&
            newsData.map((item, idx) => {
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
      </div>
    );
  };

  if (error || (!newsData.length && fulfilled)) return null;

  return (
    <Section title={"Yangiliklar"} ref={ref}>
      {renderContent()}
    </Section>
  );
};
