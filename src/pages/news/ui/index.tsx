import { memo, useEffect, useState } from "react";
import { $postsList, PostCard } from "@entities/post";
import { CardSkeleton } from "@widgets/card";
import { Content } from "@widgets/content";
import { PaginationList } from "@widgets/paginationList";
import { useUnit } from "effector-react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Skeleton, useSkeleton } from "@ui/skeleton";

const NewsPage = () => {
  const { t } = useTranslation();
  const { data, loading } = useUnit($postsList.store);
  const { content: companyPostsData, number, totalPages } = data;
  const [page, setPage] = useState(number || 1);
  const skeletonItems = useSkeleton(6);

  useEffect(() => {
    return () => {
      $postsList.reset();
    };
  }, []);

  useEffect(() => {
    $postsList.effect({ size: 6, page: page - 1 });
  }, [page]);

  const onChangePagination = (page: number) => setPage(page);

  const renderChildren = () => {
    const gap = 32;

    if (loading) {
      return (
        <PaginationList
          data={skeletonItems}
          gap={gap}
          render={() => (
            <CardSkeleton>
              <Skeleton
                width="150px"
                height="var(--height-sm)"
                borderRadius="250px"
              />
            </CardSkeleton>
          )}
        />
      );
    }

    return (
      <PaginationList
        data={companyPostsData}
        gap={gap}
        render={(post) => <PostCard data={post} />}
        pagination={{
          page,
          onChange: onChangePagination,
          total: totalPages,
        }}
      />
    );
  };

  return (
    <>
      <Helmet title={`${t("menuList.news")} | UzRoss`} />
      <Content title={t("menuList.news")}>{renderChildren()}</Content>
    </>
  );
};

export default memo(NewsPage);
