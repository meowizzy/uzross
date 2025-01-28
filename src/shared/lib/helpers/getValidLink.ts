import { CompanyEmails, CompanySocials } from "@shared/api/companyInfo/model";

export const getValidLink = (link: CompanyEmails | CompanySocials) => {
  if (link.type.name === "Email" || link.type.name === "Gmail") {
    return `mailto:${link.name}`;
  } else if (link.type.name === "Telegram") {
    return `https://t.me/${link.name}`;
  } else if (link.type.name === "Facebook") {
    return `https://www.facebook.com/${link.name}`;
  } else if (link.type.name === "Twitter") {
    return `https://twitter.com/${link.name}`;
  } else if (link.type.name === "Instagram") {
    return `https://instagram.com/${link.name}`;
  }
};
