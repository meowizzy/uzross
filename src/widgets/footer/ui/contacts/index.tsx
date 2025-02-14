import { SocialDTOModel } from "@shared/api/companyInfo/model";
import { ErrorResponseModel } from "@shared/effector/models";
import { formatPhoneNumber } from "@shared/lib/helpers/formatPhoneNumber";
import { getSocialIconByCode } from "@shared/lib/helpers/getSocialIconByCode";
import { ContactsType } from "@shared/types/common";
import EmailIcon from "@assets/svg/email.svg";
import PhoneIcon from "@assets/svg/phoneSecondary.svg";
import { ContactsSkeleton } from "./contacts.skeleton";
import cls from "./styles.module.scss";

type PropsType = {
  loading: boolean;
  phones: Array<ContactsType>;
  socials: Array<SocialDTOModel>;
  emails: Array<ContactsType>;
  error: ErrorResponseModel;
};

export const Contacts = (props: PropsType) => {
  const { loading, phones, socials, emails, error } = props;

  const renderContent = () => {
    if (loading) return <ContactsSkeleton />;

    return (
      <>
        <div className={cls.contactsList}>
          <div className={cls.contactsListRow}>
            <PhoneIcon />
            {!!phones?.length &&
              phones.map((phone, idx) => {
                const isLast = idx === phones.length - 1;
                const separator = !isLast && <span>/</span>;

                return (
                  <>
                    <a href={`tel:${formatPhoneNumber(phone.name)}`} key={idx}>
                      {phone.name}
                    </a>
                    {separator}
                  </>
                );
              })}
          </div>
          {!!emails?.length &&
            emails.map((email) => (
              <div className={cls.contactsListRow} key={email.id}>
                <EmailIcon />
                <a href={`mailto:${email.type.name}`} target="_blank">
                  {email.name}
                </a>
              </div>
            ))}
          {!!socials?.length &&
            socials.map((social) => (
              <div className={cls.contactsListRow} key={social.id}>
                {getSocialIconByCode(social.socialType.code)}
                <a href={social.socialLink} target="_blank">
                  {social.socialType.name}
                </a>
              </div>
            ))}
        </div>
      </>
    );
  };

  if (error) {
    return null;
  }

  return <div className={cls.contacts}>{renderContent()}</div>;
};
