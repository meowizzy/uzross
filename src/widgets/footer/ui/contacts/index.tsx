import { CompanyEmails, CompanyPhones } from "@shared/api/companyInfo/model";
import { ErrorResponseModel } from "@shared/effector/models";
import { formatPhoneNumber } from "@shared/lib/helpers/formatPhoneNumber";
import { getValidLink } from "@shared/lib/helpers/getValidLink";
import AddressIcon from "@assets/svg/address.svg";
import EmailIcon from "@assets/svg/email.svg";
import PhoneIcon from "@assets/svg/phoneSecondary.svg";
import TelegramIcon from "@assets/svg/telegram.svg";
import { ContactsSkeleton } from "./contacts.skeleton";
import cls from "./styles.module.scss";

type PropsType = {
  loading: boolean;
  phones: Array<CompanyPhones>;
  links: Array<CompanyEmails>;
  error: ErrorResponseModel;
};

export const Contacts = (props: PropsType) => {
  const { loading, phones, links, error } = props;

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
          {!!links?.length &&
            links.map((link) => {
              let icon;

              switch (link.type.name) {
                case "Telegram":
                  icon = <TelegramIcon />;
                  break;
                case "Address":
                  icon = <AddressIcon />;
                  break;
                default:
                  icon = <EmailIcon />;
              }

              return (
                <div className={cls.contactsListRow} key={link.id}>
                  {icon}
                  <a href={getValidLink(link)}>{link.name}</a>
                </div>
              );
            })}
        </div>
      </>
    );
  };

  if (error) {
    return null;
  }

  return <div className={cls.contacts}>{renderContent()}</div>;
};
