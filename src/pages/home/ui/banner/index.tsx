import { RoutePaths } from "@shared/config/routes";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@ui/button";
import BannerCircleIcon from "@assets/svg/bannerCircleIcon.svg";
import Code from "@assets/svg/code.svg";
import { Numbers } from "./numbers";
import cls from "./styles.module.scss";

export const Banner = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("translation");
  const { t: tHome } = useTranslation("home");

  return (
    <div className={cls.banner}>
      <div className={"container"}>
        <div className={cls.bannerTop}>
          <h1 className={cls.bannerTitle}>{tHome("banner.title")}</h1>
          <p className={cls.bannerSubtitle}>{tHome("banner.subtitle")}</p>
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
        <div className={cls.bannerBottom}>
          <div className={cls.bannerAnimatedCircle}>
            <Code className={cls.bannerAnimatedCircleCode} />
            <BannerCircleIcon />
          </div>
          <Numbers t={tHome} />
        </div>
      </div>
    </div>
  );
};
