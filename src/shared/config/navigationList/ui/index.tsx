import cn from "classnames";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { navigationList } from "../model";
import cls from "./NavigationList.module.scss";

type PropsType = {
  className?: string;
  listClassName?: string;
  direction?: "horizontal" | "vertical";
  home?: boolean;
};

export const NavigationList = (props: PropsType) => {
  const {
    className,
    direction = "horizontal",
    listClassName,
    home = true,
  } = props;
  const { t } = useTranslation();
  const classesCompose = cn(cls.navigation, className);
  const listClassesCompose = cn(
    cls.navigationList,
    cls[direction],
    listClassName,
  );

  return (
    <nav className={classesCompose}>
      <ul className={listClassesCompose}>
        {Object.values(navigationList).map((item, index) => {
          return (
            <li key={index} className={cls.navigationListItem}>
              <NavLink to={item.path}>{t(item.name)}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
