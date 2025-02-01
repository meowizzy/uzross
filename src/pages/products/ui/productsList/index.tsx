import { ReactNode, useEffect, useState } from "react";
import { HandlerType } from "@shared/api";
import { XHRDataStoreState } from "@shared/effector/constructors";
import { PaginationListModel } from "@shared/effector/models";
import { CreateStoreReturnType } from "@shared/effector/types/store";
import { CardSkeleton } from "@widgets/card";
import { PaginationList } from "@widgets/paginationList";
import { useUnit } from "effector-react";
import { useSkeleton } from "@ui/skeleton";

type PropsType<P, R> = {
  $store: CreateStoreReturnType<
    HandlerType<P, PaginationListModel<R>>,
    XHRDataStoreState<PaginationListModel<R>>
  >;
  params?: P;
  render: (item: R) => ReactNode;
};

export const ProductsList = <P = unknown, R = unknown>(
  props: PropsType<P, R>,
) => {
  const { $store, params, render } = props;
  const skeletonItems = useSkeleton(8);
  const { data, loading } = useUnit($store.store);
  const { content: productsData, number, totalPages } = data;
  const [page, setPage] = useState(number || 1);

  useEffect(() => {
    // if (!productsData.length || number !== page - 1) {
    //
    // }

    $store.effect(
      params
        ? {
            ...params,
            page: page - 1,
          }
        : {},
    );
  }, [page, $store]);

  if (loading) {
    return (
      <PaginationList
        data={skeletonItems}
        items={4}
        gap={16}
        render={() => <CardSkeleton imageHeight={"md"} />}
      />
    );
  }

  return (
    <PaginationList
      data={productsData}
      items={4}
      gap={16}
      render={render}
      pagination={{
        page,
        onChange: (page) => setPage(page),
        total: totalPages,
      }}
    />
  );
};
