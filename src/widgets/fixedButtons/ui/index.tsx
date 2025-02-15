import { useEffect, useState } from "react";
import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import cn from "classnames";
import { Button } from "@ui/button";
import { Portal } from "@ui/portal";
import ArrowUpIcon from "@assets/svg/arrowUp.svg";
import FacebookIcon from "@assets/svg/coloredFacebook.svg";
import InstagramIcon from "@assets/svg/coloredInstagram.svg";
import TelegramIcon from "@assets/svg/coloredTelegram.svg";
import cls from "./styles.module.scss";

const handleWindowScroll = (setVisible: (v: boolean) => void) => {
  setVisible(window.scrollY > 500);
};

export const FixedButtons = () => {
  const { filteredSocials } = useCompanyInfo();

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => handleWindowScroll(setVisible));
  }, [isVisible]);

  if (!filteredSocials) {
    return null;
  }

  const onClickScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Portal>
      <div
        className={cn(cls.fixedSocials, {
          [cls.active]: isVisible,
        })}
      >
        {!!filteredSocials.TELEGRAM && (
          <a
            href={filteredSocials.TELEGRAM.socialLink}
            target="_blank"
            className={cls.fixedSocial}
          >
            <TelegramIcon />
          </a>
        )}
        {!!filteredSocials.INSTAGRAM && (
          <a
            href={filteredSocials.INSTAGRAM.socialLink}
            target="_blank"
            className={cls.fixedSocial}
          >
            <InstagramIcon />
          </a>
        )}
        {!!filteredSocials.FACEBOOK && (
          <a
            href={filteredSocials.FACEBOOK.socialLink}
            target="_blank"
            className={cls.fixedSocial}
          >
            <FacebookIcon />
          </a>
        )}
        <Button
          size={"lg"}
          className={cls.upButton}
          icon={<ArrowUpIcon />}
          theme={"primary"}
          onClick={onClickScrollUp}
        />
      </div>
    </Portal>
  );
};
