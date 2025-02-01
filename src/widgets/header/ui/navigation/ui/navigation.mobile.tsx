import { memo, useEffect } from "react";
import { NavigationList } from "@shared/config/navigationList";
import { Phones } from "@widgets/header/ui/phones";
import cn from "classnames";
import { useLocation } from "react-router-dom";
import { Button } from "@ui/button";
import { Drawer, useModal } from "@ui/drawer";
import cls from "./styles.module.scss";

export const NavigationMobile = memo(() => {
  const modalControl = useModal();
  const location = useLocation();

  const onClickOpenNavigationList = () => {
    modalControl.openModal();
  };

  useEffect(() => {
    if (modalControl.modalProps.visible) {
      modalControl.closeModal();
    }
  }, [location]);

  return (
    <>
      <Button
        className={cn(cls.navigationButton, {
          [cls.navigationButtonActive]: modalControl.modalProps.visible,
        })}
        icon={
          <div className={cls.navigationButtonIcon}>
            <span></span>
          </div>
        }
        theme={"clear"}
        onClick={onClickOpenNavigationList}
      />
      <Drawer
        open={modalControl.modalProps.visible}
        onClose={modalControl.closeModal}
        footer={<Phones />}
      >
        <NavigationList direction={"vertical"} />
      </Drawer>
    </>
  );
});
