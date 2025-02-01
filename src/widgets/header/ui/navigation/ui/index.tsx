import { useEffect, useState } from "react";
import { NavigationList } from "@shared/config/navigationList";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useClickOutside } from "@hooks/useClickOutside";
import { Button } from "@ui/button";
import { Portal } from "@ui/portal";
import cls from "./styles.module.scss";

export const Navigation = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const { ref, buttonRef } = useClickOutside<HTMLDivElement, HTMLButtonElement>(
    setVisible,
  );

  const onClickOpenNavigationList = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    if (visible) {
      setVisible(false);
    }
  }, [location]);

  return (
    <>
      <Button
        className={cn(cls.navigationButton, {
          [cls.navigationButtonActive]: visible,
        })}
        ref={buttonRef}
        icon={
          <div className={cls.navigationButtonIcon}>
            <span></span>
          </div>
        }
        theme={"clear"}
        onClick={onClickOpenNavigationList}
      >
        {t("labels.menu")}
      </Button>
      <Portal>
        <div
          className={cn(cls.navigationWrapper, {
            [cls.navigationWrapperVisible]: visible,
          })}
          ref={ref}
        >
          <NavigationList
            listClassName={cn(cls.navigationList, "container")}
            className={cls.navigation}
          />
        </div>
      </Portal>
    </>
  );
};
