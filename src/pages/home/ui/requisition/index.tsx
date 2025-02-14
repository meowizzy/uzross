import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { formatPhoneNumber } from "@shared/lib/helpers/formatPhoneNumber";
import { getValidLink } from "@shared/lib/helpers/getValidLink";
import { useTranslation } from "react-i18next";
import { Section } from "@ui/section";
import PhoneIcon from "@assets/svg/phone.svg";
import { RequisitionForm } from "./form";
import { RequisitionSkeleton } from "./requisition.skeleton";
import cls from "./styles.module.scss";

export const Requisition = () => {
  const { t } = useTranslation("home");
  const { loading, phones, socials, emails } = useCompanyInfo();

  const renderContent = () => {
    if (loading) {
      return <RequisitionSkeleton />;
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
        {!!(emails?.length || socials?.length) && (
          <div className={cls.links}>
            {emails?.map((email) => (
              <div className={cls.linksRow} key={email.id}>
                <span className={cls.linksRowLabel}>{email.type.name}:</span>
                <a href={`mailto:${email.name}`}>{email.name}</a>
              </div>
            ))}
            {socials?.map((social) => (
              <div className={cls.linksRow} key={social.id}>
                <span className={cls.linksRowLabel}>
                  {social.socialType.name}:
                </span>
                <a href={social.socialLink}>{social.socialLink}</a>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <Section title={t("sections.requisition")} theme={"dark"}>
      <div className={cls.wrapper}>
        <div className={cls.left}>{renderContent()}</div>
        <div className={cls.right}>
          <RequisitionForm />
        </div>
      </div>
    </Section>
  );
};
