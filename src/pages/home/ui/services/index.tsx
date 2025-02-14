import { useEffect } from "react";
import {
  $servicesList,
  ServiceCard,
  ServiceCardSkeleton,
} from "@entities/service";
import { Section } from "@shared/ui/section";
import { PaginationList } from "@widgets/paginationList";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "@hooks/useIntersection";
import { useSkeleton } from "@ui/skeleton";

export const Services = () => {
  const { t } = useTranslation("home");
  const [ref, isVisible] = useIntersection();
  const skeletonItems = useSkeleton(2);
  const { data, loading, error, fulfilled } = useUnit($servicesList.store);
  const { content: servicesData } = data;

  useEffect(() => {
    if (isVisible && !servicesData.length && !fulfilled) {
      $servicesList.effect({});
    }
  }, [isVisible]);

  const renderContent = () => {
    if (loading) {
      return (
        <PaginationList
          data={skeletonItems}
          gap={16}
          columnsInRow={{
            sm: 1,
            md: 2,
            lg: 2,
          }}
          render={(_, idx) => <ServiceCardSkeleton key={idx} />}
        />
      );
    }

    return (
      <PaginationList
        data={servicesData}
        gap={16}
        columnsInRow={{
          sm: 1,
          md: 2,
          lg: 2,
        }}
        render={(service) => (
          <ServiceCard
            title={service.title}
            description={service.description}
            imagePath={service.filePath}
            key={service.id}
          />
        )}
      />
    );
  };

  if (error || !data) {
    return null;
  }

  return (
    <Section title={t("sections.services")} theme={"dark"} ref={ref}>
      {renderContent()}
    </Section>
  );
};
