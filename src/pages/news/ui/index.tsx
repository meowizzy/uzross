import { memo, useEffect, useState } from "react";
import { $postsList, PostCard, PostCardSkeleton } from "@entities/post";
import { Content } from "@widgets/content";
import { PaginationList } from "@widgets/paginationList";
import dayjs from "dayjs";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useSkeleton } from "@ui/skeleton";

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

  const renderChildren = () => {
    const gap = 32;

    if (loading) {
      return (
        <PaginationList
          data={skeletonItems}
          gap={gap}
          render={() => <PostCardSkeleton />}
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
          onChange: (page) => setPage(page),
          total: totalPages,
        }}
      />
    );
  };

  return <Content title={t("menuList.news")}>{renderChildren()}</Content>;
};

export default memo(NewsPage);
