import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { Portal } from "@ui/portal";
import FacebookIcon from "@assets/svg/coloredFacebook.svg";
import InstagramIcon from "@assets/svg/coloredInstagram.svg";
import TelegramIcon from "@assets/svg/coloredTelegram.svg";
import cls from "./styles.module.scss";

export const FixedSocials = () => {
  const { filteredSocials } = useCompanyInfo();

  if (!filteredSocials) {
    return null;
  }

  return (
    <Portal>
      <div className={cls.fixedSocials}>
        <a
          href={filteredSocials.TELEGRAM.socialLink}
          target="_blank"
          className={cls.fixedSocial}
        >
          <TelegramIcon />
        </a>
        <a
          href={filteredSocials.TELEGRAM.socialLink}
          target="_blank"
          className={cls.fixedSocial}
        >
          <InstagramIcon />
        </a>
        <a
          href={filteredSocials.TELEGRAM.socialLink}
          target="_blank"
          className={cls.fixedSocial}
        >
          <FacebookIcon />
        </a>
      </div>
    </Portal>
  );
};
