import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { formatPhoneNumber } from "@shared/lib/helpers/formatPhoneNumber";
import { getValidLink } from "@shared/lib/helpers/getValidLink";
import { useTranslation } from "react-i18next";
import { Section } from "@ui/section";
import PhoneIcon from "@assets/svg/phone.svg";
import { CallbackSkeleton } from "./callback.skeleton";
import cls from "./styles.module.scss";

export const CallbackSection = () => {
  const { t } = useTranslation();
  const { loading, phones, links } = useCompanyInfo();

  const renderContent = () => {
    if (loading) {
      return <CallbackSkeleton />;
    }

    return (
      <>
        <div className={cls.phones}>
          <div className={cls.phonesIcon}>
            <PhoneIcon />
          </div>
          {!!phones?.length && (
            <div className={cls.phonesList}>
              {phones.map((phone) => (
                <a key={phone.id} href={`tel:${formatPhoneNumber(phone.name)}`}>
                  {phone.name}
                </a>
              ))}
            </div>
          )}
        </div>
        {!!links?.length && (
          <div className={cls.links}>
            {links.map((link) => (
              <div className={cls.linksRow} key={link.id}>
                <span className={cls.linksRowLabel}>{link.type.name}:</span>
                <a href={getValidLink(link)}>{link.name}</a>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <Section title={t("sections.callback")} theme={"dark"}>
      <div className={cls.wrapper}>
        <div className={cls.left}>{renderContent()}</div>
        <div className={cls.right}></div>
      </div>
    </Section>
  );
};
