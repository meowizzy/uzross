import { memo, useMemo } from "react";
import { $customersList } from "@entities/customer";
import { $partnersList } from "@entities/partner";
import { Marquee } from "@widgets/marquee";
import { useUnit } from "effector-react";
import { useTranslation } from "react-i18next";
import { useIntersection } from "@hooks/useIntersection";
import { Section } from "@ui/section";
import { Tabs, TabsDataType } from "@ui/tabs";
import cls from "./styles.module.scss";

export const CustomersPartnersSection = memo(() => {
  const { t } = useTranslation("home");
  const [interSectionRef, isVisible] = useIntersection();

  const {
    data: customersData,
    loading: customersLoading,
    error: customersError,
  } = useUnit($customersList.store);
  const {
    data: partnersData,
    loading: partnersLoading,
    error: partnersError,
  } = useUnit($partnersList.store);

  const { content: customersItems } = customersData;
  const { content: partnersItems } = partnersData;

  if (partnersError && customersError) {
    return null;
  }

  const tabsItems: Array<TabsDataType> = useMemo(() => {
    return [
      {
        key: "customers",
        label: t("sections.customers"),
        children: customersError ? null : (
          <Marquee
            className={cls.marquee}
            loading={customersLoading}
            count={5}
            items={customersItems?.map((item) => item.filePath)}
          />
        ),
      },
      {
        key: "partners",
        label: t("sections.partners"),
        children: partnersError ? null : (
          <Marquee
            className={cls.marquee}
            count={5}
            loading={partnersLoading}
            items={partnersItems?.map((item) => item.filePath)}
          />
        ),
      },
    ];
  }, [
    customersItems,
    partnersItems,
    partnersLoading,
    customersLoading,
    partnersError,
    customersError,
  ]);

  const onChangeTab = (key: string) => {
    if (key === "customers" && !customersItems?.length) {
      $customersList.effect();
    } else if (key === "partners" && !partnersItems?.length) {
      $partnersList.effect();
    }
  };

  return (
    <Section ref={interSectionRef}>
      <Tabs
        trigger={isVisible}
        onChange={onChangeTab}
        items={tabsItems}
        defaultKey={"customers"}
      />
    </Section>
  );
});
