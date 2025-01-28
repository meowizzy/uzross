import React, { Fragment, memo, useMemo } from "react";
import { navigationList } from "@shared/config/navigationList";
import { RoutePaths } from "@shared/config/routes";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import cls from "./styles.module.scss";

type PropsType = {
  dynamicCrumb?: string;
};

export const BreadCrumbs = memo((props: PropsType) => {
  const { dynamicCrumb } = props;
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const pathNames = useMemo(() => {
    return pathname.split("/").filter((i) => i.length);
  }, [pathname]);

  const separator = (
    <li className={cls.breadCrumbsSeparator}>
      <span>/</span>
    </li>
  );

  return (
    <div className={cls.breadCrumbs}>
      <ul className={cls.breadCrumbsList}>
        <li className={cls.breadCrumbsItem}>
          <Link to={RoutePaths.HOME}>
            {t(navigationList[RoutePaths.HOME].name)}
          </Link>
        </li>
        {separator}
        {!!pathNames.length &&
          pathNames.map((pathName, index) => {
            const isLast = index === pathNames.length - 1;
            const validPath = `/${pathName}`;

            if (!navigationList[validPath]) {
              return null;
            }

            let crumb = (
              <Link to={navigationList[validPath].path}>
                {t(navigationList[validPath].name)}
              </Link>
            );

            if (isLast) {
              crumb = <span>{t(navigationList[validPath].name)}</span>;
            }

            return (
              <Fragment key={pathName}>
                <li
                  className={cn(cls.breadCrumbsItem, {
                    [cls.breadCrumbsCurrent]: isLast,
                  })}
                >
                  {crumb}
                </li>
                {!isLast && separator}
                {!isLast && dynamicCrumb && (
                  <li
                    className={cn(
                      cls.breadCrumbsItem,
                      cls.breadCrumbsCurrent,
                      cls.dynamicCrumb,
                    )}
                  >
                    <span>{dynamicCrumb}</span>
                  </li>
                )}
              </Fragment>
            );
          })}
      </ul>
    </div>
  );
});
