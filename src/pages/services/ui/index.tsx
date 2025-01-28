import { memo } from "react";
import { Content } from "@widgets/content";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();

  return <Content title={t("menuList.services")}></Content>;
};

export default memo(ServicesPage);
