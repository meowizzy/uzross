import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { NavigationList } from "@shared/config/navigationList";
import { Contacts } from "@widgets/footer/ui/contacts";
import { Description } from "@widgets/footer/ui/description";
import { Map } from "@widgets/map";
import { useTranslation } from "react-i18next";
import { Button } from "@ui/button";
import { Logo } from "@ui/logo";
import ArrowUpIcon from "@assets/svg/arrowUp.svg";
import cls from "./Footer.module.scss";

export const Footer = () => {
  const { loading, phones, links, address, error, description } =
    useCompanyInfo();
  const { t } = useTranslation();

  const onClickScrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={cls.footer}>
      <div className={"container"}>
        <div className={cls.footerTop}>
          <div className={cls.footerTopLeft}>
            <Logo color={"light"} />
            <Description
              description={description}
              loading={loading}
              error={!!error}
            />
          </div>
          <NavigationList direction={"vertical"} />
          <Contacts
            loading={loading}
            error={error}
            links={links}
            phones={phones}
          />
          <Map
            longitude={address?.longitude}
            latitude={address?.latitude}
            loading={loading}
            error={!!error}
          />
        </div>
        <div className={cls.footerBot}>
          <div className={cls.footerBotCopyright}>
            <span>© 2025 {`${t("siteName")}. ${t("copyrightText")}`}</span>
          </div>
          <Button
            size={"lg"}
            icon={<ArrowUpIcon />}
            theme={"secondary"}
            className={cls.footerButtonUp}
            onClick={onClickScrollUp}
          />
        </div>
      </div>
    </footer>
  );
};
