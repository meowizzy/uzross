import { CSSProperties, memo, ReactNode } from "react";
import cn from "classnames";
import { useDocumentLocking } from "@hooks/useDocumentLock";
import { Button } from "@ui/button";
import { Portal } from "@ui/portal";
import CloseIcon from "@assets/svg/close.svg";
import cls from "./styles.module.scss";

type PropsType = {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  onClose?: () => void;
  width?: number;
};

export const Drawer = memo((props: PropsType) => {
  const { children, open, onClose, header, footer, width = 360 } = props;

  useDocumentLocking(open);

  const drawerClassesCompose = cn(cls.drawer, { [cls.drawerOpened]: open });

  const onClickCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  const renderModalCloseButton = () => {
    if (!onClose) {
      return null;
    }

    return (
      <Button
        className={cls.closeButton}
        theme={"clear"}
        icon={<CloseIcon />}
        onClick={onClickCloseModal}
      />
    );
  };

  return (
    <Portal>
      <div className={drawerClassesCompose}>
        <div className={cls.drawerBackdrop} onClick={onClickCloseModal}></div>
        <div
          className={cls.drawerWindow}
          style={{ "--width": `${width}px` } as CSSProperties}
        >
          {!!header ? (
            <div className={cls.drawerHeader}>
              {header}
              {renderModalCloseButton()}
            </div>
          ) : (
            renderModalCloseButton()
          )}
          <div className={cls.drawerMiddle}>{children}</div>
          {!!footer && <div className={cls.drawerFooter}>{footer}</div>}
        </div>
      </div>
    </Portal>
  );
});
