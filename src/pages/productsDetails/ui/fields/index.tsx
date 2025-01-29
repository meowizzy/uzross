import { useEffect } from "react";
import { FieldsSkeleton, ProductFields } from "@entities/product";
import { $vendorProductFields } from "@entities/product/model/services/vendorProductDetails";
import { useUnit } from "effector-react/effector-react.umd";
import { useIntersection } from "@hooks/useIntersection";

type PropsType = {
  id: number;
};

export const ProductDetailsFields = (props: PropsType) => {
  const { id } = props;
  const [ref, isVisible] = useIntersection<HTMLDivElement>();
  const { data, loading, error, fulfilled } = useUnit(
    $vendorProductFields.store,
  );

  useEffect(() => {
    if (isVisible && !data?.length && !fulfilled) {
      $vendorProductFields.effect(id);
    }
  }, [isVisible]);

  if (loading) {
    return <FieldsSkeleton />;
  }

  if (error) {
    return null;
  }

  return <ProductFields ref={ref} data={data} />;
};
