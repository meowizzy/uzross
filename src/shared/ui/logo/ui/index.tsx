import { memo } from "react";
import { RoutePaths } from "@shared/config/routes";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@assets/svg/logo.svg?url";
import cls from "./styles.module.scss";

type PropsType = {
  className?: string;
  color?: "light" | "dark";
};

export const Logo = memo((props: PropsType) => {
  const { className, color = "dark" } = props;
  const { t } = useTranslation();

  const classesCompose = cn(cls.logoWrapper, className, cls[color]);

  return (
    <div className={classesCompose}>
      <Link to={RoutePaths.HOME} className={cls.link}>
        <div className={cls.logo}>
          <img src={logo} alt={t("siteName")} />
        </div>
        <span className={cls.siteName}>{t("siteName")}</span>
      </Link>
    </div>
  );
});
