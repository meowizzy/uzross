import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { RoutePaths } from "@shared/config/routes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@ui/button";
import { Title } from "@ui/title";
import BannerCircleIcon from "@assets/svg/bannerCircleIcon.svg";
import Code from "@assets/svg/code.svg";
import { Numbers } from "./numbers";
import cls from "./styles.module.scss";

export const Banner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("translation");
  const { t: tHome } = useTranslation("home");
  const { groupedFiles } = useCompanyInfo();

  return (
    <div className={cls.banner}>
      <div className={"container"}>
        <div className={cls.bannerTop}>
          <Title className={cls.bannerTitle} pageTitle size={"xxl"}>
            {tHome("banner.title")}
          </Title>
          <Title className={cls.bannerSubtitle} size={"lg"}>
            {tHome("banner.subtitle")}
          </Title>
          <div className={cls.bannerButtons}>
            <Button size={"lg"} onClick={() => navigate(RoutePaths.PRODUCTS)}>
              {t("menuList.products")}
            </Button>
            <Button
              size={"lg"}
              onClick={() => navigate(RoutePaths.ABOUT)}
              theme={"accent"}
            >
              {t("menuList.about")}
            </Button>
          </div>
        </div>
        <div className={cls.bannerBottomWrap}>
          <div
            className={cls.bannerBottom}
            style={{ backgroundImage: `url(${groupedFiles?.primary})` }}
          >
            <div className={cls.bannerAnimatedCircle}>
              <Code className={cls.bannerAnimatedCircleCode} />
              <BannerCircleIcon />
            </div>
          </div>
          <Numbers t={tHome} />
        </div>
      </div>
    </div>
  );
};
