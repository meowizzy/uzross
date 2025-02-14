import { ContactsType, NameCodeType } from "@shared/types/common";

export interface CompanyAddress {
  landmark: string;
  street: string;
  house: string;
  apartment: string;
  address: string;
  longitude: string;
  latitude: string;
}

export interface CompanyFiles {
  id: number;
  filePath: string;
  main: true;
}

export interface CompanyCharacteristicDTOInfo {
  id: number;
  title: string;
  subTitle: string;
}

export type SocialsType = "Telegram" | "Facebook" | "Instagram" | "Twitter";

export type SocialsCode = "TELEGRAM" | "FACEBOOK" | "INSTAGRAM" | "TWITTER";

export interface CompanySocials {
  id: number;
  name: string;
  type: {
    id: number;
  } & NameCodeType<SocialsType, SocialsCode>;
  primary: boolean;
}

export interface SocialDTOModel {
  id: number;
  socialType: NameCodeType<SocialsType, SocialsCode>;
  socialLink: string;
}

export interface CompanyInfoModel {
  id: number;
  name: string;
  description: string;
  address: CompanyAddress;
  files: Array<CompanyFiles>;
  characteristicDTOS: Array<CompanyCharacteristicDTOInfo>;
  phones: Array<ContactsType>;
  emails: Array<ContactsType>;
  socialAddresses: Array<CompanySocials>;
  socialDTOS: Array<SocialDTOModel>;
}
