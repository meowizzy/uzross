import { memo, ReactNode } from "react";
import { useCompanyInfo } from "@shared/api/companyInfo/useCompanyContacts";
import { formatPhoneNumber } from "@shared/lib/helpers/formatPhoneNumber";
import { getValidLink } from "@shared/lib/helpers/getValidLink";
import { Content } from "@widgets/content";
import { Map } from "@widgets/map";
import { useTranslation } from "react-i18next";
import { Section } from "@ui/section";
import { ContactsSkeleton } from "./contacts.skeleton";
import cls from "./styles.module.scss";

type ContactsItemProps = {
  label: string;
  children?: ReactNode;
};

const ContactsItem = (props: ContactsItemProps) => {
  const { label, children } = props;

  return (
    <div className={cls.contactsItem}>
      <div className={cls.contactsLabel}>{label}</div>
      <div className={cls.contactsValue}>{children}</div>
    </div>
  );
};

const Contacts = () => {
  const { t } = useTranslation("contacts");
  const { address, loading, socials, error, filteredSocials, phones, emails } =
    useCompanyInfo();

  if (loading) {
    return null;
  }

  return (
    <Content>
      <div className={cls.map}>
        <Map
          className={cls.mapInner}
          width={"100%"}
          height={"100%"}
          latitude={address.latitude}
          longitude={address.longitude}
          borderRadius={"var(--radius-lg)"}
          loading={loading}
          error={!!error}
        />
      </div>
      {loading ? (
        <ContactsSkeleton />
      ) : (
        <Section title={t("title")} size={"lg"} titleSize={"xxl"}>
          <div className={cls.contacts}>
            <ContactsItem label={t("address")}>{address.address}</ContactsItem>
            <ContactsItem label={t("email")}>
              {emails.map((item) => (
                <a href={getValidLink(item)} key={item.id}>
                  {item.name}
                </a>
              ))}
            </ContactsItem>
            <ContactsItem label={t("telegram")}>
              <a href={getValidLink(filteredSocials.telegram)}>
                {filteredSocials.telegram.name}
              </a>
            </ContactsItem>
            <ContactsItem label={t("phoneNumber")}>
              {phones.map((item) => (
                <a href={formatPhoneNumber(item.name)} key={item.id}>
                  {item.name}
                </a>
              ))}
            </ContactsItem>
            <ContactsItem label={t("socials")}>
              <div className={cls.socialList}>
                {socials.map((item) => (
                  <a href={getValidLink(item)} key={item.id}>
                    {item.name}
                  </a>
                ))}
              </div>
            </ContactsItem>
          </div>
        </Section>
      )}
    </Content>
  );
};

export default memo(Contacts);
