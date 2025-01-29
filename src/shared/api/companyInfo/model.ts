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

export interface CompanyPhones {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
    code: string;
  };
}

export interface CompanyEmails {
  id: number;
  name: string;
  type: {
    id: number;
    name: string;
    code: string;
  };
  primary: boolean;
}

export type SocialsType =
  | "telegram"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "whatsapp"
  | "twitter";

export interface CompanySocials {
  id: number;
  name: string;
  type: {
    id: number;
    name: SocialsType;
    code: string;
  };
  primary: boolean;
}

export interface CompanyInfoModel {
  id: number;
  name: string;
  description: string;
  address: CompanyAddress;
  files: Array<CompanyFiles>;
  characteristicDTOS: Array<CompanyCharacteristicDTOInfo>;
  phones: Array<CompanyPhones>;
  emails: Array<CompanyEmails>;
  socialAddresses: Array<CompanySocials>;
}
