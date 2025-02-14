import { useMemo } from "react";
import {
  CompanySocials,
  SocialDTOModel,
  SocialsCode,
  SocialsType,
} from "@shared/api/companyInfo/model";
import { $companyInfo } from "@shared/api/companyInfo/services";
import { useUnit } from "effector-react";

type FilteredSocials = Record<SocialsCode, SocialDTOModel>;

type GroupedFilesType = Record<
  "primary" | "secondary" | "tertiary" | "quaternary",
  string
>;

export const useCompanyInfo = () => {
  const { data, loading, error } = useUnit($companyInfo.store);
  const phones = data?.phones;
  const name = data?.name;
  const emails = data?.emails;
  const socials = data?.socialDTOS;
  const description = data?.description;
  const address = data?.address;
  const files = data?.files;
  const chars = data?.characteristicDTOS;

  const groupedFiles: GroupedFilesType = useMemo(() => {
    const primary = files?.find((file) => file.main);
    const other = files?.filter((file) => !file.main);

    return {
      primary: primary?.filePath,
      secondary: other?.[0].filePath,
      tertiary: other?.[1].filePath,
      quaternary: other?.[2]?.filePath,
    };
  }, [files]);

  const filteredSocials: FilteredSocials = useMemo(() => {
    return socials?.reduce((acc, curr) => {
      acc[curr.socialType.code] = curr;

      return acc;
    }, {} as FilteredSocials);
  }, [socials]);

  const links = useMemo(() => {
    if (!emails && !socials) {
      return null;
    }

    return [...emails, ...socials];
  }, [emails, socials]);

  return {
    name,
    links,
    phones,
    socials,
    emails,
    loading,
    error,
    description,
    address,
    files,
    chars,
    filteredSocials,
    groupedFiles,
  };
};
