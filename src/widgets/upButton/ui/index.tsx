import { memo, useEffect, useState } from "react";
import cn from "classnames";
import { Button } from "@ui/button";
import { Portal } from "@ui/portal";
import ArrowUpIcon from "@assets/svg/arrowUp.svg";
import cls from "./styles.module.scss";

const handleWindowScroll = (setVisible: (v: boolean) => void) => {
  setVisible(window.scrollY > 500);
};

export const UpButton = memo(() => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => handleWindowScroll(setVisible));
  }, [isVisible]);

  const onClickScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Portal>
      <Button
        size={"lg"}
        icon={<ArrowUpIcon />}
        theme={"primary"}
        className={cn(cls.footerButtonUp, {
          [cls.visible]: isVisible,
        })}
        onClick={onClickScrollUp}
      />
    </Portal>
  );
});
